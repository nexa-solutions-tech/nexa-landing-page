import { FadeIn } from "@/components/FadeIn";

export const HeroHeading = () => {
  return (
    <FadeIn direction="up" delay={0.1} className="relative flex flex-col w-full">
      <h1 className="text-white text-4xl font-medium leading-[43.2px] text-center font-poppins md:text-[64px] md:leading-[70.4px]">
        <span className="text-4xl bg-clip-text bg-gradient-to-t from-white/70 to-white inline-block leading-[43.2px] -m-[1.8px] p-[1.8px] md:text-[64px] md:leading-[70.4px] md:-m-[6.4px] md:p-[6.4px]">
          A plataforma completa para a gestão da sua clínica
        </span>
      </h1>
    </FadeIn>
  );
};