import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "gradient" | "dark";
  padding?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: {
    outer:
      "bg-[linear-gradient(136deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] p-px",
    inner: "bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]",
  },
  gradient: {
    outer:
      "bg-[linear-gradient(180deg,rgb(138,165,255)_-94%,rgb(0,0,0)_70%)] p-px",
    inner: "bg-[radial-gradient(96%_96%_at_49.3%_-25.1%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]",
  },
  dark: {
    outer: "bg-transparent",
    inner: "bg-[radial-gradient(96%_96%_at_16%_21.8%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)]",
  },
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = ({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  padding = "md",
}: CardProps) => {
  return (
    <div
      className={`relative content-start items-start box-border caret-transparent flex flex-col shrink-0 h-min justify-start w-full overflow-hidden rounded-2xl ${variantClasses[variant].outer} ${className}`}
    >
      <div
        className={`relative content-start items-start box-border caret-transparent flex flex-col basis-0 grow shrink-0 h-px justify-start w-full rounded-2xl ${variantClasses[variant].inner} ${paddingClasses[padding]} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
