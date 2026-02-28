import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCards } from "@/sections/Pricing/components/PricingCards";
import { PricingHeader } from "@/sections/Pricing/components/PricingHeader";
import { PricingToggle } from "@/sections/Pricing/components/PricingToggle";

export const Pricing = () => {
  return (
    <Section id="pricing">
      <SectionContainer>
        <FadeIn direction="up">
          <SectionHeader
            badge={<PricingHeader />}
            title="Planos Flexíveis"
            description="Escolha o plano ideal para sua clínica e desbloqueie todo o potencial da nossa plataforma"
            className="z-[3]"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <PricingToggle />
        </FadeIn>
        <FadeIn direction="up" delay={0.3} fullWidth>
          <PricingCards />
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col items-center gap-3 z-[3]">
            <div className="flex items-center gap-2 bg-[radial-gradient(96%_341%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] border border-indigo-500/30 rounded-full px-5 py-3">
              <svg
                className="w-5 h-5 text-indigo-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-violet-100/90 text-sm font-inter tracking-[-0.28px]">
                <span className="text-white font-semibold">14 dias grátis</span>
                {" "}para testar — sem cartão de crédito, cancele quando quiser
              </span>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
      <LightRays />
    </Section>
  );
};
