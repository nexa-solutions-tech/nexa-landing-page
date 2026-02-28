import { GradientBlob } from "@/components/GradientBlob";
import { GradientLine } from "@/components/GradientLine";
import { Section } from "@/components/Section";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionContainer } from "@/components/SectionContainer";
import { FadeIn } from "@/components/FadeIn";

export const FoundersNote = () => {
  return (
    <Section>
      <SectionContainer gap="sm">
        <FadeIn direction="up">
          <div className="relative z-[3] flex justify-center">
            <SectionBadge>NOSSO PROPÓSITO</SectionBadge>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <div className="relative flex flex-col items-center max-w-screen-sm gap-y-6 w-full z-[2]">
            <h3 className="text-white text-2xl tracking-[-0.72px] leading-[33.6px] text-center font-inter md:text-[32px] md:tracking-[-0.96px] md:leading-[44.8px]">
              "Sabemos que você não estudou anos para ficar preso em
              planilhas.{" "}
              <span className="text-indigo-400">
                Criamos o NexaClinic para que você volte a focar no que
                realmente importa: seus pacientes.
              </span>
              "
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden shadow-[rgb(255,255,255)_0px_0px_0px_2px]">
                <img
                  src="https://c.animaapp.com/mkvwf206SqHHjG/assets/29.jpg"
                  alt="Foto do fundador"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-violet-100/70 text-base tracking-[-0.32px] leading-[25.6px] font-inter whitespace-nowrap">
                Equipe NexaClinic
              </p>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
      <GradientLine />
      <GradientBlob variant="rotated" />
    </Section>
  );
};
