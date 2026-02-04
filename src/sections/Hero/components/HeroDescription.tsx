import { FadeIn } from "@/components/FadeIn";

export const HeroDescription = () => {
  return (
    <FadeIn
      direction="up"
      delay={0.2}
      className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[540px] break-words w-full"
    >
      <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter">
        The most powerful tools to boost sales, hire the best people, and access
        exclusive market insights.
      </p>
    </FadeIn>
  );
};
