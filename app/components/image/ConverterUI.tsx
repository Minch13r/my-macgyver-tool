// app/components/image/ConverterUI.tsx
import { Upload, FileType, Check, Copy, Sparkles, Trash2, Info } from "lucide-react";
import { useState } from "react";
import type { ImageInfo } from "~/hooks/image/useImageConverter";

/**
 * 0. 유틸리티: 파일 용량 포맷터
 * 바이트 단위를 MB로 변환하는 함수 영역
 */
const formatSize = (bytes: number) => {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
};

/**
 * 1. 드롭존 컴포넌트 영역
 * 파일 업로드 및 10장 제한 안내 표시 부품
 */
interface DropzoneProps {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
  t: any;
  currentCount: number;
}

export const ImageDropzone = ({
  getRootProps,
  getInputProps,
  isDragActive,
  t,
  currentCount,
}: DropzoneProps) => {
  const isFull = currentCount >= 10;

  return (
    <div
      {...(!isFull ? getRootProps() : {})}
      className={`relative p-10 rounded-[2.5rem] border-2 border-dashed transition-all flex flex-col items-center justify-center min-h-75 
        ${isFull ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800/50 border-slate-300" : "cursor-pointer"}
        ${isDragActive && !isFull ? "border-blue-500 bg-blue-50/50" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"}
      `}
    >
      <input {...(!isFull ? getInputProps() : {})} />
      <div className={`p-5 rounded-3xl mb-4 ${isFull ? "bg-slate-200 text-slate-400" : "bg-blue-50 text-blue-600"}`}>
        <Upload size={40} />
      </div>
      <p className="text-xl font-black">{isFull ? "Upload Limit Reached" : t.img.drop}</p>
      <p className={`font-bold mt-2 ${isFull ? "text-red-500" : "text-blue-500"}`}>
        {currentCount} / 10 Images
      </p>
      {!isFull && <p className="text-slate-400 font-medium mt-1">{t.img.click}</p>}
    </div>
  );
};

/**
 * 2. 상세 정보 프리뷰 리스트 영역
 * 이름, 해상도, 용량 정보를 포함한 상세 리스트 출력 부품
 */
export const PreviewList = ({ previews }: { previews: ImageInfo[] }) => {
  if (previews.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-slate-400 px-2">
        <span className="text-xs font-black uppercase tracking-widest">Image Details</span>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-[11px] font-black text-slate-400 uppercase tracking-tighter">
              <th className="px-6 py-4">Preview</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Resolution</th>
              <th className="px-6 py-4">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {previews.map((p, i) => (
              <tr key={i} className="group hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors">
                <td className="px-6 py-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                    <img src={p.url} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-6 py-3">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate max-w-37.5">{p.name}</p>
                </td>
                <td className="px-6 py-3">
                  <span className="text-xs font-mono text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md">
                    {p.width} × {p.height}
                  </span>
                </td>
                <td className="px-6 py-3 text-xs font-bold text-slate-500">
                  {formatSize(p.size)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * 3. 파비콘 프리셋 버튼 영역
 * 클릭 시 32x32 설정을 자동 적용하는 부품
 */
export const FaviconButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="w-full py-4 px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
  >
    <Sparkles size={18} /> {label}
  </button>
);

/**
 * 4. Base64 결과창 영역
 * 추출된 코드를 확인하고 복사하는 부품 (감사 팝업 트리거 포함)
 */
export const Base64Output = ({ 
  result, 
  label, 
  onShowModal
}: { 
  result: string; 
  label: string; 
  onShowModal: () => void; 
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    
    // 📍 복사 성공 시 부모에게 팝업 요청 영역
    onShowModal(); 
    
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{label}</span>
        <button onClick={handleCopy} className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors">
          {isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      <textarea
        readOnly
        value={result ? result.substring(0, 100) + "..." : ""}
        className="w-full h-20 bg-transparent text-[10px] font-mono text-slate-500 resize-none outline-none"
      />
    </div>
  );
};