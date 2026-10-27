import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const AIEfficiencyHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>ORGANIZAÇÃO</SectionBadge>}
      title="Agenda Sempre em Dia"
      description="Toda a equipe acompanha os agendamentos no mesmo lugar, com o status de cada atendimento visível para todos os profissionais"
    />
  );
};