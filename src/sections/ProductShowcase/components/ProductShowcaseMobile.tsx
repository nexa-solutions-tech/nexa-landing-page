import { FadeIn } from "@/components/FadeIn";
import mobileAgendaImg from "@/assets/screenshots/mobile-configurar-agenda.png";
import mobileAgendamentoImg from "@/assets/screenshots/mobile-novo-agendamento.png";

const mobileScreens = [
  {
    image: mobileAgendaImg,
    alt: "Tela de configuração de agenda do NexaClinic aberta no navegador de um celular",
  },
  {
    image: mobileAgendamentoImg,
    alt: "Tela de novo agendamento do NexaClinic aberta no navegador de um celular",
  },
];

export const ProductShowcaseMobile = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full z-[2]">
      <FadeIn direction="up" className="flex flex-col items-center gap-3 text-center max-w-[560px]">
        <h3 className="text-white text-2xl md:text-[28px] font-medium tracking-[-0.4px] leading-8 font-inter">
          Funciona em qualquer dispositivo
        </h3>
        <p className="text-violet-100/70 text-sm md:text-base tracking-[-0.2px] leading-6 font-inter">
          Computador, celular ou tablet: não importa qual. Sua equipe agenda, atende e registra evoluções de onde estiver, direto pelo navegador.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.15} className="relative flex flex-row items-end justify-center gap-4 md:gap-8 w-full">
        {mobileScreens.map((screen) => (
          <div key={screen.alt} className="relative w-[42%] max-w-[260px]">
            <img
              src={screen.image}
              alt={screen.alt}
              loading="lazy"
              className="relative z-[2] w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
        ))}
        {/* glow atrás dos aparelhos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(50%_50%,rgba(41,52,255,0.35)_0%,rgba(0,0,0,0)_100%)] -z-[1] pointer-events-none" />
      </FadeIn>
    </div>
  );
};
