import { CreditCard, FileText, Shuffle } from "lucide-react";
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
  {
    id: "UNDEFINED" as TipoCobranca,
    label: "Escolher na hora",
    description: "Link de pagamento por e-mail",
    icon: Shuffle,
  },
];

export const PaymentMethodSelector = ({
  value,
  onChange,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {methods.map((method) => {
        const selected = value === method.id;
        const Icon = method.icon;

        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            className={[
              "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 text-center",
              selected
                ? "border-indigo-500 bg-indigo-600/10 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                : "border-neutral-700 bg-neutral-900/50 hover:border-neutral-600",
            ].join(" ")}
          >
            <Icon
              size={20}
              className={selected ? "text-indigo-400" : "text-neutral-500"}
            />
            <div>
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
