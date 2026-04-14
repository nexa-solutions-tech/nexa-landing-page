import { CreditCard, FileText } from "lucide-react";
import type { TipoCobranca } from "../types";

interface PaymentMethodSelectorProps {
  value: TipoCobranca;
  onChange: (method: TipoCobranca) => void;
}

const methods = [
  {
    id: "CREDIT_CARD" as TipoCobranca,
    label: "Cartão de Crédito",
    description: "Pagamento recorrente automático",
    icon: CreditCard,
  },
  {
    id: "BOLETO" as TipoCobranca,
    label: "Boleto Bancário",
    description: "Boleto mensal por e-mail",
    icon: FileText,
  },
];

export const PaymentMethodSelector = ({
  value,
  onChange,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {methods.map((method) => {
        const selected = value === method.id;
        const Icon = method.icon;

        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            className={[
              "flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200",
              selected
                ? "border-indigo-500 bg-indigo-600/10 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                : "border-neutral-700 bg-neutral-900/50 hover:border-neutral-600",
            ].join(" ")}
          >
            <div
              className={[
                "flex items-center justify-center w-9 h-9 rounded-lg shrink-0",
                selected ? "bg-indigo-500/15" : "bg-neutral-800",
              ].join(" ")}
            >
              <Icon
                size={18}
                className={selected ? "text-indigo-400" : "text-neutral-500"}
              />
            </div>
            <div className="text-left">
              <p
                className={[
                  "text-sm font-medium font-inter",
                  selected ? "text-white" : "text-neutral-300",
                ].join(" ")}
              >
                {method.label}
              </p>
              <p className="text-xs text-neutral-500 font-inter mt-0.5">
                {method.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
