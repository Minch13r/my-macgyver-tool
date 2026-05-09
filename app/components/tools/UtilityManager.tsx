// src/components/tools/UtilityManager.tsx
import React from "react";
import { useParams, Link } from "react-router";
import { Coffee, Heart, Calculator, ChevronRight } from "lucide-react";
import {
  DICTIONARY,
  DEFAULT_LANG,
  type LanguagePack,
} from "../../constants/dictionary";

export const UtilityManager: React.FC = () => {
  // 현재 URL 경로에서 언어 파라미터 추출
  const { lang } = useParams();

  // 사전 데이터 참조 및 예외 케이스 처리
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang] as LanguagePack;

  // 후원 섹션 활성화 여부에 따른 그리드 컬럼 계산
  const showToss = currentLang === "ko" && t.toss;

  return (
    <div className="relative group p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-500 rounded-[2.5rem] border border-white/20 dark:border-slate-800 shadow-2xl">
      {/* 장식용 추상 그래디언트 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* 텍스트 헤더 섹션 */}
      <div className="relative z-10 mb-12">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          {t.title.split(" ")[0]}{" "}
          <span className="text-blue-600">{t.title.split(" ")[1] || ""}</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* 후원 및 도구 액션 그리드 */}
      <div className="relative z-10 grid grid-cols-1 gap-6">
        {/* 후원 카드 컨테이너 (언어에 따라 1열 또는 2열 가변 그리드) 영역 */}
        <div
          className={`grid gap-6 ${showToss ? "md:grid-cols-2" : "grid-cols-1"}`}
        >
          {/* 커피 후원 섹션 영역 */}
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
                  ? "개발자의 지속적인 업데이트를 위해 커피 한 잔의 힘을 보태주세요."
                  : "Support our development with a simple cup of coffee."}
              </p>
            </div>
          </Link>

          {/* 토스 기부 섹션 (한국어 전용) 영역 */}
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
                  토스 아이디로 간편하고 빠르게 익명 송금이 가능합니다.
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* 하단 메인 도구 바로가기 섹션 영역 */}
        <Link
          to={`/${currentLang}/counter`}
          className="flex items-center justify-between p-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[1.5rem] hover:opacity-90 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/10 dark:bg-slate-900/5 rounded-xl">
              <Calculator size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight">
              {t.sideMenu.count}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest opacity-60">
              Go to Tool
            </span>
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
};
