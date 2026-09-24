import { BenefitCard } from "@/components/BenefitCard";
import { FadeIn } from "@/components/FadeIn";

const mobileIconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><rect x='7' y='2' width='10' height='20' rx='2'/><line x1='11' y1='18' x2='13' y2='18'/></svg>`;
const mobileIconDataUri = `data:image/svg+xml,${encodeURIComponent(mobileIconSvg)}`;

const benefits = [
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-1.svg",
    title: "Prontuário Compartilhado",
    description:
      "Cada especialista da sua equipe registra no mesmo prontuário do paciente. O que um profissional documenta, todos os outros enxergam. Sem cópias, sem retrabalho, sem informação perdida.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-9.svg",
    title: "Agenda Multiprofissional",
    description:
      "Visualize os horários de toda a equipe em uma única tela. Agende o mesmo paciente para diferentes especialidades no mesmo dia sem risco de conflito, com lembretes automáticos via WhatsApp.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-1.svg",
    title: "Evolução Integrada",
    description:
      "Cada profissional registra a sua evolução e todos têm acesso ao histórico completo. A progressão do paciente é documentada de forma contínua, por toda a equipe, dentro do mesmo sistema.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-3.svg",
    title: "Dashboard & Relatórios",
    description:
      "Acompanhe a ocupação de cada especialidade, o volume de atendimentos por profissional e a evolução clínica dos pacientes. Decisões baseadas em dados reais da sua clínica.",
  },
  {
    icon: mobileIconDataUri,
    title: "Funciona em Qualquer Aparelho",
    description:
      "Computador, celular ou tablet: não importa qual. Veja a agenda, registre uma evolução ou consulte o histórico do paciente de onde você estiver.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-5.svg",
    title: "Assinatura Digital",
    description:
      "Cada profissional assina laudos e evoluções com seu próprio certificado digital. Documentos com validade jurídica, sem papel, sem deslocamento. Conformidade garantida para toda a equipe.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-6.svg",
    title: "Gestão de Convênios",
    description:
      "Cadastre convênios e vincule-os diretamente aos atendimentos de cada especialidade. Controle de carência, registro ANS e faturamento por profissional sem planilha extra.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-7.svg",
    title: "Controle de Permissões",
    description:
      "Configure o que cada usuário pode ver e editar. O recepcionista agenda mas não acessa prontuário; o profissional vê seus pacientes; o gestor enxerga tudo. Cada um no seu escopo.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-8.svg",
    title: "Relatórios de Receita",
    description:
      "Acompanhe o faturamento por especialidade, por profissional e por período. Identifique quais áreas crescem e onde há gargalos, sem precisar montar planilha no fim do mês.",
  },
];

export const BenefitsList = () => {
  return (
    <div className="relative content-center items-center flex flex-col shrink-0 flex-wrap h-min justify-start gap-6 w-full md:content-start md:items-start md:grid md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <FadeIn key={benefit.title} direction="up" delay={0.1 * index}>
          <div className="w-full h-full z-[2]">
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              className="h-full"
            />
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
