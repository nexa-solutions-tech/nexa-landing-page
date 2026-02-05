interface GradientLineProps {
  className?: string;
  position?: "top" | "bottom";
}

export const GradientLine = ({
  className = "",
  position = "top",
}: GradientLineProps) => {
  const positionClass = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={`absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] ${positionClass} md:w-screen ${className}`}
    />
  );
};
