interface GradientBlobProps {
  className?: string;
  variant?: "default" | "rotated";
}

export const GradientBlob = ({
  className = "",
  variant = "default",
}: GradientBlobProps) => {
  const rotationClass =
    variant === "rotated" ? "rotate-[-12.999997801129437deg]" : "";

  return (
    <div
      className={`absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-249px] pointer-events-none h-[378px] left-[calc(50%_-_300px)] w-[600px] -z-10 rounded-[10px] md:h-[499px] md:left-[calc(50%_-_396.5px)] md:w-[793px] ${rotationClass} ${className}`}
    />
  );
};
