import { useState } from "react";

interface PricingToggleProps {
  onToggle?: (isAnnual: boolean) => void;
}

export const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual);
    onToggle?.(annual);
  };

  return (
    <div className="hidden md:flex items-center justify-center w-full z-[2]">
      <div className="relative flex items-center bg-[radial-gradient(96%_341%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] shadow-[rgba(45,24,93,0.1)_0px_1px_6px_0px] rounded-full p-1">
        {/* Mensal Button */}
        <button
          onClick={() => handleToggle(false)}
          className={`relative z-10 px-6 py-2.5 text-base font-inter tracking-[-0.32px] transition-all duration-300 rounded-full ${
            !isAnnual
              ? "text-white bg-blue-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Mensal
        </button>

        {/* Divider */}
        <div className="w-0.5 h-6 bg-indigo-400/25 mx-1" />

        {/* Anual Button */}
        <button
          onClick={() => handleToggle(true)}
          className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-base font-inter tracking-[-0.32px] transition-all duration-300 rounded-full ${
            isAnnual
              ? "text-white bg-blue-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Anual
          <span className="bg-blue-950 text-violet-100/90 text-sm px-3 py-1 rounded-full">
            30% off
          </span>
        </button>
      </div>
    </div>
  );
};
