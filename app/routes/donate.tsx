import { useParams, Link } from "react-router";
import { Coffee, Heart, CreditCard, ArrowLeft, Sparkles } from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";
import { BenefitItem } from "~/components/donate/BenefitItem";
import { SupportCard } from "~/components/donate/SupportCard";

export default function DonatePage() {
  const { lang } = useParams();

  const content = {
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
      coffeeDesc: "コーヒーをご馳走하는",
      paypalDesc: "世界中で安全な決済 (PayPal)",
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
  };

  {/* 📍 currentLang과 t가 절대 undefined가 되지 않도록 보장 영역 */}
  const currentLang = (lang && lang in content ? lang : DEFAULT_LANG) as keyof typeof content;
  const activeContent = content[currentLang];
  const t = DICTIONARY[currentLang] || DICTIONARY[DEFAULT_LANG];
  
  const isTossActive = false;
  const showToss = currentLang === "ko" && !!t.toss && isTossActive;

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 안내 섹션 영역 */}
      <div className="relative p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/20 dark:border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Link to={`/${currentLang}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> {activeContent.back}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">Support <span className="text-blue-600">Us</span></h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">{t.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {activeContent.benefits.map((text, i) => <BenefitItem key={i} text={text} />)}
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

      {/* 카드 리스트 영역 */}
      <div className={`grid grid-cols-1 ${showToss ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
        <SupportCard
          href="https://www.buymeacoffee.com/your-id"
          icon={<Coffee size={40} />}
          title={t.donate}
          desc={activeContent.coffeeDesc}
          btnText={activeContent.supportNow}
          bgColor="bg-orange-50/50 dark:bg-orange-950/10 border-orange-100 dark:border-orange-900/30 text-orange-900 dark:text-orange-100"
          iconColor="bg-orange-500"
          hoverColor="hover:shadow-2xl hover:shadow-orange-500/20"
        />
        <SupportCard
          href="https://paypal.me/your-id"
          icon={<CreditCard size={40} />}
          title={t.paypal || "PayPal"}
          desc={activeContent.paypalDesc}
          btnText={activeContent.supportNow}
          bgColor="bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/30 text-indigo-900 dark:text-indigo-100"
          iconColor="bg-indigo-600"
          hoverColor="hover:shadow-2xl hover:shadow-indigo-500/20"
        />
        {showToss && (
          <SupportCard
            href="https://toss.me/your-id"
            title={t.toss || "Toss"} 
            icon={<Heart size={40} />}
            desc={activeContent.tossDesc}
            btnText={activeContent.supportNow}
            bgColor="bg-blue-50/50 dark:bg-blue-950/10 border-blue-100 dark:border-blue-900/30 text-blue-900 dark:text-blue-100"
            iconColor="bg-blue-600"
            hoverColor="hover:shadow-2xl hover:shadow-blue-500/20"
            isToss
          />
        )}
      </div>
      <p className="text-center text-slate-400 font-medium pb-10">{activeContent.thankYou}</p>
    </div>
  );
}