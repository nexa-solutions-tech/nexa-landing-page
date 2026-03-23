import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: 1 | 2;
}

const steps = [
  { number: 1, label: "Sua Clínica" },
  { number: 2, label: "Seu Acesso" },
];

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-0 w-full mb-6">
      {steps.map((step, index) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;

        return (
          <div key={step.number} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={[
                  "flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold font-inter transition-all duration-300",
                  isCompleted
                    ? "bg-indigo-500 text-white"
                    : isActive
                    ? "bg-indigo-600 text-white ring-4 ring-indigo-600/20"
                    : "bg-neutral-800 text-neutral-500",
                ].join(" ")}
              >
                {isCompleted ? <Check size={14} /> : step.number}
              </div>
              <span
                className={[
                  "text-xs font-inter whitespace-nowrap transition-colors duration-300",
                  isActive ? "text-white font-medium" : "text-neutral-500",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line (between steps) */}
            {index < steps.length - 1 && (
              <div
                className={[
                  "h-px w-16 mx-3 mb-[18px] transition-all duration-300",
                  isCompleted ? "bg-indigo-500" : "bg-neutral-700",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
