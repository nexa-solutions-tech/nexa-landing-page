import { FadeIn } from "@/components/FadeIn";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { CTAButtons } from "@/sections/CTA/components/CTAButtons";
import { CTAHeader } from "@/sections/CTA/components/CTAHeader";

const PREVIEW_IMAGE_URL = "https://c.animaapp.com/mkvwf206SqHHjG/assets/25.png";

const PreviewBackground = () => (
  <div className="absolute bg-blue-950 bottom-[-242px] flex h-[640px] justify-center w-[925px] overflow-hidden rounded-3xl left-[57px] md:left-[calc(53.3929%_-_462.5px)]" />
);

const PreviewImage = () => (
  <div className="absolute bottom-[-241px] flex h-[640px] justify-center w-[918px] overflow-hidden rounded-3xl left-[60px] md:left-[calc(53.3929%_-_459px)]">
    <div className="relative grow h-full w-px">
      <img
        src={PREVIEW_IMAGE_URL}
        alt="NexaClinic Preview"
        className="absolute inset-0 h-full object-cover w-full"
      />
    </div>
  </div>
);

const BottomGradient = () => (
  <div className="absolute bg-gradient-to-b from-transparent via-transparent to-black h-[397px] z-[2] bottom-0 inset-x-0" />
);

export const CTA = () => {
  return (
    <Section padding="top-only">
      <SectionContainer>
        <FadeIn direction="up" className="z-[3] md:pr-5 max-w-screen-sm flex flex-col gap-4">
          <CTAHeader />
          <CTAButtons />
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="relative h-[370px] w-full">
          <PreviewBackground />
          <PreviewImage />
        </FadeIn>
      </SectionContainer>

      <BottomGradient />
      <GradientLine />
      <LightRays topOffset="-637px" />
    </Section>
  );
};