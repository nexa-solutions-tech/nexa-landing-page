import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const CTAHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>O QUE VOCÊ ESTÁ ESPERANDO</SectionBadge>}
      title="Sua equipe multidisciplinar merece um sistema à altura"
      description="14 dias grátis. Sem cartão de crédito. Configure sua equipe multidisciplinar em minutos."
      maxDescriptionWidth="none"
    />
  );
};