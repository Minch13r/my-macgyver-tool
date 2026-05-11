// app/pages/dashboard/Home.tsx
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";
import { UtilityManager } from "~/components/tools/UtilityManager";

export default function Home() {
  const { lang } = useParams();
  const t = DICTIONARY[lang || DEFAULT_LANG];

  return (
    <div className="w-full transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* SEO를 위해 페이지의 가장 큰 제목을 알려주는 영역 */}
        <h1 className="sr-only">{t.title}</h1> 
        <p className="sr-only">{t.desc}</p>
        
        <UtilityManager />
      </div>
    </div>
  );
}