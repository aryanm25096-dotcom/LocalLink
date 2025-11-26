import { ReactNode } from "react";

interface RoleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHint: string;
  glowColor: "cyan" | "purple";
  onClick: () => void;
}

export function RoleCard({
  icon,
  title,
  description,
  buttonText,
  buttonHint,
  glowColor,
  onClick,
}: RoleCardProps) {
  const glowStyles = {
    cyan: {
      card: "hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] border-[#22D3EE]/20 hover:border-[#22D3EE]/40",
      button: "bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#3B82F6] hover:to-[#34D9F4] shadow-[0_0_20px_rgba(34,211,238,0.3)]",
      iconBg: "bg-gradient-to-br from-[#2563EB]/20 to-[#22D3EE]/20 border-[#22D3EE]/30",
    },
    purple: {
      card: "hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] border-[#7C3AED]/20 hover:border-[#7C3AED]/40",
      button: "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#3B82F6] hover:to-[#8B5CF6] shadow-[0_0_20px_rgba(124,58,237,0.3)]",
      iconBg: "bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 border-[#7C3AED]/30",
    },
  };

  const styles = glowStyles[glowColor];

  return (
    <div
      className={`glass-card rounded-[20px] p-8 border transition-all duration-300 hover:-translate-y-1 ${styles.card}`}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl ${styles.iconBg} border flex items-center justify-center mb-6`}>
        <div className="text-[#22D3EE]">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[#F9FAFB] mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#94A3B8] mb-8 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onClick}
        className={`w-full py-3.5 px-6 rounded-xl text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${styles.button}`}
      >
        {buttonText}
      </button>

      {/* Button Hint */}
      <p className="text-xs text-[#64748B] mt-3 text-center">
        {buttonHint}
      </p>
    </div>
  );
}
