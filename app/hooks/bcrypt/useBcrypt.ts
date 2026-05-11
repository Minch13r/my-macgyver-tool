// app/hooks/bcrypt/useBcrypt.ts
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

export function useBcrypt() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 탭 및 상태 관리 영역
  const [activeTab, setActiveTab] = useState<"hash" | "verify">("hash");
  const [password, setPassword] = useState("");
  const [cost, setCost] = useState(10);
  const [hash, setHash] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // 검증용 상태 영역
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyHash, setVerifyHash] = useState("");
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);

  const [worker, setWorker] = useState<Worker | null>(null);

  // Web Worker 초기화 영역
  useEffect(() => {
    const workerCode = `
      importScripts('https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js');
      self.onmessage = (e) => {
        const { type, password, cost, hash } = e.data;
        if (type === 'hash') {
          const salt = dcodeIO.bcrypt.genSaltSync(cost);
          const result = dcodeIO.bcrypt.hashSync(password, salt);
          self.postMessage({ type: 'hash', result });
        } else if (type === 'verify') {
          const result = dcodeIO.bcrypt.compareSync(password, hash);
          self.postMessage({ type: 'verify', result });
        }
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const newWorker = new Worker(workerUrl);
    
    newWorker.onmessage = (e) => {
      const { type, result } = e.data;
      if (type === 'hash') setHash(result);
      if (type === 'verify') setVerifyResult(result);
      setIsProcessing(false);
    };

    setWorker(newWorker);
    return () => {
      newWorker.terminate();
      URL.revokeObjectURL(workerUrl);
    };
  }, []);

  // 실행 함수 정의 영역
  const generateHash = useCallback(() => {
    if (!password || !worker) return;
    setIsProcessing(true);
    worker.postMessage({ type: 'hash', password, cost });
  }, [password, cost, worker]);

  const verifyBcrypt = useCallback(() => {
    if (!verifyPassword || !verifyHash || !worker) return;
    setIsProcessing(true);
    worker.postMessage({ type: 'verify', password: verifyPassword, hash: verifyHash });
  }, [verifyPassword, verifyHash, worker]);

  return {
    t, currentLang, activeTab, setActiveTab,
    password, setPassword, cost, setCost, hash, generateHash,
    verifyPassword, setVerifyPassword, verifyHash, setVerifyHash, verifyResult, verifyBcrypt,
    isProcessing
  };
}