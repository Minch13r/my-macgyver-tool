// src/utils/Language.ts
import { DICTIONARY, DEFAULT_LANG } from '../constants/dictionary';

/**
 * 사용자의 브라우저 환경에서 언어를 감지하고 지원 여부를 확인
 */
export const getBrowserLanguage = (): string => {
  // 빌드 시점이나 서버 환경 등 브라우저가 없는 경우 기본 언어를 반환
  if (typeof window === 'undefined') {
    return DEFAULT_LANG;
  }

  // 브라우저의 navigator 객체에서 언어 정보 불러오기
  const nav = window.navigator;
  const fullLang = nav?.language || DEFAULT_LANG;
  
  // 언어 코드(예: ko-KR)에서 앞부분(ko)만 소문자로 추출
  const langCode = fullLang.split('-')[0]?.toLowerCase() || DEFAULT_LANG;

  // 현재 사전에 등록되어 있는 모든 지원 언어 목록 조회
  const supportedLanguages = Object.keys(DICTIONARY);

  // 감지된 언어가 지원 목록에 있으면 해당 언어를, 없으면 기본값(en)을 반환
  return supportedLanguages.includes(langCode) ? langCode : DEFAULT_LANG;
};