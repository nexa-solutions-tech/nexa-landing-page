import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { BenefitsCarousel } from "@/sections/BenefitsSection/components/BenefitsCarousel";
import { BenefitsHeader } from "@/sections/BenefitsSection/components/BenefitsHeader";
import { BenefitsList } from "@/sections/BenefitsSection/components/BenefitsList";

export const BenefitsSection = () => {
  return (
    <Section id="features">
      <SectionContainer>
        <FadeIn direction="up">
          <BenefitsHeader />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <BenefitsList />
        </FadeIn>
        <FadeIn direction="up" delay={0.4} fullWidth>
          <BenefitsCarousel />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
      <LightRays />
    </Section>
  );
};
