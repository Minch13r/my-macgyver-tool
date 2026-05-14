// app/components/layout/Header.tsx
import { Link } from "react-router";
import { Menu, Sun, Moon, Terminal, Coffee } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Header({
  currentLang,
  supportedLangs,
  getLanguagePath,
  activeToolName,
  onMenuClick,
  t,
}: any) {
  // 후원 기능 활성 제어 스위치 영역
  const isDonateActive = false;

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* 모바일 전용 메뉴 버튼 영역 */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu />
        </Button>
        {/* 현재 활성화된 도구 명칭 표시 영역 */}
        <span className="text-sm font-bold text-blue-600">
          {activeToolName}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* 언어 선택 토글 영역 */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 mr-2 border border-slate-200 dark:border-slate-700">
          {supportedLangs.map((l: string) => (
            <Link
              key={l}
              to={getLanguagePath(l)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                currentLang === l
                  ? "bg-white dark:bg-slate-600 text-blue-600 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* 후원 버튼 그룹 노출 제어 영역 */}
        {isDonateActive && (
          <div className="flex items-center gap-1 mr-2">
            {/* 모든 언어 공용 커피 아이콘 버튼 */}
            <Button variant="ghost" size="icon" asChild title={t.donate}>
              <Link to={`/${currentLang}/donate`}>
                <Coffee size={20} className="text-orange-500" />
              </Link>
            </Button>
          </div>
        )}

        {/* 테마 모드 전환 버튼 영역 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          <Sun className="dark:hidden" />
          <Moon className="hidden dark:block" />
        </Button>
      </div>
    </header>
  );
}