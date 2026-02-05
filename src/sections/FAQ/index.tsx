import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQHeader } from "@/sections/FAQ/components/FAQHeader";
import { FAQList } from "@/sections/FAQ/components/FAQList";

export const FAQ = () => {
  return (
    <Section>
      <SectionContainer className="z-[2]">
        <FadeIn direction="up">
          <SectionHeader
            badge={<FAQHeader />}
            title="Perguntas Frequentes"
            description="Tire suas dúvidas e conheça nossa plataforma"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <FAQList />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
    </Section>
  );
};