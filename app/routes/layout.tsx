// app/routes/layout.tsx
import { useState } from "react";
import { Outlet, useParams, useLocation, Link } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";
import {
  Image,
  Hash,
  ShieldCheck,
  Calculator,
  Menu,
  Sun,
  Moon,
  Terminal, // GitHub 대신 사용할 수 있는 아이콘 영역
  Languages,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { UtilityManager } from "~/components/tools/UtilityManager";

export default function Layout() {
  const { lang } = useParams();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. 현재 주소창의 언어 정보를 가져오는 영역
  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang];

  // 2. 사전에 등록된 모든 언어 목록 가져오기 영역
  const supportedLangs = Object.keys(DICTIONARY);

  // 메뉴 아이템 구성 (아이콘과 링크 매핑) 영역
  const menuItems = [
    {
      name: t.sideMenu.img,
      icon: <Image size={20} />,
      href: `/${currentLang}/image-conv`,
    },
    {
      name: t.sideMenu.count,
      icon: <Calculator size={20} />,
      href: `/${currentLang}/counter`,
    },
    {
      name: t.sideMenu.sha,
      icon: <Hash size={20} />,
      href: `/${currentLang}/sha`,
    },
    {
      name: t.sideMenu.bcrypt,
      icon: <ShieldCheck size={20} />,
      href: `/${currentLang}/bcrypt`,
    },
  ];

  // 현재 주소에서 언어 코드만 쏙 바꿔주는 계산기 영역
  const getLanguagePath = (newLang: string) => {
    const segments = location.pathname.split("/");
    // /ko/image-conv -> segments[1]은 'ko'. 이걸 newLang으로 교체 영역
    segments[1] = newLang;
    return segments.join("/") || `/${newLang}`;
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 🟢 데스크탑 전용 사이드바 영역 */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
        <div className="p-6">
          <Link
            to={`/${currentLang}`}
            className="text-xl font-black text-blue-600 dark:text-blue-400"
          >
            {t.title}
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                location.pathname.includes(item.href)
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

      {/* 🔵 메인 콘텐츠 및 헤더 구역 영역 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 상단 헤더 바 영역 */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu />
            </Button>

            {/* 현재 도구 이름 표시(Breadcrumb) 영역 */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-blue-600">
                {menuItems.find((i) => location.pathname.includes(i.href))
                  ?.name || "Home"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 🌐 언어 전환 스위치 영역 */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 mr-2 border border-slate-200 dark:border-slate-700">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={getLanguagePath(l)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                    currentLang === l
                      ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-300 shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* 다크모드 전환 버튼 영역 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => document.documentElement.classList.toggle("dark")}
            >
              <Sun className="dark:hidden" />
              <Moon className="hidden dark:block" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Terminal size={16} />
              <span>GitHub</span>
            </Button>
          </div>
        </header>

        {/* 📦 실제 도구(페이지)들이 그려지는 구멍 영역 */}
        <main className="p-6 md:p-10 flex-1">
          <UtilityManager />
        </main>
      </div>

      {/* 📱 모바일 전용 메뉴 레이어 영역 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 p-6 shadow-xl animate-in slide-in-from-left">
            <div className="text-xl font-black text-blue-600 mb-8">
              {t.title}
            </div>
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-lg hover:text-blue-600"
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
