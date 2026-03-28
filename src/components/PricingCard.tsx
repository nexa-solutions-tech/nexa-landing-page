const CHECK_ICON = "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-18.svg";

interface PricingFeatureProps {
  text: string;
}

const PricingFeature = ({ text }: PricingFeatureProps) => (
  <div className="hidden md:flex items-center gap-2 w-full">
    <div className="relative w-[22px] h-[22px] shrink-0 opacity-50">
      <img src={CHECK_ICON} alt="" className="w-full h-full" />
    </div>
    <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] font-inter flex-1">
      {text}
    </p>
  </div>
);

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  highlighted?: boolean;
  badge?: string;
}

export const PricingCard = ({
  name,
  price,
  period = "/ mês",
  features,
  ctaText = "Começar Agora",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
  highlighted = false,
  badge,
}: PricingCardProps) => {
  return (
    <div className="hidden md:flex relative basis-0 grow shrink-0 max-w-[440px] min-w-[280px] w-px">
      {/* Gradient border container */}
      <div
        className={`relative flex flex-col w-full overflow-hidden rounded-2xl p-px ${
          highlighted
            ? "bg-[linear-gradient(136deg,rgb(99,102,241)_0%,rgb(138,165,255)_50%,rgb(0,0,0)_100%)]"
            : "bg-[linear-gradient(212deg,rgb(138,165,255)_-98%,rgb(0,0,0)_53%)]"
        }`}
      >
        {/* Inner card */}
        <div className="relative flex flex-col w-full h-full rounded-2xl bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] p-6 gap-6">
          {/* Badge */}
          {badge && (
            <div className="absolute -top-px left-1/2 -translate-x-1/2">
              <div className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-b-lg">
                {badge}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col gap-4 w-full">
            <p className="text-white text-base tracking-[-0.32px] leading-[25.6px] font-inter">
              {name}
            </p>
            <div className="flex items-center gap-2">
              <h2 className="text-white text-[44px] font-medium tracking-[-0.44px] leading-[52.8px] font-inter">
                {price}
              </h2>
              <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] font-inter opacity-80">
                {period}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <a
              href={ctaHref}
              className={`flex items-center justify-center w-full px-[18px] py-2.5 rounded-[10px] backdrop-blur-[2.5px] overflow-hidden transition-all ${
                highlighted
                  ? "bg-indigo-600 hover:bg-indigo-500 shadow-[rgba(255,255,255,0.1)_0px_0px_10px_1px_inset,rgba(99,102,241,0.3)_0px_0px_0px_1px]"
                  : "bg-blue-950 hover:bg-blue-900 shadow-[rgba(255,255,255,0)_0px_0px_10px_1px_inset,rgba(0,85,255,0.12)_0px_0px_0px_1px]"
              }`}
            >
              <p className="text-white text-base tracking-[-0.32px] leading-[25.6px] font-inter">
                {ctaText}
              </p>
            </a>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="flex items-center justify-center w-full px-[18px] py-2 rounded-[10px] text-neutral-400 hover:text-white text-sm tracking-[-0.28px] leading-[22px] font-inter transition-colors duration-200"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4 w-full">
            <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] font-inter">
              Inclui:
            </p>
            {features.map((feature, index) => (
              <PricingFeature key={index} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
