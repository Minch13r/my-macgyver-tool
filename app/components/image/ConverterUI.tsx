// app/components/image/ConverterUI.tsx
import {
  Upload,
  FileImage,
  FileType,
  Settings,
  Maximize,
  Check,
  Copy,
} from "lucide-react";
import { useState } from "react";

// 드롭존 컴포넌트 영역
export const ImageDropzone = ({
  getRootProps,
  getInputProps,
  isDragActive,
  t,
}: any) => (
  <div
    {...getRootProps()}
    className={`relative p-10 rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center min-h-75 ${isDragActive ? "border-blue-500 bg-blue-50/50" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"}`}
  >
    <input {...getInputProps()} />
    <Upload size={48} className="text-blue-500 mb-4" />
    <p className="text-xl font-black">{t.img.drop}</p>
    <p className="text-slate-400 font-medium">{t.img.click}</p>
  </div>
);

// 프리뷰 리스트 컴포넌트 영역
export const PreviewList = ({ previews }: { previews: any[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {previews.map((p, i) => (
      <div
        key={i}
        className="group relative aspect-square bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm"
      >
        <img src={p.url} alt="preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-[10px] text-white font-bold px-2 truncate w-full text-center">
            {p.name}
          </p>
        </div>
      </div>
    ))}
  </div>
);

// Base64 결과창 컴포넌트 영역
export const Base64Output = ({
  result,
  label,
}: {
  result: string;
  label: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isCopied ? (
            <Check size={14} className="text-green-500" />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>
      <textarea
        readOnly
        value={result.substring(0, 100) + "..."}
        className="w-full h-20 bg-transparent text-[10px] font-mono text-slate-500 resize-none outline-none"
      />
    </div>
  );
};
