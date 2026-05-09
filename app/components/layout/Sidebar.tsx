// app/components/layout/Sidebar.tsx
import { Link } from "react-router";

export function Sidebar({ currentLang, t, menuItems, pathname }: any) {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
      {/* 사이드바 상단 로고 영역 */}
      <div className="p-8 pb-4">
        <Link
          to={`/${currentLang}`}
          className="group flex flex-col gap-1 transition-all"
        >
          {/* 로고 상단 작은 배지 영역 */}
          <span className="text-[10px] font-bold tracking-[0.15em] text-blue-600/70 uppercase">
            Digital Toolkit
          </span>

          <div className="flex items-center">
            {/* 메인 텍스트 영역 */}
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              {t.title.split("-")[0]}
            </span>
            {/* 강조 텍스트 영역 (그라데이션 적용) */}
            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-400">
              -{t.title.split("-")[1] || ""}
            </span>
          </div>

          {/* 하단 디자인 강조 바 영역 */}
          <div className="w-6 h-1 mt-1 bg-blue-600 rounded-full transition-all group-hover:w-12" />
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item: any) => (
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
        ))}
      </nav>
    </aside>
  );
}
