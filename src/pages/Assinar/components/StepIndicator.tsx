import { Check } from "lucide-react";
import type { CheckoutStep } from "../types";

interface StepIndicatorProps {
  currentStep: CheckoutStep;
}

const steps = [
  { number: 1, label: "Plano" },
  { number: 2, label: "Pagamento" },
  { number: 3, label: "Confirmação" },
] as const;

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-0 w-full">
      {steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isComplete = step.number < currentStep;

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center gap-1.5">
              <div
                className={[
                  "flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold font-inter transition-all duration-300",
                  isComplete
                    ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/20"
                    : isActive
                      ? "bg-indigo-600/80 text-white"
                      : "bg-neutral-800/60 text-neutral-500 border border-neutral-700/50",
                ].join(" ")}
              >
                {isComplete ? <Check size={12} /> : step.number}
              </div>
              <span
                className={[
                  "text-xs font-inter transition-colors duration-300",
                  isActive ? "text-neutral-300" : isComplete ? "text-indigo-400/60" : "text-neutral-600",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={[
                  "w-8 md:w-12 h-px mx-2.5 transition-colors duration-300",
                  step.number < currentStep ? "bg-indigo-500/30" : "bg-neutral-800",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
