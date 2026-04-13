import type { Ciclo } from "../types";

interface BillingToggleProps {
  ciclo: Ciclo;
  onToggle: (ciclo: Ciclo) => void;
}

export const BillingToggle = ({ ciclo, onToggle }: BillingToggleProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center bg-[radial-gradient(96%_341%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] shadow-[rgba(45,24,93,0.1)_0px_1px_6px_0px] rounded-full p-1 border border-neutral-800">
        <button
          type="button"
          onClick={() => onToggle("MONTHLY")}
          className={`relative z-10 px-5 py-2 text-sm font-inter tracking-[-0.32px] transition-all duration-300 rounded-full ${
            ciclo === "MONTHLY"
              ? "text-white bg-indigo-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Mensal
        </button>

        <div className="w-0.5 h-5 bg-indigo-400/25 mx-1" />

        <button
          type="button"
          onClick={() => onToggle("YEARLY")}
          className={`relative z-10 flex items-center gap-2 px-5 py-2 text-sm font-inter tracking-[-0.32px] transition-all duration-300 rounded-full ${
            ciclo === "YEARLY"
              ? "text-white bg-indigo-600"
              : "text-violet-100/70 hover:text-white"
          }`}
        >
          Anual
          <span className="bg-emerald-500/15 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-medium">
            -20%
          </span>
        </button>
      </div>
    </div>
  );
};
