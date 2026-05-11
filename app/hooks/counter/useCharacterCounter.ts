// app/hooks/count/useCharacterCounter.ts
import { useState, useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

export function useCharacterCounter() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 텍스트 상태 관리 영역
  const [text, setText] = useState("");

  // 글자수 및 바이트 실시간 계산 영역
  const stats = useMemo(() => {
    // UTF-8 기준 바이트 계산 로직 영역
    const byteCount = new TextEncoder().encode(text).length;
    
    return {
      chars: text.length,
      charsNoSpace: text.replace(/\s/g, "").length,
      bytes: byteCount,
    };
  }, [text]);

  // 텍스트 초기화 함수 영역
  const clearText = useCallback(() => {
    setText("");
  }, []);

  return {
    t,
    currentLang,
    text,
    setText,
    stats,
    clearText,
  };
}