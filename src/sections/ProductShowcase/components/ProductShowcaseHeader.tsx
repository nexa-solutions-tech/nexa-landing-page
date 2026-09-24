import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const ProductShowcaseHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>VEJA NA PRÁTICA</SectionBadge>}
      title="O sistema por dentro"
      description="Uma agenda que organiza toda a equipe e um histórico onde cada especialidade registra sua evolução, no mesmo lugar."
      maxDescriptionWidth="560px"
      className="z-[3]"
    />
  );
};
