    import { FadeIn } from "@/components/FadeIn";

export const HeroHeading = () => {
  return (
    <FadeIn direction="up" delay={0.1} className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
      <h1 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] break-words text-center font-poppins md:text-[64px] md:leading-[70.4px]">
        <span className="text-4xl bg-clip-text bg-[linear-gradient(0deg,rgba(230,236,255,0.7)_-74%,rgb(255,255,255)_123%)] box-border caret-transparent inline-block leading-[43.2px] break-words mt-[-1.8px] mr-[-1.8px] mb-[-1.8px] ml-[-1.8px] p-[1.8px] md:text-[64px] md:leading-[70.4px] md:mt-[-6.4px] md:mr-[-6.4px] md:mb-[-6.4px] md:ml-[-6.4px] md:p-[6.4px]">
          The best platform to grow your business
        </span>
      </h1>
    </FadeIn>
  );
};