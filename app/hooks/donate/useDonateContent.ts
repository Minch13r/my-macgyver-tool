// app/hooks/donate/useDonateContent.ts
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

{/* 후원 페이지 전용 다국어 데이터 정의 영역 */}
const DONATE_CONTENT = {
  ko: {
    back: "돌아가기",
    benefits: ["평생 무료 업데이트 보장", "광고 없는 쾌적한 환경 유지", "우선적인 기능 요청 권한"],
    coffeeDesc: "커피 한 잔 후원하기",
    paypalDesc: "전 세계 안전 결제 (PayPal)",
    tossDesc: "토스 간편 결제",
    supportNow: "지금 후원하기 →",
    thankYou: "여러분의 후원이 프로젝트를 지속하게 합니다. 감사합니다!",
  },
  en: {
    back: "Back to Home",
    benefits: ["Lifetime free updates", "Ad-free clean environment", "Priority feature requests"],
    coffeeDesc: "Buy us a coffee",
    paypalDesc: "Global secure payment",
    tossDesc: "Simple Korean payment",
    supportNow: "Support Now →",
    thankYou: "Your support keeps this project alive. Thank you for your kindness!",
  },
  ja: {
    back: "ホームに戻る",
    benefits: ["永久無料アップデート保証", "広告なしの快適な環境維持", "優先的な機能リクエスト権限"],
    coffeeDesc: "コーヒーをご馳走する",
    paypalDesc: "世界中で安全한 決済 (PayPal)",
    tossDesc: "Toss簡単決済",
    supportNow: "今すぐ支援する →",
    thankYou: "皆様の支援がプロジェクトの継続につながります。ありがとうございます！",
  },
  fr: {
    back: "Retour à l'accueil",
    benefits: ["Mises à jour gratuites à vie", "Sans publicité", "Priorité aux demandes"],
    coffeeDesc: "Offrez-nous un café",
    paypalDesc: "Paiement sécurisé (PayPal)",
    tossDesc: "Paiement coréen simplifié",
    supportNow: "Soutenir →",
    thankYou: "Votre soutien fait vivre ce projet. Merci !",
  },
  es: {
    back: "Volver al inicio",
    benefits: ["Actualizaciones de por vida", "Sin publicidad", "Prioridad para funciones"],
    coffeeDesc: "Invítanos a un café",
    paypalDesc: "Pago seguro (PayPal)",
    tossDesc: "Pago coreano simplificado",
    supportNow: "Apoyar →",
    thankYou: "Tu apoyo mantiene vivo este proyecto. ¡Gracias!",
  },
} as const;

{/* 현재 언어에 맞는 데이터를 추출하는 커스텀 훅 영역 */}
export function useDonateContent() {
  const { lang } = useParams();
  
  {/* 안전한 언어 코드 결정 영역 */}
  const currentLang = (lang && lang in DONATE_CONTENT ? lang : DEFAULT_LANG) as keyof typeof DONATE_CONTENT;
  
  {/* 데이터 및 사전 결합 영역 */}
  const activeContent = DONATE_CONTENT[currentLang];
  const dictionary = DICTIONARY[currentLang] || DICTIONARY[DEFAULT_LANG];
  
  return {
    currentLang,
    activeContent,
    dictionary,
  };
}