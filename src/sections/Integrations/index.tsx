import { FadeIn } from "@/components/FadeIn";
import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { LightRays } from "@/components/LightRays";
import { Section } from "@/components/Section";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { IntegrationsHeader } from "@/sections/Integrations/components/IntegrationsHeader";
import { IntegrationsList } from "@/sections/Integrations/components/IntegrationsList";

export const Integrations = () => {
  return (
    <Section>
      <SectionContainer>
        <FadeIn direction="up">
          <SectionHeader
            badge={<IntegrationsHeader />}
            title="Integrações Completas"
            description="Conecte com suas ferramentas favoritas para otimizar fluxos de trabalho"
            className="z-[3]"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <IntegrationsList />
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" className="bottom-[-289px]" />
      <LightRays topOffset="-637px" />
    </Section>
  );
};
