// app/hooks/image/useImageConverter.ts
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import JSZip from "jszip";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export function useImageConverter() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
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
  const [worker, setWorker] = useState<Worker | null>(null);

  // Web Worker 초기화 및 라이프사이클 관리 영역
  useEffect(() => {
    const workerCode = `
      self.onmessage = async (e) => {
        try {
          const { imageBitmap, targetFormat, quality, targetWidth, targetHeight, originalName } = e.data;
          const canvas = new OffscreenCanvas(targetWidth, targetHeight);
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error("Canvas context generation failed");
          
          ctx.drawImage(imageBitmap, 0, 0, targetWidth, targetHeight);
          const blob = await canvas.convertToBlob({ type: targetFormat, quality: quality });
          self.postMessage({ success: true, blob, originalName });
        } catch (error) {
          self.postMessage({ success: false, error: error.message });
        }
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const newWorker = new Worker(workerUrl);
    setWorker(newWorker);

    // 컴포넌트 언마운트 시 메모리 및 워커 해제 영역
    return () => {
      newWorker.terminate();
      URL.revokeObjectURL(workerUrl);
      previews.forEach(p => URL.revokeObjectURL(p.url));
    };
  }, []);

  // 파일 업로드 및 미리보기 URL 생성 처리 영역
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    const newPreviews = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  }, []);

  // 메모리 해제 및 전체 상태 초기화 함수 영역
  const clearAll = useCallback(() => {
    previews.forEach(p => URL.revokeObjectURL(p.url));
    setFiles([]);
    setPreviews([]);
    setBase64Result("");
  }, [previews]);

  // 이미지 일괄 변환 및 결과물 처리 로직 영역
  const processImages = async (isZip: boolean) => {
    if (files.length === 0 || !worker) return;
    setIsConverting(true);
    const zip = new JSZip();
    let processedCount = 0;

    for (const file of files) {
      try {
        // 이미지 비트맵 생성 및 에러 가드 영역
        const imageBitmap = await createImageBitmap(file);
        
        let targetWidth = width || imageBitmap.width;
        let targetHeight = height || imageBitmap.height;

        if (keepRatio) {
          if (width && !height) targetHeight = (imageBitmap.height / imageBitmap.width) * width;
          else if (height && !width) targetWidth = (imageBitmap.width / imageBitmap.height) * height;
        }

        // 워커 메시지 전송 및 소유권 이전 영역
        worker.postMessage({ 
          imageBitmap, targetFormat, quality, targetWidth, targetHeight, originalName: file.name 
        }, [imageBitmap]);

        worker.onmessage = (e) => {
          const { success, blob, originalName, error } = e.data;
          
          if (!success) {
            console.error(`Conversion error [${originalName}]:`, error);
            processedCount++;
          } else {
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
              setTimeout(() => URL.revokeObjectURL(url), 100);
            }

            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => setBase64Result(reader.result as string);
            processedCount++;
          }

          // 모든 파일 처리 완료 확인 영역
          if (processedCount === files.length) {
            if (isZip && Object.keys(zip.files).length > 0) {
              zip.generateAsync({ type: "blob" }).then((content) => {
                const url = URL.createObjectURL(content);
                const link = document.createElement("a");
                link.href = url;
                link.download = `macgyver-images-${Date.now()}.zip`;
                link.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
              });
            }
            setIsConverting(false);
          }
        };
      } catch (err) {
        console.error("Image bitmap creation failed:", err);
        processedCount++;
        if (processedCount === files.length) setIsConverting(false);
      }
    }
  };

  return {
    t, currentLang, files, previews, targetFormat, setTargetFormat,
    quality, setQuality, width, setWidth, height, setHeight,
    keepRatio, setKeepRatio, isConverting, base64Result,
    onDrop, clearAll, processImages
  };
}