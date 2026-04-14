import { ReactNode } from "react";
import { Card } from "@/components/Card";
import { useCountUp } from "./useCountUp";

interface StatCardProps {
  icon: ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

export const StatCard = ({ icon, value, suffix = "+", label }: StatCardProps) => {
  const { ref, display } = useCountUp(value);

  return (
    <Card variant="gradient" padding="md" className="min-h-[180px]" innerClassName="items-center justify-center text-center gap-3">
      <div className="text-indigo-400">{icon}</div>
      <span
        ref={ref}
        className="text-[22px] sm:text-[32px] md:text-[44px] font-medium tracking-[-0.44px] leading-tight text-white font-inter"
      >
        {display}
        {suffix}
      </span>
      <p className="text-violet-100/70 text-sm md:text-base tracking-[-0.32px] font-inter">
        {label}
      </p>
    </Card>
  );
};
