import { PLAN_DISPLAY_NAMES } from "../constants";
import type { Ciclo, PlanoAPI } from "../types";

interface SubscriptionSummaryProps {
  plano: PlanoAPI;
  ciclo: Ciclo;
}

export const SubscriptionSummary = ({ plano, ciclo }: SubscriptionSummaryProps) => {
  const isAnnual = ciclo === "YEARLY";
  const price = isAnnual ? plano.valorAnual : plano.valorMensal;
  const monthlyEquivalent = isAnnual ? Math.round(plano.valorAnual / 12) : null;

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20">
      <div>
        <p className="text-sm font-medium text-white font-inter">
          Plano {PLAN_DISPLAY_NAMES[plano.nome]}
        </p>
        <p className="text-xs text-neutral-400 font-inter mt-0.5">
          Cobrança {isAnnual ? "anual" : "mensal"}
        </p>
      </div>
      <div className="text-right">
        <div>
          <span className="text-lg font-semibold text-white font-inter">
            R${price.toFixed(0)}
          </span>
          <span className="text-sm text-neutral-400 font-inter">/{ isAnnual ? "ano" : "mês"}</span>
        </div>
        {monthlyEquivalent && (
          <p className="text-xs text-emerald-400/80 font-inter mt-0.5">
            equivale a R${monthlyEquivalent}/mês
          </p>
        )}
      </div>
    </div>
  );
};
