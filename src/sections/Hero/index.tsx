import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroCTAButtons } from "@/sections/Hero/components/HeroCTAButtons";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroLogos } from "@/sections/Hero/components/HeroLogos";
import type { LucideIcon } from "lucide-react";
import { Award, BarChart3, BrainCircuit, TrendingUp } from "lucide-react";


interface HighlightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  glowColor: string;
  stat: string;
  statLabel: string;
}

const HighlightCard = ({ title, description, icon: Icon, iconColor, glowColor, stat, statLabel }: HighlightCardProps) => (
  <div className="relative flex flex-col items-start gap-5 w-full p-7 rounded-2xl md:basis-0 md:grow md:min-w-[240px] overflow-hidden group cursor-default">
    {/* Background */}
    <div className="absolute inset-0 bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] rounded-2xl border border-neutral-800 group-hover:border-neutral-600 transition-colors duration-300" />

    {/* Glow top */}
    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px ${glowColor} opacity-60`} />

    {/* Icon container */}
    <div className="relative z-[2] flex items-center justify-center">
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl border border-neutral-700 bg-neutral-900 ${iconColor}`}>
        <Icon size={22} strokeWidth={1.5} />
      </div>
    </div>

    {/* Text */}
    <div className="relative flex flex-col gap-2 w-full z-[2]">
      <h3 className="text-white text-base font-semibold tracking-[-0.3px] leading-6 font-inter">
        {title}
      </h3>
      <p className="text-neutral-400 text-sm tracking-[-0.2px] leading-[22px] text-left font-inter">
        {description}
      </p>
    </div>

    {/* Stat badge */}
    <div className="relative z-[2] flex items-baseline gap-1.5 mt-auto pt-2 border-t border-neutral-800 w-full">
      <span className={`text-lg font-bold font-inter ${iconColor}`}>{stat}</span>
      <span className="text-neutral-500 text-xs font-inter">{statLabel}</span>
    </div>
  </div>
);

const highlightCards = [
  {
    title: "Destaque-se",
    description: "Dê destaque à sua clínica com um perfil premium e conecte-se com os melhores profissionais da saúde.",
    icon: Award,
    iconColor: "text-yellow-400",
    glowColor: "bg-gradient-to-r from-transparent via-yellow-500 to-transparent",
    stat: "3x",
    statLabel: "mais visibilidade",
  },
  {
    title: "Gestão Inteligente",
    description: "Automatize agendamentos e prontuários com análise de desempenho em tempo real e monitoramento de receitas.",
    icon: BrainCircuit,
    iconColor: "text-violet-400",
    glowColor: "bg-gradient-to-r from-transparent via-violet-500 to-transparent",
    stat: "80%",
    statLabel: "menos tarefas manuais",
  },
  {
    title: "Decisões por Dados",
    description: "Seu guia analítico para tomar decisões estratégicas e melhorar a qualidade do atendimento na sua clínica.",
    icon: BarChart3,
    iconColor: "text-blue-400",
    glowColor: "bg-gradient-to-r from-transparent via-blue-500 to-transparent",
    stat: "100+",
    statLabel: "métricas em tempo real",
  },
  {
    title: "Aumente o Faturamento",
    description: "Converta mais pacientes com estratégias direcionadas, lembretes automáticos e ferramentas de marketing.",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    glowColor: "bg-gradient-to-r from-transparent via-emerald-500 to-transparent",
    stat: "+40%",
    statLabel: "de receita média",
  },
];

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-y-11 bg-[radial-gradient(80%_25%_at_50%_7.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] w-full overflow-hidden pt-[120px] pb-20 px-[18px] md:pt-40 md:pb-[100px] md:px-10">
      <div className="relative flex flex-col items-center justify-center gap-6 max-w-[1000px] w-full z-[3]">
        <div className="relative flex flex-col items-center justify-center gap-6 max-w-[720px] w-full">
          <HeroContent />
          <HeroHeading />
          <HeroDescription />
          <HeroCTAButtons />
        </div>
        <HeroLogos />
      </div>

      <section className="relative flex flex-col items-center justify-center gap-6 max-w-[1200px] w-full z-[2] scroll-mt-[100px]">
        <div className="relative flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-6 w-full">
          {highlightCards.map((card) => (
            <HighlightCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </section>
  );
};
