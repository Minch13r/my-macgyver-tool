// app/components/layout/MobileMenu.tsx 영역
import { Link } from "react-router";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
  menuItems: any[];
}

export function MobileMenu({ isOpen, onClose, t, menuItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* 어두운 배경(Backdrop) */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* 메뉴 슬라이드 */}
      <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 p-6 shadow-2xl animate-in slide-in-from-left duration-300">
        <div className="text-2xl font-black text-blue-600 mb-10">
          {t.title}
        </div>
        
        <nav className="space-y-4">
          {menuItems.map((item) => (
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

        {/* 하단 닫기 안내 */}
        <div className="absolute bottom-10 left-6 text-xs text-slate-400">
          메뉴 바깥을 누르면 닫힙니다.
        </div>
      </div>
    </div>
  );
}