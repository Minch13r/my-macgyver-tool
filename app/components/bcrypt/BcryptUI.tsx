// app/components/bcrypt/BcryptUI.tsx
import { useState } from "react";
import { ShieldCheck, Copy, Check, Fingerprint, Zap } from "lucide-react";

/**
 * 1. 비용 설정 슬라이더 영역
 * 연산 강도(범위)를 조절하는 부품
 */
export const CostSlider = ({ value, onChange }: any) => (
  <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-indigo-600">
        <Zap size={20} />
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">Cost Factor</span>
      </div>
      <span className="px-4 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full font-black text-sm">
        {value} Rounds
      </span>
    </div>
    
    {/* 📍 범위 지정 슬라이더 영역 */}
    <input 
      type="range" min="4" max="15" step="1" value={value} 
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
    />
    <p className="text-[10px] text-slate-400 font-medium">
      * 숫자가 높을수록 보안이 강력해지지만 생성 속도가 느려집니다. (권장: 10-12)
    </p>
  </div>
);

/**
 * 2. 해시 결과 출력 영역
 * 생성된 Bcrypt 해시를 확인하고 복사하는 부품
 */
export const BcryptResult = ({ hash, onShowModal, t }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash);
    setIsCopied(true);
    onShowModal();
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl space-y-4">
      <div className="flex justify-between items-center text-slate-400">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Bcrypt Hash Result</span>
        <button onClick={handleCopy} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          {isCopied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="font-mono text-sm text-blue-400 break-all leading-relaxed bg-black/30 p-6 rounded-2xl border border-white/5">
        {hash || "Generate a hash to see it here..."}
      </div>
    </div>
  );
};