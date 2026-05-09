// app/routes/donate.tsx
import { useParams, Link } from "react-router";
import {
  Coffee,
  Heart,
  CreditCard,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export default function DonatePage() {
  // URL 파라미터 기반 현재 언어 설정 추출 영역
  const { lang } = useParams();

  // 지원하는 언어 문구 데이터 정의 영역 (switch-case 미사용)
  const content = {
    ko: {
      back: "돌아가기",
      benefits: [
        "평생 무료 업데이트 보장",
        "광고 없는 쾌적한 환경 유지",
        "우선적인 기능 요청 권한",
      ],
      coffeeDesc: "커피 한 잔 후원하기",
      paypalDesc: "전 세계 안전 결제 (PayPal)",
      tossDesc: "토스 간편 결제",
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
      coffeeDesc: "Buy us a coffee",
      paypalDesc: "Global secure payment",
      tossDesc: "Simple Korean payment",
      supportNow: "Support Now →",
      thankYou:
        "Your support keeps this project alive. Thank you for your kindness!",
    },
    ja: {
      back: "ホームに戻る",
      benefits: [
        "永久無料アップデート保証",
        "広告なしの快適な環境維持",
        "優先的な機能リクエスト権限",
      ],
      coffeeDesc: "コーヒー를 지원하기",
      paypalDesc: "世界中で安全な決済 (PayPal)",
      tossDesc: "Toss簡単決済",
      supportNow: "今すぐ支援하는 →",
      thankYou:
        "皆様の支援がプロジェクトの継続につながります。ありがとうございます！",
    },
    // 📍 프랑스어(French) 번역 추가 영역
    fr: {
      back: "Retour à l'accueil",
      benefits: [
        "Mises à jour gratuites à vie",
        "Environnement sans publicité",
        "Priorité aux demandes de fonctionnalités",
      ],
      coffeeDesc: "Offrez-nous un café",
      paypalDesc: "Paiement sécurisé mondial (PayPal)",
      tossDesc: "Paiement coréen simplifié",
      supportNow: "Soutenir maintenant →",
      thankYou:
        "Votre soutien fait vivre ce projet. Merci pour votre générosité !",
    },
    // 📍 스페인어(Spanish) 번역 추가 영역
    es: {
      back: "Volver al inicio",
      benefits: [
        "Actualizaciones gratuitas de por vida",
        "Entorno sin publicidad",
        "Prioridad para nuevas funciones",
      ],
      coffeeDesc: "Invítanos a un café",
      paypalDesc: "Pago seguro global (PayPal)",
      tossDesc: "Pago coreano simplificado",
      supportNow: "Apoyar ahora →",
      thankYou:
        "Tu apoyo mantiene vivo este proyecto. ¡Gracias por tu amabilidad!",
    },
  };

  // 현재 언어 유효성 검사 및 데이터 할당 영역
  const currentLang = (
    lang && content[lang as keyof typeof content] ? lang : DEFAULT_LANG
  ) as keyof typeof content;
  const activeContent = content[currentLang];
  const t = DICTIONARY[currentLang];

  // 토스 후원 노출 조건 제어 영역
  const isTossActive = false;
  const showToss = currentLang === "ko" && t.toss && isTossActive;

  // 혜택 데이터 리스트 맵핑 영역
  const benefitList = activeContent.benefits.map((text, index) => ({
    id: index + 1,
    text,
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 상단 안내 섹션 컨테이너 영역 */}
      <div className="relative p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/20 dark:border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Link
              to={`/${currentLang}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />
              {activeContent.back}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              Support <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">
              {t.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {benefitList.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 size={18} className="text-blue-500" />
                  {benefit.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative p-8 bg-blue-600 rounded-[2rem] shadow-2xl rotate-3">
              <Sparkles className="text-white w-20 h-20" />
            </div>
          </div>
        </div>
      </div>

      {/* 후원 방식별 가변 그리드 영역 */}
      <div
        className={`grid grid-cols-1 ${showToss ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}
      >
        {/* 커피 후원 카드 영역 */}
        <a
          href="https://www.buymeacoffee.com/your-id"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 bg-orange-50/50 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/30 rounded-[2.5rem] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 flex flex-col items-center text-center space-y-6"
        >
          <div className="p-5 bg-orange-500 text-white rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
            <Coffee size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">
              {t.donate}
            </h3>
            <p className="text-sm text-orange-700/60 dark:text-orange-400/60 font-medium">
              {activeContent.coffeeDesc}
            </p>
          </div>
          <div className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl group-hover:bg-orange-600 transition-colors">
            {activeContent.supportNow}
          </div>
        </a>

        {/* 페이팔 후원 카드 영역 */}
        <a
          href="https://paypal.me/your-id"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-100 dark:border-indigo-900/30 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col items-center text-center space-y-6"
        >
          <div className="p-5 bg-indigo-600 text-white rounded-3xl shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
            <CreditCard size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
              {t.paypal}
            </h3>
            <p className="text-sm text-indigo-700/60 dark:text-indigo-400/60 font-medium">
              {activeContent.paypalDesc}
            </p>
          </div>
          <div className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl group-hover:bg-indigo-700 transition-colors">
            {activeContent.supportNow}
          </div>
        </a>

        {/* 토스 후원 카드 (한국어 한정) 영역 */}
        {showToss && (
          <a
            href="https://toss.me/your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/30 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95"
          >
            <div className="p-5 bg-blue-600 text-white rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-500">
              <Heart size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {t.toss}
              </h3>
              <p className="text-sm text-blue-700/60 dark:text-blue-400/60 font-medium">
                {activeContent.tossDesc}
              </p>
            </div>
            <div className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl group-hover:bg-blue-700 transition-colors">
              {activeContent.supportNow}
            </div>
          </a>
        )}
      </div>

      {/* 하단 감사 인사 섹션 영역 */}
      <p className="text-center text-slate-400 font-medium pb-10">
        {activeContent.thankYou}
      </p>
    </div>
  );
}
