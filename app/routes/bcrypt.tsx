// app/routes/bcrypt.tsx
import { useState } from "react";
import { Lock, RefreshCw, ShieldAlert } from "lucide-react";
import { useBcrypt } from "~/hooks/bcrypt/useBcrypt";
import { CostSlider, BcryptResult, BcryptTabs, BcryptVerifyForm } from "~/components/bcrypt/BcryptUI";
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
  const { 
    t, currentLang, activeTab, setActiveTab,
    password, setPassword, cost, setCost, hash, generateHash,
    verifyPassword, setVerifyPassword, verifyHash, setVerifyHash, verifyResult, verifyBcrypt,
    isProcessing 
  } = useBcrypt();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <Lock className="text-indigo-600 w-10 h-10" /> {t.sideMenu.bcrypt}
        </h1>
        <p className="text-slate-500 font-medium tracking-tight">강력한 솔트가 포함된 가변 비용 해시를 생성하고 검증하십시오.</p>
      </div>

      {/* 탭 전환 영역 */}
      <BcryptTabs activeTab={activeTab} onTabChange={setActiveTab} t={t} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          {activeTab === "hash" ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-500">
              <div className="space-y-4">
                <input
                  type="text" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password to hash..."
                  className="w-full p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-100 dark:border-slate-800 focus:border-indigo-500 outline-none text-lg font-bold shadow-xl"
                />
              </div>
              <CostSlider value={cost} onChange={setCost} />
              <button
                onClick={generateHash}
                disabled={!password || isProcessing}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-indigo-500/20 disabled:opacity-50"
              >
                {isProcessing ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Lock size={20} />}
                {t.bcrypt.gen}
              </button>
            </div>
          ) : (
            <BcryptVerifyForm 
              password={verifyPassword} setPassword={setVerifyPassword}
              hash={verifyHash} setHash={setVerifyHash}
              result={verifyResult} onVerify={verifyBcrypt}
              isProcessing={isProcessing} t={t}
            />
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden h-fit">
            <ShieldAlert className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            <h3 className="text-xl font-black mb-2">Security Tip</h3>
            <p className="text-indigo-100 text-sm font-medium leading-relaxed">
              Bcrypt는 레인보우 테이블 공격을 방지하기 위해 각 해시마다 고유한 솔트를 자동으로 생성합니다.
            </p>
          </div>
          {activeTab === "hash" && (
            <BcryptResult hash={hash} onShowModal={() => setIsThanksModalOpen(true)} t={t} />
          )}
        </div>
      </div>

      <DonateModal isOpen={isThanksModalOpen} onClose={() => setIsThanksModalOpen(false)} t={t} currentLang={currentLang} />
    </div>
  );
}