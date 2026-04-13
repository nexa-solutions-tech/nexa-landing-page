import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const CTAHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>O QUE VOCÊ ESTÁ ESPERANDO</SectionBadge>}
      title="Transforme sua Clínica Agora"
      description="Comece hoje mesmo a modernizar sua clínica com o sistema de gestão mais completo do mercado."
      maxDescriptionWidth="none"
    />
  );
};