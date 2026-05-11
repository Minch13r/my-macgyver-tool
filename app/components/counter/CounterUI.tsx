// app/components/counter/CounterUI.tsx
import {
  Hash,
  Type,
  Database,
  Copy,
  Trash2,
  Check,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/**
 * 1. 통계 카드 컴포넌트 영역
 * 프리미엄 위젯 스타일로 재설계된 통계 출력 부품
 */
export const StatCard = ({
  label,
  value,
  icon: Icon,
  gradient,
}: {
  label: string;
  value: number;
  icon: any;
  gradient: string;
}) => (
  <div className="group relative p-6 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
    {/* 배경 장식용 그라데이션 블롭 영역 */}
    <div
      className={`absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${gradient.split(" ")[1]}`}
    />

    <div className="relative flex items-center gap-6">
      {/* 아이콘 박스: 입체적인 그라데이션 적용 영역 */}
      <div
        className={`p-4 rounded-2xl shadow-lg shadow-current/10 bg-linear-to-br ${gradient} text-white`}
      >
        <Icon size={28} strokeWidth={2.5} />
      </div>

      <div className="flex flex-col">
        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">
          {label}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
            {value.toLocaleString()}
          </span>
          {/* 활성화 상태를 보여주는 작은 점 영역 */}
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  </div>
);

/**
 * 2. 텍스트 에디터 컴포넌트 영역
 * 포커스 시 부드러운 글로우가 발생하는 입력창 영역
 */
export const TextEditor = ({ value, onChange, placeholder }: any) => (
  <div className="relative group">
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-112.5 p-10 bg-white dark:bg-slate-950 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none text-xl font-medium transition-all shadow-2xl shadow-slate-200/50 dark:shadow-none resize-none leading-relaxed tracking-tight"
    />
    {/* 포커스 시 나타나는 부드러운 네온 테두리 효과 영역 */}
    <div className="absolute inset-0 rounded-[3rem] pointer-events-none border-4 border-blue-500/0 group-focus-within:border-blue-500/5 transition-all scale-[1.02]" />

    {/* 하단 장식용 아이콘 영역 */}
    <div className="absolute bottom-8 right-8 text-slate-200 dark:text-slate-800 group-focus-within:text-blue-500/20 transition-colors">
      <Sparkles size={40} />
    </div>
  </div>
);

/**
 * 3. 제어 버튼 컴포넌트 영역
 * 다운로드 및 삭제 액션을 담당하는 버튼 배치 영역
 */
export const CounterActions = ({ text, onClear, onShowModal, t }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    onShowModal();
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={handleCopy}
        disabled={!text}
        className="flex-1 py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-[1.5rem] font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 dark:shadow-blue-500/20 disabled:opacity-30 disabled:grayscale"
      >
        {isCopied ? <Check size={20} /> : <Copy size={20} />}
        <span className="tracking-tight">{t.copy}</span>
      </button>

      <button
        onClick={onClear}
        disabled={!text}
        className="px-10 py-5 bg-white dark:bg-slate-900 text-red-500 border-2 border-red-50 dark:border-red-950/20 rounded-[1.5rem] font-black flex items-center justify-center gap-3 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all active:scale-[0.98] disabled:opacity-30"
      >
        <Trash2 size={20} />
        <span className="tracking-tight">{t.img.clear}</span>
      </button>
    </div>
  );
};
