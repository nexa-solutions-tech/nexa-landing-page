import { Button } from "@/components/Button";

interface CTAButtonProps {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const CTAButton = ({
  href = "https://framer.link/DX0edsv",
  children = "Começar Agora",
  variant = "secondary",
}: CTAButtonProps) => {
  return (
    <Button href={href} variant={variant}>
      {children}
    </Button>
  );
};
