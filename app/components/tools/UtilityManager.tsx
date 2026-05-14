// src/components/tools/UtilityManager.tsx
import React from "react";
import { useParams, Link } from "react-router";
import {
  Coffee,
  Heart,
  Calculator,
  ChevronRight,
  Image as ImageIcon,
  Hash,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import {
  DICTIONARY,
  DEFAULT_LANG,
  type LanguagePack,
} from "../../constants/i18n";

export const UtilityManager: React.FC = () => {
  // 현재 URL 경로 기반 언어 파라미터 추출 영역
  const { lang } = useParams();

  // 사전 데이터 참조 및 예외 케이스 처리 영역
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang] as LanguagePack;

  // 후원 기능 활성 제어 스위치 설정 영역
  const isCoffeeActive = false; 
  const isPaypalActive = false;
  const isTossActive = false;

  // 개별 후원 수단 노출 여부 계산 영역
  const showCoffee = isCoffeeActive;
  const showPaypal = isPaypalActive;
  const showToss = currentLang === "ko" && t.toss && isTossActive;

  // 활성화된 후원 카드 개수 합산 영역
  const activeDonationCount = [showCoffee, showPaypal, showToss].filter(Boolean).length;

  // 그리드 레이아웃 동적 결정 영역
  const getGridClass = () => {
    if (activeDonationCount === 3) return "lg:grid-cols-3 md:grid-cols-2";
    if (activeDonationCount === 2) return "md:grid-cols-2";
    return "grid-cols-1";
  };

  // 도구별 아이콘 및 경로 메타데이터 정의 영역
  const toolMetadata = [
    { key: "img", icon: <ImageIcon size={20} />, path: "image-conv" },
    { key: "count", icon: <Calculator size={20} />, path: "counter" },
    { key: "sha", icon: <Hash size={20} />, path: "sha" },
    { key: "bcrypt", icon: <ShieldCheck size={20} />, path: "bcrypt" },
  ] as const;

  return (
    <div className="relative group p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-500 rounded-[2.5rem] border border-white/20 dark:border-slate-800 shadow-2xl">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 mb-12">
        <div className="relative mb-14">
          <div className="inline-block px-3 py-1 mb-5 text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
            Universal Digital Toolkit
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
            {t.title.split("-")[0]}
            <span className="relative ml-2 inline-block">
              <span className="absolute -inset-2 bg-blue-500/15 blur-3xl rounded-full" />
              <span className="relative text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-blue-500 to-indigo-400">
                -{t.title.split("-")[1] || ""}
              </span>
            </span>
          </h1>

          <div className="flex gap-1.5 mt-6">
            <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
            <div className="w-3 h-1.5 bg-blue-600/30 rounded-full" />
            <div className="w-1.5 h-1.5 bg-blue-600/10 rounded-full" />
          </div>
        </div>

        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-line">
          {t.desc}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6">
        {/* 활성 카드 개수에 따른 동적 그리드 적용 영역 */}
        <div className={`grid gap-6 ${getGridClass()}`}>
          {/* 커피 후원 상세 카드 영역 */}
          {showCoffee && (
            <Link
              to={`/${currentLang}/donate`}
              className="group/card flex flex-col justify-between p-7 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-2xl group-hover/card:scale-110 transition-transform">
                  <Coffee size={28} strokeWidth={2.5} />
                </div>
                <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover/card:translate-x-1 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {t.donate}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                  {currentLang === "ko"
                    ? "개발자의 지속적인 업데이트를 위해 따뜻한 응원을 보태주세요."
                    : "Support our work with a simple cup of coffee."}
                </p>
              </div>
            </Link>
          )}

          {/* 글로벌 페이팔 후원 상세 카드 영역 */}
          {showPaypal && (
            <Link
              to={`/${currentLang}/donate`}
              className="group/card flex flex-col justify-between p-7 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-2xl group-hover/card:scale-110 transition-transform">
                  <CreditCard size={28} strokeWidth={2.5} />
                </div>
                <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover/card:translate-x-1 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {t.paypal}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                  {currentLang === "ko"
                    ? "페이팔을 통해 전 세계 어디서든 안전하게 후원이 가능합니다."
                    : "Safe and secure global donations via PayPal."}
                </p>
              </div>
            </Link>
          )}

          {/* 토스 기부 상세 카드 영역 */}
          {showToss && (
            <Link
              to={`/${currentLang}/donate`}
              className="group/card flex flex-col justify-between p-7 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl group-hover/card:scale-110 transition-transform">
                  <Heart size={28} strokeWidth={2.5} />
                </div>
                <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover/card:translate-x-1 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {t.toss}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                  토스 익명 송금으로 간편하게 마음을 전하세요.
                </p>
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {toolMetadata.map((tool) => (
            <Link
              key={tool.key}
              to={`/${currentLang}/${tool.path}`}
              className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] hover:bg-slate-100 dark:hover:bg-white dark:hover:text-slate-900 transition-all group/tool"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-xl group-hover/tool:bg-blue-600 group-hover/tool:text-white transition-colors">
                  {tool.icon}
                </div>
                <span className="text-lg font-bold tracking-tight">
                  {(t.sideMenu as any)[tool.key]}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest opacity-0 group-hover/tool:opacity-60 transition-opacity">
                  Open Tool
                </span>
                <ChevronRight
                  size={16}
                  className="group-hover/tool:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};