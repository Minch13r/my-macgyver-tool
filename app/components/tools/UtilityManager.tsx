// src/components/tools/UtilityManager.tsx

import React from 'react';
import { useParams } from 'react-router';
import { DICTIONARY, DEFAULT_LANG, type LanguagePack } from '../../constants/dictionary';

export const UtilityManager: React.FC = () => {
  // 주소창에서 :lang 파라미터를 실시간으로 읽어오는 영역
  const { lang } = useParams();

  // 주소창의 언어가 사전에 없으면 기본값(en)을 사용하는 영역
  const currentLang = (lang && DICTIONARY[lang]) ? lang : DEFAULT_LANG;
  
  // 결정된 언어에 맞는 사전 데이터를 가져오는 영역
  const t = DICTIONARY[currentLang] as LanguagePack;

  return (
    <div className="p-6 bg-white dark:bg-slate-900 transition-colors rounded-2xl shadow-sm">
      <h1 className="text-3xl font-black text-blue-600">{t.title}</h1>
      <p className="text-sm opacity-70">{t.desc}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
          {t.donate}
        </button>

        {/* 현재 언어(currentLang)가 ko일 때만 토스 버튼을 보여주는 영역 */}
        {currentLang === 'ko' && t.toss && (
          <button className="px-4 py-2 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg font-bold border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-all">
            {t.toss}
          </button>
        )}

        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {t.sideMenu.count}
        </button>
      </div>
    </div>
  );
};