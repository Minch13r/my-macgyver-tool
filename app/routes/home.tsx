// app/routes/home.tsx
import { redirect, type MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "../constants/i18n";

// 메타 태그 정의 영역 (카톡 미리보기용)
export const meta: MetaFunction = () => {
  const t = DICTIONARY[DEFAULT_LANG];
  return [
    { title: t.title },
    { name: "description", content: t.desc },
    // Open Graph 태그 영역
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: t.title },
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.desc },
    { property: "og:image", content: "/og-image.webp" }, 
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: "https://www.macqyver-tool.com" },
  ];
};

export function clientLoader() {
  const browserLang = navigator.language.split("-")[0];
  const supportedLangs = Object.keys(DICTIONARY);
  const finalLang = supportedLangs.includes(browserLang) ? browserLang : DEFAULT_LANG;
  return redirect(`/${finalLang}`);
}

export default function Home() {
  return null;
}