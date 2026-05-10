// app/components/layout/MenuSearch.tsx
import { Search, X } from "lucide-react";

interface MenuSearchProps {
  query: string;
  setQuery: (val: string) => void;
  placeholder: string;
}

export function MenuSearch({ query, setQuery, placeholder }: MenuSearchProps) {
  return (
    <div className="relative group px-4 mb-4">
      {/* 검색 아이콘 영역 */}
      <Search 
        size={18} 
        className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" 
      />
      
      {/* 입력 필드 영역 */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-slate-100 dark:bg-slate-800 border-transparent border-2 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 rounded-xl text-sm font-medium outline-none transition-all"
      />

      {/* 검색어 초기화 버튼 영역 */}
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