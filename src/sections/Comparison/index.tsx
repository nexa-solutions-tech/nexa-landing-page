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
      <SectionContainer>
        <FadeIn direction="up">
          <SectionHeader
            badge={<ComparisonHeader />}
            title="Nexa Clinic vs. sistemas genéricos"
            description="Sistemas genéricos tratam cada profissional como uma agenda isolada. Na reabilitação multidisciplinar, isso não funciona."
            maxDescriptionWidth="none"
            className="z-[3]"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <ComparisonTable />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="default" />
    </Section>
  );
};