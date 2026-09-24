import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { ProductShowcaseHeader } from "@/sections/ProductShowcase/components/ProductShowcaseHeader";
import { ProductShowcaseGallery } from "@/sections/ProductShowcase/components/ProductShowcaseGallery";
import { ProductShowcaseMobile } from "@/sections/ProductShowcase/components/ProductShowcaseMobile";

export const ProductShowcase = () => {
  return (
    <Section id="product">
      <SectionContainer>
        <FadeIn direction="up">
          <ProductShowcaseHeader />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <ProductShowcaseGallery />
        </FadeIn>
        <FadeIn direction="up" delay={0.3} fullWidth>
          <ProductShowcaseMobile />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="default" />
      <LightRays />
    </Section>
  );
};
