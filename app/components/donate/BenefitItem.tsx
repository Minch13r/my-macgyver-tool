// app/components/donate/BenefitItem.tsx
import { CheckCircle2 } from "lucide-react";

{/* 혜택 개별 항목 컴포넌트 영역 */}
export const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
    <CheckCircle2 size={18} className="text-blue-500" />
    <span>{text}</span>
  </div>
);