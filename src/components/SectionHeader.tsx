import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  maxDescriptionWidth?: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  maxDescriptionWidth = "440px",
}: SectionHeaderProps) => {
  return (
    <div
      className={`relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-3 w-full ${className}`}
    >
      {badge}
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
        <h2
          className={`text-white text-[32px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[38.4px] break-words text-center font-inter md:text-[44px] md:tracking-[-0.44px] md:leading-[52.8px] ${titleClassName}`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <div
          className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full"
          style={{ maxWidth: maxDescriptionWidth }}
        >
          <p
            className={`text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter ${descriptionClassName}`}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
