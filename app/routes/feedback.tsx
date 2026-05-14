// app/routes/feedback.tsx
import { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { useBcrypt } from "~/hooks/bcrypt/useBcrypt";

/**
 * 📍 피드백 및 기능 요청 페이지 컴포넌트 영역
 * 타이틀 그라데이션 컬러(Blue-Indigo) 동기화 디자인
 */
export default function FeedbackPage() {
  const { t } = useBcrypt(); 
  const [type, setType] = useState("feature");
  const [content, setContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 디스코드 웹훅 전송 처리 함수
  const handleSubmit = async () => {
    const DISCORD_WEB_HOOK = "https://discord.com/api/webhooks/1504465659973599392/ypzSsPQWnCbCn5FGCNAnkTFgSUGp_QWU4GO04hvBiegONBDhZiiuTyhU4gWqTaR26uBg";
    
    try {
      await fetch(DISCORD_WEB_HOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📌 **새로운 피드백 도착!**\n- 유형: ${type}\n- 내용: ${content}`,
        }),
      });
      setIsSubmitted(true);
      setContent("");
    } catch (error) {
      console.error(t.feedback.error || "Failed to send feedback.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      {/* 📍 상단 헤더: 타이틀과 동일한 감성의 텍스트 디자인 영역 */}
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <MessageSquare className="text-blue-600 w-8 h-8 stroke-[2.5]" />
          </div>
        </div>
        <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
          <span className="text-slate-900 dark:text-white">
            {t.feedback.title.split(" ")[0]}
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-400">
            {" "}{t.feedback.title.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="text-slate-500 font-medium tracking-tight max-w-xl">
          {t.feedback.desc}
        </p>
      </div>

      {/* 📍 피드백 폼 카드: 섬세한 그림자와 테두리 적용 영역 */}
      <div className="p-10 md:p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 transition-all">
        {isSubmitted ? (
          // 전송 완료 시 나타나는 우아한 결과 화면 영역
          <div className="py-16 text-center space-y-5 animate-in pop-in duration-500">
            <CheckCircle2 size={80} className="mx-auto text-blue-500 stroke-[1.5]" />
            <p className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              {t.feedback.success}
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* 📍 문의 유형 선택: 세그먼트 컨트롤 영역 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400 ml-1">
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                  {t.feedback.labelType}
                </span>
              </div>
              <div className="p-1.5 flex gap-1.5 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                {["feature", "bug", "etc"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setType(v)}
                    className={`flex-1 py-4 px-6 rounded-[1rem] text-sm font-black flex items-center justify-center gap-2.5 transition-all ${
                      type === v 
                        ? "bg-linear-to-br from-blue-600 to-indigo-400 text-white shadow-xl shadow-blue-500/30 scale-[1.03]" 
                        : "bg-white dark:bg-slate-900 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {v === "feature" ? t.feedback.typeFeature : v === "bug" ? t.feedback.typeBug : t.feedback.typeEtc}
                  </button>
                ))}
              </div>
            </div>

            {/* 📍 상세 내용 입력창 영역: 포커스 시 블루 강조색 적용 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400 ml-1">
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                  {t.feedback.labelContent}
                </span>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t.feedback.placeholder}
                className="w-full h-56 p-7 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none resize-none font-medium text-slate-700 dark:text-slate-200 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* 📍 전송 버튼 영역: 타이틀과 동일한 그라데이션 적용 */}
            <button
              onClick={handleSubmit}
              disabled={!content}
              className="w-full py-5 bg-linear-to-br from-blue-600 to-indigo-400 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:scale-100"
            >
              <Send size={20} className="w-5 h-5 stroke-2" /> 
              {t.feedback.submitBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}