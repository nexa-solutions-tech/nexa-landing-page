import { AIEfficiencyHeader } from "@/sections/AIEfficiency/components/AIEfficiencyHeader";
import { AIEfficiencyFeatures } from "@/sections/AIEfficiency/components/AIEfficiencyFeatures";
import { AIEfficiencyTags } from "@/sections/AIEfficiency/components/AIEfficiencyTags";
import { AIEfficiencyOrb } from "@/sections/AIEfficiency/components/AIEfficiencyOrb";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";

export const AIEfficiency = () => {
  return (
    <Section gap="sm">
      {/* Bottom gradient overlay */}
      <div className="absolute backdrop-blur-[6px] bg-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_71%)] shrink-0 h-[1309px] z-[3] overflow-hidden bottom-0 inset-x-0 md:h-[568px]" />

      {/* Spacer — visible only on md+ */}
      <div className="hidden md:block md:relative md:h-[83px] md:w-full md:overflow-hidden" />

      <SectionContainer className="z-[4]">
        <FadeIn direction="up">
          <AIEfficiencyHeader />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <AIEfficiencyFeatures />
        </FadeIn>
        <FadeIn direction="up" delay={0.4} fullWidth>
          <AIEfficiencyTags />
        </FadeIn>
      </SectionContainer>

      <GradientLine />
      <LightRays topOffset="-637px" />
      <AIEfficiencyOrb />

      {/* Bottom gradient blob */}
      <div className="absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-247px] shrink-0 h-[378px] left-[calc(51.5%_-_300px)] w-[600px] z-[3] rounded-[10px] md:h-[483px] md:left-[calc(51.5%_-_396.5px)] md:w-[793px]" />
    </Section>
  );
};
