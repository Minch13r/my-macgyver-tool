// app/components/sha/ShaUI.tsx
import { ShieldCheck, Copy, Check, Fingerprint } from "lucide-react";
import { useState } from "react";

/**
 * 1. 알고리즘 선택 버튼 그룹 영역
 * SHA-256과 SHA-512를 전환하는 프리미엄 버튼 부품
 */
export const AlgoSelector = ({ selected, onSelect }: any) => (
  <div className="flex gap-4 p-2 bg-slate-100 dark:bg-slate-800/50 rounded-3xl w-fit">
    {["SHA-256", "SHA-512"].map((algo) => (
      <button
        key={algo}
        onClick={() => onSelect(algo)}
        className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${
          selected === algo 
            ? "bg-white dark:bg-slate-900 text-blue-600 shadow-lg" 
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        {algo}
      </button>
    ))}
  </div>
);

/**
 * 2. 암호화 결과창 영역
 * 생성된 해시값을 보여주고 복사 기능을 제공하는 부품
 */
export const HashOutput = ({ hash, onShowModal, t }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash);
    setIsCopied(true);
    onShowModal();
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl transition-all">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-blue-600">
          <Fingerprint size={20} />
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Hash Result</span>
        </div>
        <button 
          onClick={handleCopy}
          className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
        >
          {isCopied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 break-all font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-400 min-h-20">
        {hash || "Waiting for input..."}
      </div>
    </div>
  );
};