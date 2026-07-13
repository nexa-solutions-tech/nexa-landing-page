import { FadeIn } from "@/components/FadeIn";

export const HeroDescription = () => {
  return (
    <FadeIn
      direction="up"
      delay={0.2}
      className="relative flex flex-col max-w-[540px] w-full"
    >
      <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-center font-inter">
        Gerencie agendamentos, prontuários eletrônicos, evolução de pacientes e
        relatórios em um só lugar. Simplifique sua rotina e foque no que
        importa: cuidar dos seus pacientes.
      </p>
    </FadeIn>
  );
};
