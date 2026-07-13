import type { LucideIcon } from "lucide-react";

interface IconTagProps {
  icon: string | LucideIcon;
  iconAlt?: string;
  children: string;
  className?: string;
}

export const IconTag = ({
  icon,
  iconAlt = "Icon",
  children,
  className = "",
}: IconTagProps) => {
  const Icon = typeof icon === "string" ? null : icon;

  return (
    <div className={`relative box-border caret-transparent shrink-0 ${className}`}>
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex h-min justify-start gap-y-2.5 w-min overflow-hidden">
        <div className="relative box-border caret-transparent shrink-0 h-[25px] w-[25px]">
          <div className="box-border caret-transparent contents">
            {Icon ? (
              <Icon className="text-indigo-400 inline-block shrink-0 h-full w-full" strokeWidth={1.75} />
            ) : (
              <img
                src={icon as string}
                alt={iconAlt}
                className="text-indigo-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
              />
            )}
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
          <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
