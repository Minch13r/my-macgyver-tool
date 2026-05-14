// app/routes/home.tsx
import { redirect, type MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "../constants/i18n";

export const meta: MetaFunction = () => {
  const t = DICTIONARY[DEFAULT_LANG];
  const siteUrl = "https://www.macgyver-tool.com";
  const ogImage = `${siteUrl}/og-image.webp`;

  return [
    { title: t.title },
    { name: "description", content: t.desc },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: t.title },
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.desc },
    { property: "og:image", content: ogImage }, 
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: siteUrl },
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