import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsHeader } from "@/sections/Stats/components/StatsHeader";
import { StatsGrid } from "@/sections/Stats/components/StatsGrid";

export const Stats = () => {
  return (
    <Section id="stats">
      <SectionContainer>
        <FadeIn direction="up">
          <SectionHeader
            badge={<StatsHeader />}
            title="Números que Falam por Si"
            description="Milhares de clínicas já transformaram sua gestão com o FisioClinic"
            className="z-[3]"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <StatsGrid />
        </FadeIn>
        <FadeIn direction="up" delay={0.8}>
          <Button href="#pricing" variant="primary">
            Comece Agora Gratuitamente
          </Button>
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
      <LightRays />
    </Section>
  );
};
