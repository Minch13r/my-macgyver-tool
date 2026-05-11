// app/routes/dashboard.tsx
import type { Route } from "../+types/root";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";
import Home from "~/components/dashboard/Home";

export function meta({ params }: Route.MetaArgs) {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];

  return [
    { title: t.title }, // 웹브라우저 탭에 뜨는 제목 영역
    { name: "description", content: t.desc }, // 검색 결과에 뜨는 설명 영역
    { name: "keywords", content: "toolkit, image converter, character counter, bcrypt, sha hash" },
    
    // SNS 공유 시 예쁘게 보여주는 영역 (Open Graph)
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.desc },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://macgyver-tool.com/${lang}` },
    
    // 트위터 공유용 카드 영역
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: t.title },
    { name: "twitter:description", content: t.desc },
  ];
}

export default function Page() {
  return <Home />;
}