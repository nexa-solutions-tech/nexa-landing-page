import { PLAN_DISPLAY_NAMES } from "../constants";
import type { Ciclo, PlanoAPI } from "../types";

interface SubscriptionSummaryProps {
  plano: PlanoAPI;
  ciclo: Ciclo;
}

export const SubscriptionSummary = ({ plano, ciclo }: SubscriptionSummaryProps) => {
  const price = ciclo === "MONTHLY" ? plano.valorMensal : plano.valorAnual;
  const period = ciclo === "MONTHLY" ? "/mês" : "/ano";

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
      <div>
        <p className="text-sm font-medium text-white font-inter">
          Plano {PLAN_DISPLAY_NAMES[plano.nome]}
        </p>
        <p className="text-xs text-neutral-400 font-inter mt-0.5">
          Cobrança {ciclo === "MONTHLY" ? "mensal" : "anual"}
        </p>
      </div>
      <div className="text-right">
        <span className="text-lg font-semibold text-white font-inter">
          R${price.toFixed(0)}
        </span>
        <span className="text-sm text-neutral-400 font-inter">{period}</span>
      </div>
    </div>
  );
};
