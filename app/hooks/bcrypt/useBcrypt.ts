// app/hooks/useBcrypt.ts
import { useState, useCallback } from "react";
import { useParams } from "react-router";
import bcrypt from "bcryptjs"; // 📍 bcryptjs 라이브러리 사용 영역
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

export function useBcrypt() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 상태 관리 변수 정의 영역
  const [password, setPassword] = useState("");
  const [cost, setCost] = useState(10); // 📍 범위 지정(Cost Factor) 상태 영역
  const [hash, setHash] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // 해시 생성 함수 정의 영역
  const generateHash = useCallback(async () => {
    if (!password) return;
    setIsProcessing(true);
    
    try {
      // 솔트 생성 및 해싱 작업 영역
      const salt = bcrypt.genSaltSync(cost);
      const newHash = bcrypt.hashSync(password, salt);
      setHash(newHash);
    } catch (error) {
      console.error("Bcrypt Error:", error);
    } finally {
      setIsProcessing(false);
    }
  }, [password, cost]);

  return {
    t, currentLang, password, setPassword, cost, setCost, hash, generateHash, isProcessing
  };
}