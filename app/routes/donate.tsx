// app/routes/donate.tsx
import { Link } from "react-router";
import { Coffee, Heart, CreditCard, ArrowLeft, Sparkles } from "lucide-react";
import { BenefitItem } from "~/components/donate/BenefitItem";
import { SupportCard } from "~/components/donate/SupportCard";
import { useDonateContent } from "~/hooks/donate/useDonateContent";

export default function DonatePage() {
  {
    /* 커스텀 훅에서 필요한 데이터 추출 영역 */
  }
  const { currentLang, activeContent, dictionary } = useDonateContent();

  const isTossActive = false;
  const showToss = currentLang === "ko" && !!dictionary.toss && isTossActive;

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 안내 섹션 영역 */}
      <div className="relative p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/20 dark:border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Link
              to={`/${currentLang}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> {activeContent.back}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              Support <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">
              {dictionary.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {activeContent.benefits.map((text, i) => (
                <BenefitItem key={i} text={text} />
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

      {/* 후원 카드 목록 영역 */}
      <div
        className={`grid grid-cols-1 ${showToss ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}
      >
        <SupportCard
          href="https://www.buymeacoffee.com/your-id"
          icon={<Coffee size={40} />}
          title={dictionary.donate}
          desc={activeContent.coffeeDesc}
          btnText={activeContent.supportNow}
          bgColor="bg-orange-50/50 dark:bg-orange-950/10 border-orange-100 dark:border-orange-900/30 text-orange-900 dark:text-orange-100"
          iconColor="bg-orange-500"
          hoverColor="hover:shadow-2xl hover:shadow-orange-500/20"
        />
        <SupportCard
          href="https://paypal.me/your-id"
          icon={<CreditCard size={40} />}
          title={dictionary.paypal || "PayPal"}
          desc={activeContent.paypalDesc}
          btnText={activeContent.supportNow}
          bgColor="bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/30 text-indigo-900 dark:text-indigo-100"
          iconColor="bg-indigo-600"
          hoverColor="hover:shadow-2xl hover:shadow-indigo-500/20"
        />
        {showToss && (
          <SupportCard
            href="https://toss.me/your-id"
            title={dictionary.toss || "Toss"}
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
      <p className="text-center text-slate-400 font-medium pb-10">
        {activeContent.thankYou}
      </p>
    </div>
  );
}
