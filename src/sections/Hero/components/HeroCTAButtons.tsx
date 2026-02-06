    import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const HeroCTAButtons = () => {
  return (
    <FadeIn
      direction="up"
      delay={0.3}
      className="relative flex flex-wrap items-center justify-center gap-4 w-full"
    >
      <Button href="https://framer.link/DX0edsv" variant="primary">
        Começar Agora
      </Button>
      <Button href="./contact" variant="secondary">
        Agendar Demonstração
      </Button>
    </FadeIn>
  );
};