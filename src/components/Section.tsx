import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gap?: "sm" | "md" | "lg";
  padding?: "default" | "top-only" | "none";
}

const gapClasses = {
  sm: "gap-x-6 gap-y-6",
  md: "gap-x-11 gap-y-11",
  lg: "gap-x-14 gap-y-14",
};

const paddingClasses = {
  default: "px-[18px] py-20 md:px-10 md:py-[100px]",
  "top-only": "pt-20 px-[18px] md:pt-[100px] md:px-10",
  none: "",
};

export const Section = ({
  children,
  className = "",
  id,
  gap = "md",
  padding = "default",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative content-center items-center box-border caret-transparent flex flex-col shrink-0 h-min justify-center w-full overflow-hidden ${gapClasses[gap]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
};
