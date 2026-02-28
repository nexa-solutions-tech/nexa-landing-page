import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const BenefitsHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>BENEFÍCIOS</SectionBadge>}
      title="Por que escolher o NexaClinic?"
      description="Ferramentas inovadoras e funcionalidades completas para transformar a gestão da sua clínica"
      className="z-[3]"
    />
  );
};