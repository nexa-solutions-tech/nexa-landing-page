import { BenefitCard } from "@/components/BenefitCard";
import { FadeIn } from "@/components/FadeIn";

const benefits = [
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-9.svg",
    title: "Agenda Moderna",
    description:
      "Agenda profissional com filtros avançados por profissional, especialidade e horário. Visualize e gerencie todos os atendimentos em tempo real.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-4.svg",
    title: "Avaliações & Evoluções",
    description:
      "Registre avaliações completas e acompanhe a evolução dos pacientes com histórico detalhado. Documentação clínica organizada e acessível.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-3.svg",
    title: "Dashboard & Relatórios",
    description:
      "Painéis visuais com métricas de pacientes, atendimentos e produtividade dos profissionais. Tome decisões baseadas em dados reais.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-8.svg",
    title: "Módulo Financeiro",
    description:
      "Controle completo de receitas, despesas e faturamento. Gestão de pagamentos, comissões e relatórios financeiros detalhados.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-1.svg",
    title: "Cadastros Completos",
    description:
      "Gerencie pacientes, profissionais, procedimentos, convênios, feriados e documentos em um só lugar. Tudo organizado e fácil de encontrar.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-5.svg",
    title: "Assinatura Digital",
    description:
      "Assinatura eletrônica com certificados .pfx para profissionais. Documentos com validade jurídica e conformidade com normas do setor.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-6.svg",
    title: "Gestão de Convênios",
    description:
      "Cadastre convênios, tabelas de preços e regras específicas. Automatize o faturamento e acompanhe repasses de forma simplificada.",
  },
  {
    icon: "https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-7.svg",
    title: "Controle de Permissões",
    description:
      "Configure níveis de acesso personalizados para cada usuário. Defina quem pode ver, editar ou gerenciar cada área do sistema.",
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