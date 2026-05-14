// app/routes/bcrypt.tsx
import { useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";
import { useBcrypt } from "~/hooks/bcrypt/useBcrypt";
import { CostSlider, BcryptResult, BcryptTabs, BcryptVerifyForm } from "~/components/bcrypt/BcryptUI";
import { DonateModal } from "~/components/image/DonateModal";
import type { MetaFunction } from "react-router";
import { DICTIONARY, DEFAULT_LANG } from "~/constants/i18n";

// 메타 데이터 및 SEO 설정
export const meta: MetaFunction = ({ params }) => {
  const lang = params.lang || DEFAULT_LANG;
  const t = DICTIONARY[lang];
  return [
    { title: `${t.sideMenu.bcrypt} | ${t.title}` },
    { name: "description", content: t.bcrypt.pageDesc }
  ];
};

export default function BcryptPage() {
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
  
  // 로직 및 다국어 데이터 주입
  const { 
    t, currentLang, activeTab, setActiveTab,
    password, setPassword, cost, setCost, hash, generateHash,
    verifyPassword, setVerifyPassword, verifyHash, setVerifyHash, verifyResult, verifyBcrypt,
    isProcessing 
  } = useBcrypt();

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      
      {/* 상단 헤더: 피드백 페이지 스타일 적용 */}
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <Lock className="text-blue-600 w-8 h-8 stroke-[2.5]" />
          </div>
        </div>
        <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
          <span className="text-slate-900 dark:text-white">
            {t.sideMenu.bcrypt.split(" ")[0]}
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-400">
            {" "}{t.sideMenu.bcrypt.split(" ").slice(1).join(" ") || "HASH"}
          </span>
        </h1>
        <p className="text-slate-500 font-medium tracking-tight max-w-xl">
          {t.bcrypt.pageDesc}
        </p>
      </div>

      {/* 탭 전환 버튼 영역 */}
      <BcryptTabs activeTab={activeTab} onTabChange={setActiveTab} t={t} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 왼쪽 입력 폼 카드 */}
        <div className="lg:col-span-7 p-10 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800">
          {activeTab === "hash" ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-400 ml-1">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Password</span>
                </div>
                <input
                  type="text" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.bcrypt.passPlaceholder}
                  className="w-full p-7 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none font-bold text-lg transition-all"
                />
              </div>
              
              <CostSlider value={cost} onChange={setCost} t={t} />
              
              <button
                onClick={generateHash}
                disabled={!password || isProcessing}
                className="w-full py-5 bg-linear-to-br from-blue-600 to-indigo-400 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-blue-500/25 disabled:opacity-50"
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

        {/* 오른쪽 안내 및 결과 카드 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-linear-to-br from-blue-600 to-indigo-500 rounded-[2.5rem] text-white shadow-xl shadow-blue-500/20 relative overflow-hidden h-fit">
            <ShieldAlert className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            <h3 className="text-xl font-black mb-2">{t.bcrypt.securityTipTitle}</h3>
            <p className="text-blue-50 text-sm font-medium leading-relaxed">{t.bcrypt.securityTipDesc}</p>
          </div>
          
          {activeTab === "hash" && (
            <div className="animate-in fade-in slide-in-from-right duration-500">
              <BcryptResult hash={hash} onShowModal={() => setIsThanksModalOpen(true)} t={t} />
            </div>
          )}
        </div>
      </div>

      <DonateModal 
        isOpen={isThanksModalOpen} 
        onClose={() => setIsThanksModalOpen(false)} 
        t={t} 
        currentLang={currentLang} 
      />
    </div>
  );
}