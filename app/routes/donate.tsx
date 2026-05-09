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
  // 현재 언어 설정을 기반으로 사전 데이터 추출 영역
  const { lang } = useParams();
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang];

  // 📍 토스 기부 기능 활성 제어 스위치 영역
  const isTossActive = false;
  const showToss = currentLang === "ko" && t.toss && isTossActive;

  // 후원자 제공 가치 목록 정의 영역
  const benefits = [
    {
      id: 1,
      text:
        currentLang === "ko"
          ? "평생 무료 업데이트 보장"
          : "Lifetime free updates",
    },
    {
      id: 2,
      text:
        currentLang === "ko"
          ? "광고 없는 쾌적한 환경 유지"
          : "Ad-free clean environment",
    },
    {
      id: 3,
      text:
        currentLang === "ko"
          ? "우선적인 기능 요청 권한"
          : "Priority feature requests",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 상단 헤더 및 감사 인사 섹션 영역 */}
      <div className="relative p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-white/20 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* 디자인 장식용 그래디언트 영역 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Link
              to={`/${currentLang}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />{" "}
              {currentLang === "ko" ? "돌아가기" : "Back to Home"}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              Support <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">
              {t.desc}
            </p>
            {/* 혜택 체크리스트 영역 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit) => (
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

          {/* 우측 장식용 아이콘 영역 */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative p-8 bg-blue-600 rounded-[2rem] shadow-2xl rotate-3">
              <Sparkles className="text-white w-20 h-20" />
            </div>
          </div>
        </div>
      </div>

      {/* 📍 가변 그리드가 적용된 후원 수단 카드 영역 */}
      <div
        className={`grid grid-cols-1 ${showToss ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}
      >
        {/* 1. 커피 후원 카드 영역 */}
        <a
          href="https://www.buymeacoffee.com/당신의아이디"
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
              Buy us a coffee
            </p>
          </div>
          <div className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl group-hover:bg-orange-600 transition-colors">
            Support Now →
          </div>
        </a>

        {/* 2. 페이팔 후원 카드 영역 */}
        <a
          href="https://paypal.me/당신의아이디"
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
              Global secure payment
            </p>
          </div>
          <div className="max-w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl group-hover:bg-indigo-700 transition-colors w-full">
            Support Now →
          </div>
        </a>

        {/* 📍 3. 토스 후원 카드 (조건부 노출 및 가변 레이아웃) 영역 */}
        {showToss && (
          <a
            href="https://toss.me/당신의아이디"
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
                Simple Korean payment
              </p>
            </div>
            <div className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl group-hover:bg-blue-700 transition-colors">
              Support Now →
            </div>
          </a>
        )}
      </div>

      {/* 하단 격려 문구 영역 */}
      <p className="text-center text-slate-400 font-medium pb-10">
        Your support keeps this project alive. Thank you for your kindness!
      </p>
    </div>
  );
}
