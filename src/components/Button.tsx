type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-700 shadow-[rgba(17,0,255,0.5)_0px_8px_40px_0px,rgba(255,255,255,0)_0px_0px_10px_1px_inset,rgba(0,85,255,0.12)_0px_0px_0px_1px] after:border-2 after:border-solid after:border-white/20",
  secondary:
    "backdrop-blur-[2.5px] bg-blue-950 shadow-[rgba(255,255,255,0)_0px_0px_10px_1px_inset,rgba(0,85,255,0.12)_0px_0px_0px_1px]",
};

const baseStyles =
  "relative text-white text-base font-inter tracking-[-0.32px] leading-[25.6px] flex items-center justify-center gap-2.5 px-[18px] py-2.5 rounded-[10px] overflow-hidden whitespace-nowrap transition-all hover:opacity-90 after:absolute after:inset-0 after:rounded-[10px] after:pointer-events-none";

export const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};
