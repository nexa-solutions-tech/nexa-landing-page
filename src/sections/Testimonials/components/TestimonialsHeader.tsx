import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const TestimonialsHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>DEPOIMENTOS</SectionBadge>}
      title="Amado por profissionais da saúde"
      description="Veja o que profissionais de todo o Brasil estão dizendo sobre nós"
    />
  );
};
