// app/components/bcrypt/BcryptUI.tsx
import { useState } from "react";
import {
  Copy,
  Check,
  Zap,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  Search,
} from "lucide-react";

/**
 * 1. 탭 전환 컴포넌트 영역
 * 생성 및 검증 모드 전환 부품
 */
export const BcryptTabs = ({ activeTab, onTabChange, t }: any) => (
  <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-[1.5rem] w-full max-w-md mx-auto mb-8">
    <button
      onClick={() => onTabChange("hash")}
      className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${
        activeTab === "hash"
          ? "bg-white dark:bg-slate-900 text-indigo-600 shadow-md"
          : "text-slate-400"
      }`}
    >
      {t.bcrypt.gen}
    </button>
    <button
      onClick={() => onTabChange("verify")}
      className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${
        activeTab === "verify"
          ? "bg-white dark:bg-slate-900 text-indigo-600 shadow-md"
          : "text-slate-400"
      }`}
    >
      {t.bcrypt.verify}
    </button>
  </div>
);

/**
 * 2. 검증 UI 컴포넌트 영역
 * 비밀번호와 해시 일치 여부 확인 부품
 */
export const BcryptVerifyForm = ({
  password,
  setPassword,
  hash,
  setHash,
  result,
  onVerify,
  isProcessing,
  t,
}: any) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-slate-400 ml-2">
        <KeyRound size={14} />
        <span className="text-[11px] font-black uppercase tracking-widest">
          {t.bcrypt.pass}
        </span>
      </div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t.bcrypt.passPlaceholder || "Enter password to verify..."}
        className="w-full p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none text-lg font-bold shadow-xl"
      />
    </div>

    <div className="space-y-4">
      <div className="flex items-center gap-2 text-slate-400 ml-2">
        <Search size={14} />
        <span className="text-[11px] font-black uppercase tracking-widest">
          {t.bcrypt.hash}
        </span>
      </div>
      <textarea
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        placeholder={t.bcrypt.hashPlaceholder || "Paste hash here ($2a$...)"}
        className="w-full h-32 p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none text-sm font-mono shadow-xl resize-none"
      />
    </div>

    <button
      onClick={onVerify}
      disabled={!password || !hash || isProcessing}
      className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
    >
      {isProcessing ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <ShieldCheck size={20} />
      )}
      {t.bcrypt.verify}
    </button>

    {result !== null && (
      <div
        className={`p-6 rounded-[2rem] border-2 flex items-center justify-center gap-4 animate-bounce ${
          result
            ? "bg-emerald-50 border-emerald-100 text-emerald-600"
            : "bg-red-50 border-red-100 text-red-600"
        }`}
      >
        {result ? <ShieldCheck size={24} /> : <ShieldAlert size={24} />}
        <span className="text-lg font-black uppercase tracking-tighter">
          {result ? t.bcrypt.match : t.bcrypt.mismatch}
        </span>
      </div>
    )}
  </div>
);

/**
 * 3. 비용 설정 슬라이더 영역
 * 연산 강도를 조절하는 슬라이더 부품 (다국어 팁 적용)
 */
export const CostSlider = ({ value, onChange, t }: any) => (
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

    <input
      type="range"
      min="4"
      max="15"
      step="1"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
    />
    {/* 📍 다국어 사전의 costTip 적용 영역 */}
    <p className="text-[10px] text-slate-400 font-medium">
      {t.bcrypt.costTip}
    </p>
  </div>
);

/**
 * 4. 결과 출력 영역
 * 생성된 해시 코드를 보여주고 복사하는 부품
 */
export const BcryptResult = ({
  hash,
  onShowModal,
  t,
}: {
  hash: string;
  onShowModal: () => void;
  t: any;
}) => {
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
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
          {t.bcrypt.hashResultLabel || "Bcrypt Hash Result"}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isCopied ? (
            <Check size={16} className="text-emerald-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
      <div className="font-mono text-sm text-blue-400 break-all leading-relaxed bg-black/30 p-6 rounded-2xl border border-white/5">
        {hash || t.bcrypt.hashWaiting || "Generate a hash to see it here..."}
      </div>
    </div>
  );
};