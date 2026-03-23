import { Button } from "@/components/Button";

export const CTAButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full">
      <Button href="/cadastro" variant="primary">
        Começar Gratuitamente
      </Button>
      <Button href="./contact" variant="secondary">
        Agendar Demonstração
      </Button>
    </div>
  );
};