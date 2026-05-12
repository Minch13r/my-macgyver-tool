import { redirect } from "react-router";
import type { Route } from "./+types/home";
import { DICTIONARY, DEFAULT_LANG } from "../constants/i18n";

export function clientLoader({ request }: Route.LoaderArgs) {
  // 브라우저 언어 확인 및 기본값 설정
  const acceptLanguage = request.headers.get("Accept-Language") || DEFAULT_LANG;
  const preferredLang = acceptLanguage.split(",")[0].split("-")[0];
  
  const supportedLangs = Object.keys(DICTIONARY);
  
  // 지원하는 언어면 해당 언어로, 아니면 기본값(en)으로 설정
  const finalLang = supportedLangs.includes(preferredLang) ? preferredLang : DEFAULT_LANG;

  return redirect(`/${finalLang}`);
}

export default function Home() {
  return null;
}