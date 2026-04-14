import { FadeIn } from "@/components/FadeIn";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { CTAButtons } from "@/sections/CTA/components/CTAButtons";
import { CTAHeader } from "@/sections/CTA/components/CTAHeader";

export const CTA = () => {
  return (
    <Section>
      <SectionContainer>
        <FadeIn direction="up" className="z-[3] md:pr-5 max-w-screen-sm flex flex-col gap-4">
          <CTAHeader />
          <CTAButtons />
        </FadeIn>
      </SectionContainer>

      <GradientLine />
      <LightRays topOffset="-637px" />
    </Section>
  );
};
