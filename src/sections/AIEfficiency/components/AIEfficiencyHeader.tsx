import { SectionBadge } from "@/components/SectionBadge";
import { SectionHeader } from "@/components/SectionHeader";

export const AIEfficiencyHeader = () => {
  return (
    <SectionHeader
      badge={<SectionBadge>AUTOMAÇÃO INTELIGENTE</SectionBadge>}
      title="Nunca Perca um Agendamento"
      description="Lembretes automáticos, confirmações via WhatsApp e gestão inteligente de pacientes"
    />
  );
};