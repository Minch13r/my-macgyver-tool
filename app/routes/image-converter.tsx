// app/routes/image-converter.tsx
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { 
  ImageIcon, Trash2, FileType, Settings, 
  Maximize, Download, RefreshCcw, Archive 
} from "lucide-react";
import { useImageConverter } from "~/hooks/image/useImageConverter";
import { 
  ImageDropzone, PreviewList, Base64Output, FaviconButton 
} from "~/components/image/ConverterUI";
import { DonateModal } from "~/components/image/DonateModal";
import type { MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

// 메타 데이터 정의 영역
export const meta: MetaFunction = ({ params }) => {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];

  return [
    { title: `${t.sideMenu.img} | ${t.title}` },
    { name: "description", content: t.img.desc },
    { property: "og:title", content: t.sideMenu.img },
    { property: "og:description", content: t.img.desc },
  ];
};

export default function ImageConverter() {
  // 팝업 상태 관리 변수 정의 영역
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);

  // 커스텀 훅을 통한 로직 및 상태 주입 영역
  const {
    t, currentLang, files, previews, targetFormat, setTargetFormat,
    quality, setQuality, width, setWidth, height, setHeight,
    keepRatio, setKeepRatio, isConverting, base64Result,
    onDrop, clearAll, processImages, setFaviconPreset
  } = useImageConverter();

  // 다운로드 완료 후 팝업을 띄우기 위한 핸들러 영역
  const handleProcess = async (isZip: boolean) => {
    await processImages(isZip);
    setIsThanksModalOpen(true);
  };

  // 드롭존 설정 영역
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, 
    accept: { "image/*": [] }, 
    multiple: true,
    disabled: files.length >= 10
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      {/* 상단 헤더 섹션 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
            <ImageIcon className="text-blue-600 w-10 h-10" /> {t.sideMenu.img}
          </h1>
          <p className="text-slate-500 font-medium whitespace-pre-line">{t.img.desc}</p>
        </div>
        {files.length > 0 && (
          <button 
            onClick={clearAll} 
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-red-500 bg-red-50 dark:bg-red-950/30 rounded-2xl hover:bg-red-100 transition-all active:scale-95"
          >
            <Trash2 size={18} /> {t.img.clear}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 왼쪽: 파일 업로드 및 리스트 영역 */}
        <div className="xl:col-span-2 space-y-8">
          <ImageDropzone 
            getRootProps={getRootProps} 
            getInputProps={getInputProps} 
            isDragActive={isDragActive} 
            t={t} 
            currentCount={files.length}
          />
          <PreviewList previews={previews} />
        </div>

        {/* 오른쪽: 설정 패널 영역 */}
        <div className="space-y-6">
          <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-8">
            <FaviconButton onClick={setFaviconPreset} label={t.img.favicon} />

            {/* 포맷 선택 영역 */}
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <FileType size={14} /> {t.img.format}
              </label>
              <div className="flex flex-wrap gap-2">
                {["image/jpeg", "image/png", "image/webp", "image/x-icon"].map((f) => (
                  <button 
                    key={f} 
                    onClick={() => setTargetFormat(f)} 
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                      targetFormat === f ? "bg-blue-600 text-white shadow-md" : "bg-slate-50 dark:bg-slate-800"
                    }`}
                  >
                    {f === "image/x-icon" ? "ICO" : f.split("/")[1].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* 화질 및 압축 영역 */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Settings size={14} /> {t.img.quality}
                </label>
                <span className="text-blue-600 font-black">{Math.round(quality * 100)}%</span>
              </div>
              <input 
                type="range" min="0.1" max="1.0" step="0.1" value={quality} 
                onChange={(e) => setQuality(parseFloat(e.target.value))} 
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
            </div>

            {/* 크기 조절 영역 */}
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Maximize size={14} /> {t.img.resize}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="number" value={width || ""} placeholder={t.img.width} 
                  onChange={(e) => setWidth(Number(e.target.value))} 
                  className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl font-bold text-sm outline-none focus:ring-2 ring-blue-500" 
                />
                <input 
                  type="number" value={height || ""} placeholder={t.img.height} 
                  onChange={(e) => setHeight(Number(e.target.value))} 
                  className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl font-bold text-sm outline-none focus:ring-2 ring-blue-500" 
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} className="w-4 h-4 rounded accent-blue-600" />
                <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors">{t.img.keepRatio}</span>
              </label>
            </div>

            {/* 다운로드 실행 영역 */}
            <div className="space-y-3 pt-4">
              <button 
                onClick={() => handleProcess(false)} // 래핑된 핸들러 사용
                disabled={files.length === 0 || isConverting} 
                className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
              >
                {isConverting ? <RefreshCcw className="animate-spin" /> : <Download />} 
                {isConverting ? t.img.processing : t.img.convBtn}
              </button>
              <button 
                onClick={() => handleProcess(true)} // 래핑된 핸들러 사용
                disabled={files.length < 2 || isConverting} 
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
              >
                <Archive /> {t.img.zipBtn}
              </button>
            </div>
          </div>
          
          {/* Base64 결과 및 감사 팝업 연결 영역 */}
          {base64Result && (
            <Base64Output 
              result={base64Result} 
              label={t.img.base64} 
              onShowModal={() => setIsThanksModalOpen(true)} // 복사 시 팝업 트리거
            />
          )}
        </div>
      </div>

      {/* 감사 팝업 컴포넌트 배치 영역 */}
      <DonateModal 
        isOpen={isThanksModalOpen} 
        onClose={() => setIsThanksModalOpen(false)} 
        t={t}
        currentLang={currentLang}
      />
    </div>
  );
}