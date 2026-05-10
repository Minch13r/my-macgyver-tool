// app/components/layout/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router";
import { MenuSearch } from "./MenuSearch";

export function Sidebar({ currentLang, t, menuItems, pathname }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  {
    /* 검색어에 따른 메뉴 필터링 로직 영역 */
  }
  const filteredItems = menuItems.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
      <div className="p-8 pb-4">
        {/* 기존 로고 영역 */}
        <Link to={`/${currentLang}`} className="group flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[0.15em] text-blue-600/70 uppercase">
            Digital Toolkit
          </span>
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              {t.title.split("-")[0]}
            </span>
            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-400">
              -{t.title.split("-")[1] || ""}
            </span>
          </div>
          <div className="w-6 h-1 mt-1 bg-blue-600 rounded-full transition-all group-hover:w-12" />
        </Link>
      </div>

      {/* 📍 메뉴 검색창 영역 */}
      <MenuSearch
        query={searchQuery}
        setQuery={setSearchQuery}
        placeholder={currentLang === "ko" ? "메뉴 검색..." : "Search tools..."}
      />

      <nav className="flex-1 p-4 pt-0 space-y-2 overflow-y-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item: any) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname.includes(item.href)
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))
        ) : (
          <div className="text-center py-10 text-sm text-slate-400 font-medium">
            {currentLang === "ko"
              ? "검색 결과가 없습니다."
              : "No results found."}
          </div>
        )}
      </nav>
    </aside>
  );
}
