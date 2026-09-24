import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const TestimonialsHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>DEPOIMENTOS</SectionBadge>}
      title="O que dizem os profissionais de reabilitação"
      description="Profissionais de diferentes especialidades e gestores de clínicas multidisciplinares em todo o Brasil"
    />
  );
};
