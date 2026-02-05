import { Card } from "./Card";

interface BenefitCardProps {
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
  className?: string;
}

export const BenefitCard = ({
  icon,
  iconAlt = "Icon",
  title,
  description,
  className = "",
}: BenefitCardProps) => {
  return (
    <Card
      className={`min-h-[268px] ${className}`}
      innerClassName="gap-y-6"
      variant="gradient"
      padding="lg"
    >
      {/* Icon container with gradient border */}
      <div className="relative w-[55px] h-[55px] min-w-[55px] min-h-[55px] shrink-0 rounded-lg">
        <div className="absolute inset-[1.5px] flex items-center justify-center bg-black z-[2] rounded-lg">
          <img
            src={icon}
            alt={iconAlt}
            className="w-[35px] h-[35px] min-w-[35px] min-h-[35px] object-contain"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute bg-[linear-gradient(303deg,rgb(41,52,255)_0%,rgba(171,171,171,0)_25%)] z-[1] rounded-lg inset-0"></div>
        <div className="absolute bg-[linear-gradient(140deg,rgb(41,52,255)_-4%,rgba(0,0,0,0)_25%)] z-[1] rounded-lg inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative content-start items-start flex flex-col shrink-0 h-min justify-center gap-y-4 w-full z-[2] overflow-hidden">
        <h3 className="text-white text-2xl font-medium tracking-[-0.48px] leading-7 text-left font-inter w-full">
          {title}
        </h3>
        <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-left font-inter w-full">
          {description}
        </p>
      </div>
    </Card>
  );
};
