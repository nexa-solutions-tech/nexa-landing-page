import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  gap?: "sm" | "md" | "lg";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-[800px]",
  lg: "max-w-[1120px]",
  xl: "max-w-[1200px]",
};

const gapClasses = {
  sm: "gap-x-3 gap-y-3",
  md: "gap-x-6 gap-y-6",
  lg: "gap-x-11 gap-y-11",
};

export const SectionContainer = ({
  children,
  className = "",
  maxWidth = "xl",
  gap = "lg",
}: SectionContainerProps) => {
  return (
    <div
      className={`relative content-center items-center box-border caret-transparent flex flex-col shrink-0 flex-wrap h-min justify-start w-full ${maxWidthClasses[maxWidth]} ${gapClasses[gap]} ${className}`}
    >
      {children}
    </div>
  );
};
