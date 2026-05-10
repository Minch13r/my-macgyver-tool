// app/components/layout/MobileMenu.tsx
import { useState } from "react";
import { Link } from "react-router";
import { MenuSearch } from "./MenuSearch";

export function MobileMenu({ isOpen, onClose, t, menuItems }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  {
    /* 검색어 필터링 로직 영역 */
  }
  const filteredItems = menuItems.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 p-6 shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
        <div className="text-2xl font-black text-blue-600 mb-6">{t.title}</div>

        {/* 📍 모바일 메뉴 검색창 영역 */}
        <div className="-mx-4">
          <MenuSearch
            query={searchQuery}
            setQuery={setSearchQuery}
            placeholder="Search..."
          />
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto mt-2">
          {filteredItems.map((item: any) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="flex items-center gap-4 py-3 px-4 text-lg font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
