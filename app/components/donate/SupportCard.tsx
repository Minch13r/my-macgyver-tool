// app/components/donate/SupportCard.tsx
import React from "react";

interface SupportCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  btnText: string;
  bgColor: string;
  iconColor: string;
  hoverColor: string;
  isToss?: boolean;
}

{
  /* 후원 수단별 카드 디자인 구현 영역 */
}
export const SupportCard = ({
  href,
  icon,
  title,
  desc,
  btnText,
  bgColor,
  iconColor,
  hoverColor,
  isToss,
}: SupportCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group p-8 border rounded-[2.5rem] transition-all duration-500 flex flex-col items-center text-center space-y-6 ${bgColor} ${hoverColor} ${isToss ? "animate-in fade-in zoom-in-95" : ""}`}
  >
    <div
      className={`p-5 text-white rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-500 ${iconColor}`}
    >
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm font-medium opacity-60">{desc}</p>
    </div>
    <div
      className={`w-full py-4 text-white font-bold rounded-2xl transition-colors ${iconColor}`}
    >
      {btnText}
    </div>
  </a>
);
