// src/components/tools/UtilityManager.tsx
import React from "react";
import { useParams, Link } from "react-router";
import { Coffee, Heart, Calculator } from "lucide-react"; // 아이콘 라이브러리 활용
import {
  DICTIONARY,
  DEFAULT_LANG,
  type LanguagePack,
} from "../../constants/dictionary";

export const UtilityManager: React.FC = () => {
  // 주소창 기반 현재 언어 파라미터 추출
  const { lang } = useParams();

  // 사전 존재 여부 확인 및 기본 언어 할당
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;

  // 현재 언어 설정에 부합하는 사전 데이터 참조
  const t = DICTIONARY[currentLang] as LanguagePack;

  return (
    <div className="p-8 bg-white dark:bg-slate-900 transition-colors rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
      {/* 서비스 제목 및 상세 설명 출력 */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-blue-600 mb-3">{t.title}</h1>
        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* 후원 및 도구 바로가기 카드 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 커피 후원 카드 영역 */}
        <Link
          to={`/${currentLang}/donate`}
          className="group flex flex-col p-5 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500 rounded-lg text-white">
              <Coffee size={24} />
            </div>
            <span className="font-bold text-orange-700 dark:text-orange-400">
              {t.donate}
            </span>
          </div>
          <p className="text-sm text-orange-600/70 dark:text-orange-400/60">
            Buy me a coffee to keep this tool alive.
          </p>
        </Link>

        {/* 한국어 사용자 전용 토스 기부 카드 영역 */}
        {currentLang === "ko" && t.toss && (
          <Link
            to={`/${currentLang}/donate`}
            className="group flex flex-col p-5 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500 rounded-lg text-white">
                <Heart size={24} />
              </div>
              <span className="font-bold text-blue-700 dark:text-blue-400">
                {t.toss}
              </span>
            </div>
            <p className="text-sm text-blue-600/70 dark:text-blue-400/60">
              토스로 간편하고 빠르게 마음을 전해보세요.
            </p>
          </Link>
        )}

        {/* 글자수 세기 도구 바로가기 영역 */}
        <Link
          to={`/${currentLang}/counter`}
          className="md:col-span-2 flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <div className="flex items-center gap-4">
            <Calculator className="text-slate-400" size={20} />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {t.sideMenu.count}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium">GO TOOL →</span>
        </Link>
      </div>
    </div>
  );
};
