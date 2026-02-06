import { Badge } from "@/components/Badge";
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
          <Badge
            icon="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-19.svg"
            className="max-w-[500px] px-4 py-3 rounded-[211px] z-[3]"
          >
            LanderX contributes 5% of subscription to the green life
          </Badge>
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
      <LightRays />
    </Section>
  );
};
