// app/components/image/DonateModal.tsx
import { Heart, X } from "lucide-react";
import { Link } from "react-router";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
  currentLang: string;
}

export function DonateModal({ isOpen, onClose, t, currentLang }: DonateModalProps) {
  // 후원 기능 활성 제어 스위치 설정 영역
  // true: 메인 이동 버튼 노출, false: 후원 페이지 이동 버튼 노출
  const isDonationDisabled = true; 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* 배경 오버레이 영역 */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* 팝업 본체 영역 */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 scale-in-center">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 animate-bounce">
            <Heart size={32} fill="currentColor" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">{t.thanksTitle}</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium whitespace-pre-line leading-relaxed">
              {isDonationDisabled ? t.feedbackMsg : t.thanksMsg}
            </p>
          </div>

          <div className="flex flex-col w-full gap-3">
            {/* 스위치 값에 따른 버튼 분기 처리 영역 */}
            {isDonationDisabled ? (
              <Link 
                to={`/${currentLang}/feedback`} 
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black hover:opacity-90 transition-all text-center shadow-lg"
              >
                {t.feedbackBtn}
              </Link>
            ) : (
              <Link 
                to={`/${currentLang}/donate`} 
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-500/20"
              >
                {t.donateBtn}
              </Link>
            )}
            
            <button onClick={onClose} className="w-full py-4 text-slate-400 font-bold hover:text-slate-600 transition-all">
              {t.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}