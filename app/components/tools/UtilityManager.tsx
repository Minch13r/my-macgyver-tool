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
} from "lucide-react";
import {
  DICTIONARY,
  DEFAULT_LANG,
  type LanguagePack,
} from "../../constants/dictionary";

export const UtilityManager: React.FC = () => {
  // 현재 URL 경로 기반 언어 파라미터 추출
  const { lang } = useParams();

  // 사전 데이터 참조 및 예외 케이스 처리
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang] as LanguagePack;

  // 토스 기부 기능 활성화 스위치 (주석 해제 시 true로 변경)
  const isTossActive = false;
  const showToss = currentLang === "ko" && t.toss && isTossActive;

  // 도구별 아이콘 및 경로 메타데이터 정의
  const toolMetadata = [
    { key: "img", icon: <ImageIcon size={20} />, path: "image-conv" },
    { key: "count", icon: <Calculator size={20} />, path: "counter" },
    { key: "sha", icon: <Hash size={20} />, path: "sha" },
    { key: "bcrypt", icon: <ShieldCheck size={20} />, path: "bcrypt" },
  ] as const;

  return (
    <div className="relative group p-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-500 rounded-[2.5rem] border border-white/20 dark:border-slate-800 shadow-2xl">
      {/* 배경 장식용 그래디언트 요소 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* 헤더 타이틀 및 서비스 설명 섹션 */}
      <div className="relative z-10 mb-12">
        <div className="relative mb-14">
          {/* 디자인 강조용 상단 배지 영역 */}
          <div className="inline-block px-3 py-1 mb-5 text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
            Universal Digital Toolkit
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
            {t.title.split("-")[0]}
            <span className="relative ml-2 inline-block">
              {/* 텍스트 하단 광채 효과 영역 */}
              <span className="absolute -inset-2 bg-blue-500/15 blur-3xl rounded-full" />
              <span className="relative text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-blue-500 to-indigo-400">
                -{t.title.split("-")[1] || ""}
              </span>
            </span>
          </h1>

          {/* 제목 하단 디자인 포인트 바 영역 */}
          <div className="flex gap-1.5 mt-6">
            <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
            <div className="w-3 h-1.5 bg-blue-600/30 rounded-full" />
            <div className="w-1.5 h-1.5 bg-blue-600/10 rounded-full" />
          </div>
        </div>
        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* 대시보드 인터랙션 그리드 영역 */}
      <div className="relative z-10 grid grid-cols-1 gap-6">
        {/* 후원 카드 컨테이너 (언어 및 활성화 상태별 가변 그리드) */}
        <div
          className={`grid gap-6 ${showToss ? "md:grid-cols-2" : "grid-cols-1"}`}
        >
          {/* 커피 후원 링크 카드 영역 */}
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

          {/* 토스 기부 링크 카드 (필요 시 주석 해제하여 사용) */}
          {/* {showToss && (
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
          */}
        </div>

        {/* sideMenu 기반 동적 도구 바로가기 목록 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
