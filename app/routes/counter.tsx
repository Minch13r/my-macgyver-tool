// app/routes/counter.tsx
import { FileText, Trash2, Type, Hash, Database } from "lucide-react";
import { useCharacterCounter } from "~/hooks/counter/useCharacterCounter";
import { StatCard, TextEditor } from "~/components/counter/CounterUI";
import type { MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

// 메타 데이터 및 SEO 설정 영역
export const meta: MetaFunction = ({ params }) => {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];

  return [
    { title: `${t.sideMenu.count} | ${t.title}` },
    { name: "description", content: t.desc },
    { property: "og:title", content: t.sideMenu.count },
    { property: "og:description", content: t.desc },
  ];
};

export default function CounterPage() {
  const { t, text, setText, stats, clearText } = useCharacterCounter();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      {/* 상단 헤더 및 초기화 섹션 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
            <FileText className="text-blue-600 w-10 h-10" /> {t.sideMenu.count}
          </h1>
          <p className="text-slate-500 font-medium">{t.desc}</p>
        </div>
        {text.length > 0 && (
          <button
            onClick={clearText}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-red-500 bg-red-50 dark:bg-red-950/30 rounded-2xl hover:bg-red-100 transition-all active:scale-95"
          >
            <Trash2 size={18} /> {t.img.clear}
          </button>
        )}
      </div>

      {/* 통계 요약 카드 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label={t.counter.char}
          value={stats.chars}
          icon={Type}
          gradient="from-blue-600 to-blue-400"
        />
        <StatCard
          label={`${t.counter.char} (No Spaces)`}
          value={stats.charsNoSpace}
          icon={Hash}
          gradient="from-indigo-600 to-purple-400"
        />
        <StatCard
          label={t.counter.byte}
          value={stats.bytes}
          icon={Database}
          gradient="from-emerald-600 to-teal-400"
        />
      </div>

      {/* 메인 텍스트 에디터 영역 */}
      <div className="space-y-4">
        <TextEditor
          value={text}
          onChange={setText}
          placeholder={t.counter.placeholder}
        />
      </div>
    </div>
  );
}
