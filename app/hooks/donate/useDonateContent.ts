// app/hooks/useDonateContent.ts
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

{
  /* 언어별 후원 페이지 문구 데이터 정의 영역 */
}
const DONATE_CONTENT = {
  ko: {
    back: "돌아가기",
    benefits: [
      "평생 무료 업데이트 보장",
      "광고 없는 쾌적한 환경 유지",
      "우선적인 기능 요청 권한",
    ],
    kofiDesc: "Ko-fi로 커피 한 잔 후원하기",
    paypalDesc: "전 세계 안전 결제 (PayPal)",
    tossDesc: "토스 익명 송금",
    supportNow: "지금 후원하기 →",
    thankYou: "여러분의 후원이 프로젝트를 지속하게 합니다. 감사합니다!",
  },
  en: {
    back: "Back to Home",
    benefits: [
      "Lifetime free updates",
      "Ad-free clean environment",
      "Priority feature requests",
    ],
    kofiDesc: "Support us on Ko-fi",
    paypalDesc: "Global secure payment",
    tossDesc: "Simple Korean payment",
    supportNow: "Support Now →",
    thankYou: "Your support keeps this project alive. Thank you!",
  },
  ja: {
    back: "ホームに戻る",
    benefits: [
      "永久無料アップデート保証",
      "広告なしの快適な環境維持",
      "優先的な機能リクエスト",
    ],
    kofiDesc: "Ko-fiでコーヒーをご馳走する",
    paypalDesc: "世界中で安全な決済 (PayPal)",
    tossDesc: "Toss簡単決済",
    supportNow: "今すぐ支援する →",
    thankYou: "皆様の支援に感謝합니다. ありがとうございます！",
  },
  fr: {
    back: "Retour à l'accueil",
    benefits: [
      "Mises à jour gratuites",
      "Sans publicité",
      "Priorité aux demandes",
    ],
    kofiDesc: "Offrez-nous un café sur Ko-fi",
    paypalDesc: "Paiement sécurisé (PayPal)",
    tossDesc: "Paiement coréen simplifié",
    supportNow: "Soutenir →",
    thankYou: "Merci pour votre générosité !",
  },
  es: {
    back: "Volver al inicio",
    benefits: [
      "Actualizaciones de por vida",
      "Sin publicidad",
      "Prioridad para funciones",
    ],
    kofiDesc: "Invítanos a un café en Ko-fi",
    paypalDesc: "Pago seguro (PayPal)",
    tossDesc: "Pago coreano simplificado",
    supportNow: "Apoyar →",
    thankYou: "¡Gracias por tu amabilidad!",
  },
} as const;

{
  /* 현재 언어에 따른 데이터를 제공하는 커스텀 훅 영역 */
}
export function useDonateContent() {
  const { lang } = useParams();
  const currentLang = (
    lang && lang in DONATE_CONTENT ? lang : DEFAULT_LANG
  ) as keyof typeof DONATE_CONTENT;

  const activeContent = DONATE_CONTENT[currentLang];
  const dictionary = DICTIONARY[currentLang] || DICTIONARY[DEFAULT_LANG];

  return { currentLang, activeContent, dictionary };
}
