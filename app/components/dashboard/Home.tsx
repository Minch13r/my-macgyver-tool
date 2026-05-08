// app/pages/dashboard/Home.tsx
import { useParams } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";
import { UtilityManager } from "~/components/tools/UtilityManager";

export default function Home() {
  const { lang } = useParams();
  const t = DICTIONARY[lang || DEFAULT_LANG];

  return (
    <main className="min-h-screen p-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* SEO를 위해 페이지의 가장 큰 제목을 알려주는 영역 */}
        <h1 className="sr-only">{t.title}</h1> 
        <p className="sr-only">{t.desc}</p>
        
        <UtilityManager />
      </div>
    </main>
  );
}