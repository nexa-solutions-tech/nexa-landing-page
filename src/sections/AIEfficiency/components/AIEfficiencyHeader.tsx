import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const AIEfficiencyHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>AUTOMAÇÃO</SectionBadge>}
      title="Nunca Perca um Agendamento"
      description="Lembretes e confirmações automáticas via WhatsApp reduzem faltas, enquanto toda a equipe acompanha os pacientes em tempo real"
    />
  );
};