import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const BenefitsHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>FUNCIONALIDADES</SectionBadge>}
      title="Feito para o jeito que a reabilitação funciona"
      description="Não é uma agenda com campos a mais. É um sistema construído em torno do paciente multidisciplinar, onde todos os profissionais trabalham juntos no mesmo lugar."
      className="z-[3]"
    />
  );
};
