// app/components/layout/Sidebar.tsx
import { Link } from "react-router";

export function Sidebar({ currentLang, t, menuItems, pathname }: any) {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
      <div className="p-6">
        <Link to={`/${currentLang}`} className="text-xl font-black text-blue-600 dark:text-blue-400">
          {t.title}
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