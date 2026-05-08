// src/compoents/tools/UtilityManager.tsx

import React, { useState, useEffect } from 'react';
import { getBrowserLanguage } from '../../utils/Language';
import { DICTIONARY, type LanguagePack } from '../../constants/dictionary';

export const UtilityManager: React.FC = () => {
  // 초기값은 기본 영어('en') 사전
  const [lang, setLang] = useState<string>('en');

  // 2. 브라우저가 로드되면 Language.ts의 감지 함수를 실행
  useEffect(() => {
    const detectedLang = getBrowserLanguage();
    setLang(detectedLang);
  }, []);

  // 객체 매핑 방식으로 알맞은 언어팩을 가져오고 타입을 확정하는 영역
  const t = (DICTIONARY[lang] ?? DICTIONARY['en']) as LanguagePack;

  return (
    <div className="p-6 bg-white dark:bg-slate-900 transition-colors">
      {/* 번역 데이터를 템플릿에 주입하여 사용 */}
      <h1 className="text-3xl font-black text-blue-600">{t.title}</h1>
      <p className="text-sm opacity-70">{t.desc}</p>
      
      {/* 사이드바 버튼 그룹 */}
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {t.sideMenu.img}
        </button>
        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {t.sideMenu.count}
        </button>
      </div>
    </div>
  );
};