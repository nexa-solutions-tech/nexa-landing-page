import { motion } from "framer-motion";
import { BillingToggle } from "./BillingToggle";
import { PlanCard } from "./PlanCard";
import type { Ciclo, PlanoAPI, PlanoNome } from "../types";

interface PlanSelectionProps {
  planos: PlanoAPI[];
  ciclo: Ciclo;
  onCicloChange: (ciclo: Ciclo) => void;
  selectedPlano: PlanoNome | null;
  onSelectPlano: (nome: PlanoNome) => void;
  onContinue: () => void;
}

export const PlanSelection = ({
  planos,
  ciclo,
  onCicloChange,
  selectedPlano,
  onSelectPlano,
  onContinue,
}: PlanSelectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-neutral-400 text-sm font-inter">
          Selecione o plano ideal para sua clínica
        </p>
      </div>

      <BillingToggle ciclo={ciclo} onToggle={onCicloChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-1 md:items-start">
        {planos.map((plano, index) => (
          <PlanCard
            key={plano.id}
            plano={plano}
            ciclo={ciclo}
            selected={selectedPlano === plano.nome}
            onSelect={() => onSelectPlano(plano.nome)}
            index={index}
          />
        ))}
      </div>

      <button
        type="button"
        disabled={!selectedPlano}
        onClick={onContinue}
        className="flex items-center justify-center gap-2 w-full mt-1 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold font-inter transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
      >
        Continuar
      </button>
    </motion.div>
  );
};
