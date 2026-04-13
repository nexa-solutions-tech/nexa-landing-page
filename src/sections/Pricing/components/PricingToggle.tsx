interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

export const PricingToggle = ({ isAnnual, onToggle }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center w-full z-[2]">
      <div className="relative flex items-center bg-[radial-gradient(96%_341%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] shadow-[rgba(45,24,93,0.1)_0px_1px_6px_0px] rounded-full p-1 border border-neutral-800/50">
        <button
          onClick={() => onToggle(false)}
          className={`relative z-10 px-6 py-2.5 text-sm font-inter tracking-[-0.28px] transition-all duration-300 rounded-full ${
            !isAnnual
              ? "text-white bg-indigo-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Mensal
        </button>

        <div className="w-0.5 h-5 bg-indigo-400/25 mx-1" />

        <button
          onClick={() => onToggle(true)}
          className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-inter tracking-[-0.28px] transition-all duration-300 rounded-full ${
            isAnnual
              ? "text-white bg-indigo-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Anual
          <span className="bg-emerald-500/15 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-medium">
            -30%
          </span>
        </button>
      </div>
    </div>
  );
};
