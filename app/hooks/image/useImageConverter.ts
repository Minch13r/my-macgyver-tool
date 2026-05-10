// app/hooks/image/useImageConverter.ts
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import JSZip from "jszip";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

export function useImageConverter() {
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

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

  // Web Worker 초기화 및 종료 관리 영역
  useEffect(() => {
    const workerCode = `
      self.onmessage = async (e) => {
        const { imageBitmap, targetFormat, quality, targetWidth, targetHeight, originalName } = e.data;
        const canvas = new OffscreenCanvas(targetWidth, targetHeight);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imageBitmap, 0, 0, targetWidth, targetHeight);
        const blob = await canvas.convertToBlob({ type: targetFormat, quality: quality });
        self.postMessage({ blob, originalName });
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const newWorker = new Worker(URL.createObjectURL(blob));
    setWorker(newWorker);
    return () => newWorker.terminate();
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    const newPreviews = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  }, []);

  const clearAll = () => {
    setFiles([]);
    setPreviews([]);
    setBase64Result("");
  };

  const processImages = async (isZip: boolean) => {
    if (files.length === 0 || !worker) return;
    setIsConverting(true);
    const zip = new JSZip();
    let processedCount = 0;

    for (const file of files) {
      const imageBitmap = await createImageBitmap(file);
      let targetWidth = width || imageBitmap.width;
      let targetHeight = height || imageBitmap.height;

      if (keepRatio) {
        if (width && !height) targetHeight = (imageBitmap.height / imageBitmap.width) * width;
        else if (height && !width) targetWidth = (imageBitmap.width / imageBitmap.height) * height;
      }

      worker.postMessage({ imageBitmap, targetFormat, quality, targetWidth, targetHeight, originalName: file.name }, [imageBitmap]);

      worker.onmessage = (e) => {
        const { blob, originalName } = e.data;
        const extension = targetFormat.split("/")[1];
        const newName = `${originalName.split(".")[0]}.${extension}`;

        if (isZip) zip.file(newName, blob);
        else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = newName;
          link.click();
        }

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

  return {
    t, currentLang, files, previews, targetFormat, setTargetFormat,
    quality, setQuality, width, setWidth, height, setHeight,
    keepRatio, setKeepRatio, isConverting, base64Result,
    onDrop, clearAll, processImages
  };
}