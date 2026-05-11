// app/routes/$.tsx
import { Link, useNavigate, useLocation } from "react-router";
import { MoveLeft, Home, Ghost } from "lucide-react";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 주소창 경로에서 언어 코드 추출 영역
  const pathParts = location.pathname.split("/").filter(Boolean);
  const langInPath = pathParts[0];
  
  // 추출한 언어가 사전에 있는지 확인 후 설정 영역
  const currentLang = (langInPath && DICTIONARY[langInPath] 
    ? langInPath 
    : DEFAULT_LANG) as keyof typeof DICTIONARY;
  
  const t = DICTIONARY[currentLang];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-in fade-in duration-700">
      {/* 404 시각적 요소 영역 */}
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-slate-100 dark:text-slate-800 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Ghost size={80} className="text-blue-600 animate-bounce" />
        </div>
      </div>

      {/* 메시지 및 설명 영역 */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          {t.notFound.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
          {t.notFound.desc}
        </p>
      </div>

      {/* 네비게이션 버튼 그룹 영역 */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex-1 py-4 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-95"
        >
          <MoveLeft size={20} />
          {t.notFound.goBack}
        </button>
        
        <Link
          to={`/${currentLang}`}
          className="flex-1 py-4 px-6 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95 whitespace-pre-line"
        >
          <Home size={20} />
          {t.notFound.goHome}
        </Link>
      </div>
    </div>
  );
}