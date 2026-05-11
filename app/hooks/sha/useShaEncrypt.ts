// app/hooks/sha/useShaEncrypt.ts
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export function useShaEncrypt() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 텍스트 및 알고리즘 상태 관리 영역
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState<"SHA-256" | "SHA-512">("SHA-256");
  const [hash, setHash] = useState("");

  // 해시 생성 로직 영역
  const encrypt = useCallback(async (text: string, algo: string) => {
    if (!text) {
      setHash("");
      return;
    }

    // 문자열을 바이트 배열로 변환 영역
    const msgUint8 = new TextEncoder().encode(text);
    // 암호화 연산 수행 영역
    const hashBuffer = await crypto.subtle.digest(algo, msgUint8);
    // 버퍼를 16진수 문자열로 변환 영역
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    setHash(hashHex);
  }, []);

  // 입력값이나 알고리즘 변경 시 자동 실행 영역
  useEffect(() => {
    encrypt(input, algorithm);
  }, [input, algorithm, encrypt]);

  return {
    t, currentLang, input, setInput, algorithm, setAlgorithm, hash
  };
}