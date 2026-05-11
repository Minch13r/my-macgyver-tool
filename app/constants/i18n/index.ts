// src/constants/i18n/index.ts
import { ko } from "./ko";
import { en } from "./en";
import { ja } from "./ja";
import { fr } from "./fr";
import { es } from "./es";
import type { LanguagePack } from "./type";

// 기본 언어 설정 영역
export const DEFAULT_LANG = "en";

// 전체 다국어 사전 통합 관리 영역
export const DICTIONARY: Record<string, LanguagePack> = { ko, en, ja, fr, es };

// 타입 정의 재배포 영역
export type { LanguagePack };