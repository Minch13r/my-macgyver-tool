// app/routes/image-converter.tsx
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import {
  Upload,
  Download,
  RefreshCcw,
  ImageIcon,
  FileType,
  FileImage,
  X,
  Maximize,
  Settings,
  Copy,
  Check,
  Archive,
  Trash2,
} from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export default function ImageConverter() {
  // 언어 설정 및 사전 데이터 추출 영역
  const { lang } = useParams();
  const currentLang = (
    lang && DICTIONARY[lang] ? lang : DEFAULT_LANG
  ) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 상태 관리 변수 정의 영역
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<{ url: string; name: string }[]>([]);
  const [targetFormat, setTargetFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(0.8);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [keepRatio, setKeepRatio] = useState(true);
  const [isConverting, setIsConverting] = useState(false);
  const [base64Result, setBase64Result] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [worker, setWorker] = useState<Worker | null>(null);

  // Web Worker 백그라운드 연산 로직 초기화 영역
  useEffect(() => {
    const workerCode = `
      self.onmessage = async (e) => {
        const { imageBitmap, targetFormat, quality, targetWidth, targetHeight, originalName } = e.data;
        const canvas = new OffscreenCanvas(targetWidth, targetHeight);
        const ctx = canvas.getContext('2d');
        
        // 이미지 그리기 및 리사이징 처리 영역
        ctx.drawImage(imageBitmap, 0, 0, targetWidth, targetHeight);
        
        // 설정된 화질 및 포맷으로 변환 영역
        const blob = await canvas.convertToBlob({ type: targetFormat, quality: quality });
        self.postMessage({ blob, originalName });
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const newWorker = new Worker(URL.createObjectURL(blob));
    setWorker(newWorker);

    return () => newWorker.terminate();
  }, []);

  // 파일 업로드 및 미리보기 생성 핸들러 영역
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    const newPreviews = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // 이미지 일괄 처리 및 다운로드 로직 영역
  const processImages = async (isZip: boolean) => {
    if (files.length === 0 || !worker) return;
    setIsConverting(true);
    const zip = new JSZip();
    let processedCount = 0;

    for (const file of files) {
      const imageBitmap = await createImageBitmap(file);

      // 리사이징 수치 계산 및 비율 유지 로직 영역
      let targetWidth = width || imageBitmap.width;
      let targetHeight = height || imageBitmap.height;

      if (keepRatio) {
        if (width && !height) {
          targetHeight = (imageBitmap.height / imageBitmap.width) * width;
        } else if (height && !width) {
          targetWidth = (imageBitmap.width / imageBitmap.height) * height;
        }
      }

      worker.postMessage(
        {
          imageBitmap,
          targetFormat,
          quality,
          targetWidth,
          targetHeight,
          originalName: file.name,
        },
        [imageBitmap],
      );

      worker.onmessage = (e) => {
        const { blob, originalName } = e.data;
        const extension = targetFormat.split("/")[1];
        const newName = `${originalName.split(".")[0]}.${extension}`;

        if (isZip) {
          zip.file(newName, blob);
        } else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = newName;
          link.click();
        }

        // Base64 추출 처리 영역
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => setBase64Result(reader.result as string);

        processedCount++;
        if (processedCount === files.length) {
          if (isZip) {
            zip.generateAsync({ type: "blob" }).then((content) => {
              const url = URL.createObjectURL(content);
              const link = document.createElement("a");
              link.href = url;
              link.download = `macgyver-images-${Date.now()}.zip`;
              link.click();
            });
          }
          setIsConverting(false);
        }
      };
    }
  };

  // 목록 초기화 함수 영역
  const clearAll = () => {
    setFiles([]);
    setPreviews([]);
    setBase64Result("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      {/* 페이지 상단 제목 및 초기화 버튼 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
            <ImageIcon className="text-blue-600 w-10 h-10" /> {t.sideMenu.img}
          </h1>
          <p className="text-slate-500 font-medium">{t.img.desc}</p>
        </div>
        {files.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 bg-red-50 dark:bg-red-950/30 rounded-xl hover:bg-red-100 transition-colors"
          >
            <Trash2 size={16} /> {t.img.clear}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 드롭존 및 이미지 미리보기 리스트 섹션 영역 */}
        <div className="xl:col-span-2 space-y-6">
          <div
            {...getRootProps()}
            className={`relative p-10 rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center min-h-75 ${isDragActive ? "border-blue-500 bg-blue-50/50" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"}`}
          >
            <input {...getInputProps()} />
            <Upload size={48} className="text-blue-500 mb-4" />
            <p className="text-xl font-black">{t.img.drop}</p>
            <p className="text-slate-400 font-medium">{t.img.click}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {previews.map((p, i) => (
              <div
                key={i}
                className="group relative aspect-square bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <img
                  src={p.url}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-[10px] text-white font-bold px-2 truncate w-full text-center">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 변환 옵션 설정 및 실행 컨트롤러 영역 */}
        <div className="space-y-6">
          <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-8">
            {/* 타겟 포맷 선택 영역 */}
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <FileType size={14} /> {t.img.format}
              </label>
              <div className="flex gap-2">
                {["image/jpeg", "image/png", "image/webp"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setTargetFormat(f)}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${targetFormat === f ? "bg-blue-600 text-white" : "bg-slate-50 dark:bg-slate-800"}`}
                  >
                    {f.split("/")[1].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* 화질 조절 슬라이더 영역 */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Settings size={14} /> {t.img.quality}
                </label>
                <span className="text-blue-600 font-black">
                  {Math.round(quality * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* 리사이징 입력 영역 */}
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Maximize size={14} /> {t.img.resize}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder={t.img.width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl font-bold text-sm outline-none focus:ring-2 ring-blue-500"
                />
                <input
                  type="number"
                  placeholder={t.img.height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl font-bold text-sm outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={keepRatio}
                  onChange={(e) => setKeepRatio(e.target.checked)}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                  {t.img.keepRatio}
                </span>
              </label>
            </div>

            {/* 변환 및 ZIP 다운로드 실행 영역 */}
            <div className="space-y-3 pt-4">
              <button
                onClick={() => processImages(false)}
                disabled={files.length === 0 || isConverting}
                className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
              >
                {isConverting ? (
                  <RefreshCcw className="animate-spin" />
                ) : (
                  <Download />
                )}{" "}
                {isConverting ? t.img.processing : t.img.convBtn}
              </button>
              <button
                onClick={() => processImages(true)}
                disabled={files.length < 2 || isConverting}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-20"
              >
                <Archive /> {t.img.zipBtn}
              </button>
            </div>
          </div>

          {/* Base64 코드 결과 출력 및 복사 섹션 영역 */}
          {base64Result && (
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                  {t.img.base64}
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(base64Result);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
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
                value={base64Result.substring(0, 100) + "..."}
                className="w-full h-20 bg-transparent text-[10px] font-mono text-slate-500 resize-none outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
