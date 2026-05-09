// app/routes/layout.tsx 영역
import { useState } from "react";
import { Outlet, useParams, useLocation } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/dictionary";
import { Image, Hash, ShieldCheck, Calculator } from "lucide-react";

// 조각들 불러오기 영역
import { Sidebar } from "~/components/layout/Sidebar";
import { Header } from "~/components/layout/Header";
import { MobileMenu } from "~/components/layout/MobileMenu";
import { UtilityManager } from "~/components/tools/UtilityManager";

export default function Layout() {
  const { lang } = useParams();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLang = lang && DICTIONARY[lang] ? lang : DEFAULT_LANG;
  const t = DICTIONARY[currentLang];
  const supportedLangs = Object.keys(DICTIONARY);

  // 메뉴 구성 데이터
  const menuItems = [
    { name: t.sideMenu.img, icon: <Image size={20} />, href: `/${currentLang}/image-conv` },
    { name: t.sideMenu.count, icon: <Calculator size={20} />, href: `/${currentLang}/counter` },
    { name: t.sideMenu.sha, icon: <Hash size={20} />, href: `/${currentLang}/sha` },
    { name: t.sideMenu.bcrypt, icon: <ShieldCheck size={20} />, href: `/${currentLang}/bcrypt` },
  ];

  const getLanguagePath = (newLang: string) => {
    const segments = location.pathname.split("/");
    segments[1] = newLang;
    return segments.join("/") || `/${newLang}`;
  };

  const activeToolName = menuItems.find((i) => location.pathname.includes(i.href))?.name || "Home";

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 데스크탑 전용 사이드바 */}
      <Sidebar currentLang={currentLang} t={t} menuItems={menuItems} pathname={location.pathname} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* 공통 헤더 */}
        <Header 
          currentLang={currentLang} 
          supportedLangs={supportedLangs} 
          getLanguagePath={getLanguagePath} 
          activeToolName={activeToolName}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        
        {/* 메인페이지 */}
        <main className="p-6 md:p-10 flex-1">
          <UtilityManager />
        </main>
      </div>

      {/* 모바일 전용 슬라이드 메뉴 */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        t={t} 
        menuItems={menuItems} 
      />
    </div>
  );
}