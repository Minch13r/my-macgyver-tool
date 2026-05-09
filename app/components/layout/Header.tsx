// app/components/layout/Header.tsx
import { Link } from "react-router";
import { Menu, Sun, Moon, Terminal } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Header({ currentLang, supportedLangs, getLanguagePath, activeToolName, onMenuClick }: any) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu />
        </Button>
        <span className="text-sm font-bold text-blue-600">{activeToolName}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 mr-2 border border-slate-200 dark:border-slate-700">
          {supportedLangs.map((l: string) => (
            <Link
              key={l}
              to={getLanguagePath(l)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                currentLang === l ? "bg-white dark:bg-slate-600 text-blue-600 shadow-sm" : "text-slate-500"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={() => document.documentElement.classList.toggle("dark")}>
          <Sun className="dark:hidden" /><Moon className="hidden dark:block" />
        </Button>
        <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
          <Terminal size={16} /><span>GitHub</span>
        </Button>
      </div>
    </header>
  );
}