// app/routes/image-converter.tsx
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  Download,
  RefreshCcw,
  ImageIcon,
  FileType,
  FileImage,
  X,
} from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export default function ImageConverter() {
  const { lang } = useParams();

  // 현재 언어 및 사전 데이터 설정 영역
  const currentLang = (
    lang && DICTIONARY[lang] ? lang : DEFAULT_LANG
  ) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  // 이미지 상태 관리 변수 영역
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState("image/jpeg");
  const [isConverting, setIsConverting] = useState(false);
  const [worker, setWorker] = useState<Worker | null>(null);

  // Web Worker 초기화 및 백그라운드 연산 설정 영역
  useEffect(() => {
    const workerCode = `
      self.onmessage = async (e) => {
        const { imageBitmap, targetFormat } = e.data;
        const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imageBitmap, 0, 0);
        
        const blob = await canvas.convertToBlob({ type: targetFormat, quality: 0.9 });
        self.postMessage({ blob });
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const newWorker = new Worker(URL.createObjectURL(blob));
    setWorker(newWorker);

    return () => newWorker.terminate();
  }, []);

  // 드롭존 파일 수락 핸들러 영역
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, []);

  // react-dropzone 설정 및 훅 영역
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  // 선택 파일 초기화 및 미리보기 제거 영역
  const resetFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  // Web Worker 기반 이미지 변환 및 다운로드 실행 영역
  const convertImage = async () => {
    if (!selectedFile || !worker) return;
    setIsConverting(true);

    try {
      const imageBitmap = await createImageBitmap(selectedFile);
      worker.postMessage({ imageBitmap, targetFormat }, [imageBitmap]);

      worker.onmessage = (e) => {
        const { blob } = e.data;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `converted-${Date.now()}.${targetFormat.split("/")[1]}`;
        link.click();
        setIsConverting(false);
      };
    } catch (error) {
      console.error("Conversion failed:", error);
      setIsConverting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* 헤더 섹션: 사전 데이터 기반 제목 및 설명 출력 영역 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <ImageIcon className="text-blue-600" /> {t.sideMenu.img}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          {t.img.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 드롭존 영역: 이미지 업로드 및 미리보기 인터페이스 영역 */}
        <div
          {...getRootProps()}
          className={`relative p-8 rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center min-h-100
            ${isDragActive ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"}
            ${previewUrl ? "border-solid" : "hover:border-blue-400"}`}
        >
          <input {...getInputProps()} />

          {previewUrl ? (
            <div className="relative z-10 w-full h-full flex flex-col items-center">
              <button
                onClick={resetFile}
                className="absolute -top-4 -right-4 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-80 rounded-2xl shadow-2xl object-contain"
              />
              <p className="mt-4 text-sm font-bold text-slate-400 flex items-center gap-2">
                <FileImage size={16} /> {selectedFile?.name}
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-3xl flex items-center justify-center">
                <Upload size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-xl font-black text-slate-700 dark:text-slate-200">
                  {t.img.drop}
                </p>
                <p className="text-slate-400 font-medium">{t.img.click}</p>
              </div>
            </div>
          )}
        </div>

        {/* 설정 섹션: 타겟 포맷 선택 및 변환 실행 영역 */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col justify-between">
          <div className="space-y-6">
            <label className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <FileType size={16} /> {t.img.format}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["image/jpeg", "image/png", "image/webp"].map((format) => (
                <button
                  key={format}
                  onClick={() => setTargetFormat(format)}
                  className={`py-4 rounded-2xl font-bold transition-all ${
                    targetFormat === format
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-[1.02]"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  {format.split("/")[1].toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={convertImage}
            disabled={!selectedFile || isConverting}
            className="w-full mt-8 py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-500/40 transition-all disabled:opacity-20"
          >
            {isConverting ? (
              <RefreshCcw className="animate-spin" />
            ) : (
              <Download />
            )}
            {/* 진행 상태에 따른 다국어 텍스트 출력 영역 */}
            {isConverting ? t.img.processing : t.img.convBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
