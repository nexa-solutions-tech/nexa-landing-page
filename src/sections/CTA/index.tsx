import { FadeIn } from "@/components/FadeIn";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { CTAButtons } from "@/sections/CTA/components/CTAButtons";
import { CTAHeader } from "@/sections/CTA/components/CTAHeader";

export const CTA = () => {
  return (
    <Section padding="top-only">
      <SectionContainer>
        <FadeIn direction="up" className="z-[3] pr-0 md:pr-5 max-w-screen-sm">
          <CTAHeader />
          <CTAButtons />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="relative h-[370px] w-full">
          <div className="absolute content-center items-center bg-blue-950 bottom-[-242px] gap-x-6 flex shrink-0 h-[640px] justify-center gap-y-6 w-[925px] overflow-hidden rounded-3xl left-[57px] md:left-[calc(53.3929%_-_462.5px)]"></div>
          <div className="absolute content-center items-center bottom-[-241px] gap-x-6 flex shrink-0 h-[640px] justify-center gap-y-6 w-[918px] overflow-hidden rounded-3xl left-[60px] md:left-[calc(53.3929%_-_459px)]">
            <div className="relative basis-0 grow shrink-0 h-full w-px">
              <div className="absolute inset-0">
                <img
                  src="https://c.animaapp.com/mkvwf206SqHHjG/assets/25.png"
                  alt=""
                  className="aspect-[auto_2880_/_1980] h-full object-cover w-full"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0)_55%,rgb(0,0,0)_100%)] shrink-0 h-[397px] z-[2] bottom-0 inset-x-0"></div>
      <GradientLine />
      <LightRays topOffset="-637px" />
    </Section>
  );
};