import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonHeader } from "@/sections/Comparison/components/ComparisonHeader";
import { ComparisonTable } from "@/sections/Comparison/components/ComparisonTable";

export const Comparison = () => {
  return (
    <Section className="justify-start rounded-tr-2xl rounded-bl-2xl md:rounded-tr-[48px] md:rounded-bl-[48px]">
      <SectionContainer gap="lg" className="z-[2] overflow-hidden justify-center flex-nowrap">
        <FadeIn direction="up">
          <SectionHeader
            badge={<ComparisonHeader />}
            title="Por que o FisioClinic se Destaca"
            description="Veja como nos comparamos em performance e crescimento"
            maxDescriptionWidth="none"
            className="z-[1]"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <ComparisonTable />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
    </Section>
  );
};