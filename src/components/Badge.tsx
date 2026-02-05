import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: string;
  iconAlt?: string;
  className?: string;
}

export const Badge = ({
  children,
  icon,
  iconAlt = "Icon",
  className = "",
}: BadgeProps) => {
  return (
    <div
      className={`relative content-center items-center bg-[radial-gradient(96%_96%_at_49.3%_-25.1%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] box-border caret-transparent gap-x-1.5 flex shrink-0 h-min justify-center gap-y-1.5 px-3 py-1.5 rounded-[39px] ${className}`}
    >
      {icon && (
        <div className="relative box-border caret-transparent shrink-0 h-[15px] w-[15px]">
          <div className="box-border caret-transparent contents">
            <img
              src={icon}
              alt={iconAlt}
              className="text-indigo-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
            />
          </div>
        </div>
      )}
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-auto">
        <p className="text-violet-100/70 text-xs font-medium box-border caret-transparent tracking-[-0.12px] leading-[12px] break-words whitespace-nowrap font-inter">
          {children}
        </p>
      </div>
    </div>
  );
};
