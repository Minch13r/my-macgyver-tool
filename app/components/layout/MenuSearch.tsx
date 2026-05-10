// app/components/layout/MenuSearch.tsx
import { useParams } from "react-router";
import { Search, X } from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";

{/* 검색 상태만 관리하는 인터페이스 영역 */}
interface MenuSearchProps {
  query: string;
  setQuery: (val: string) => void;
}

export function MenuSearch({ query, setQuery }: MenuSearchProps) {
  {/* URL 파라미터에서 현재 언어 추출 영역 */}
  const { lang } = useParams();
  const currentLang = (lang && DICTIONARY[lang] ? lang : DEFAULT_LANG) as keyof typeof DICTIONARY;
  const t = DICTIONARY[currentLang];

  return (
    <div className="relative group px-4 mb-4">
      {/* 돋보기 아이콘 영역 */}
      <Search 
        size={18} 
        className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" 
      />
      
      {/* 다국어 사전(t.search)에서 직접 가져온 힌트 문구 적용 영역 */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.search}
        className="w-full pl-10 pr-10 py-2.5 bg-slate-100 dark:bg-slate-800 border-transparent border-2 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 rounded-xl text-sm font-medium outline-none transition-all"
      />

      {/* 검색어 지우기 버튼 영역 */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-7 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
        >
          <X size={14} className="text-slate-400" />
        </button>
      )}
    </div>
  );
}