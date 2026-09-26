import { FadeIn } from "@/components/FadeIn";

export const HeroDescription = () => {
  return (
    <FadeIn
      direction="up"
      delay={0.2}
      className="relative flex flex-col max-w-[580px] w-full"
    >
      <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] text-center font-inter">
        Na reabilitação multidisciplinar, o mesmo paciente passa por diferentes especialidades ao longo do tratamento. O Nexa Clinic integra prontuários, agendas e evoluções de toda a sua equipe, para que cada profissional saiba exatamente o que o anterior registrou.
      </p>
    </FadeIn>
  );
};
