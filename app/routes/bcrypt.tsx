// app/routes/bcrypt.tsx
import { useState } from "react";
import { Lock, KeyRound, RefreshCw, ShieldAlert } from "lucide-react";
import { useBcrypt } from "~/hooks/bcrypt/useBcrypt";
import { CostSlider, BcryptResult } from "~/components/bcrypt/BcryptUI";
import { DonateModal } from "~/components/image/DonateModal";
import type { MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

export const meta: MetaFunction = ({ params }) => {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];
  return [{ title: `${t.sideMenu.bcrypt} | ${t.title}` }];
};

export default function BcryptPage() {
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
  const { t, currentLang, password, setPassword, cost, setCost, hash, generateHash, isProcessing } = useBcrypt();

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      {/* 헤더 섹션 영역 */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
          <Lock className="text-indigo-600 w-10 h-10" /> {t.sideMenu.bcrypt}
        </h1>
        <p className="text-slate-500 font-medium tracking-tight">강력한 솔트가 포함된 가변 비용 해시를 생성하십시오.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* 입력 필드 영역 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400 ml-2">
              <KeyRound size={14} />
              <span className="text-[11px] font-black uppercase tracking-widest">{t.bcrypt.pass}</span>
            </div>
            <input
              type="text" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none text-lg font-bold shadow-xl"
            />
          </div>

          {/* 📍 비용(범위) 설정 부품 배치 영역 */}
          <CostSlider value={cost} onChange={setCost} />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
            <ShieldAlert className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            <h3 className="text-xl font-black mb-2">Secure Your Data</h3>
            <p className="text-indigo-100 text-sm font-medium leading-relaxed">
              Bcrypt는 데이터베이스에 저장할 비밀번호를 보호하는 최고의 방법 중 하나입니다.
            </p>
            
            <button
              onClick={generateHash}
              disabled={!password || isProcessing}
              className="mt-6 w-full py-4 bg-white text-indigo-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isProcessing ? <RefreshCw className="animate-spin" /> : <Lock size={18} />}
              {t.bcrypt.gen}
            </button>
          </div>

          {/* 결과 출력 부품 배치 영역 */}
          <BcryptResult hash={hash} onShowModal={() => setIsThanksModalOpen(true)} t={t} />
        </div>
      </div>

      <DonateModal 
        isOpen={isThanksModalOpen} 
        onClose={() => setIsThanksModalOpen(false)} 
        t={t} currentLang={currentLang}
      />
    </div>
  );
}