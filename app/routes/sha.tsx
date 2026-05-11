// app/routes/sha.tsx
import { useState } from "react";
import { ShieldCheck, MessageSquareText } from "lucide-react";
import { useShaEncrypt } from "~/hooks/sha/useShaEncrypt";
import { AlgoSelector, HashOutput } from "~/components/sha/ShaUI";
import { DonateModal } from "~/components/image/DonateModal";
import type { MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export const meta: MetaFunction = ({ params }) => {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];
  return [
    { title: `${t.sideMenu.sha} | ${t.title}` },
    { name: "description", content: t.desc }
  ];
};

export default function ShaPage() {
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
  const { t, currentLang, input, setInput, algorithm, setAlgorithm, hash } = useShaEncrypt();

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      {/* 헤더 섹션 영역 */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
          <ShieldCheck className="text-blue-600 w-10 h-10" /> {t.sideMenu.sha}
        </h1>
        <p className="text-slate-500 font-medium tracking-tight">강력한 일방향 암호화 알고리즘으로 데이터를 해싱하십시오.</p>
      </div>

      {/* 알고리즘 선택 섹션 영역 */}
      <div className="space-y-4">
        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Select Algorithm</label>
        <AlgoSelector selected={algorithm} onSelect={setAlgorithm} />
      </div>

      {/* 입력 섹션 영역 */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-400 ml-2">
          <MessageSquareText size={14} />
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Plain Text</span>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="암호화할 내용을 입력하십시오..."
          className="w-full h-40 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none text-lg font-medium transition-all shadow-xl resize-none"
        />
      </div>

      {/* 결과 출력 섹션 영역 */}
      <HashOutput hash={hash} onShowModal={() => setIsThanksModalOpen(true)} t={t} />

      {/* 감사 팝업 영역 */}
      <DonateModal 
        isOpen={isThanksModalOpen} 
        onClose={() => setIsThanksModalOpen(false)} 
        t={t}
        currentLang={currentLang}
      />
    </div>
  );
}