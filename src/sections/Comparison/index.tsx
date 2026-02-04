    import { ComparisonHeader } from "@/sections/Comparison/components/ComparisonHeader";
import { ComparisonTable } from "@/sections/Comparison/components/ComparisonTable";
import { FadeIn } from "@/components/FadeIn";

export const Comparison = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-start gap-y-11 w-full px-[18px] py-20 rounded-tr-2xl rounded-bl-2xl md:px-10 md:py-[100px] md:rounded-tr-[48px] md:rounded-bl-[48px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full z-[2] overflow-hidden">
        <FadeIn direction="up" className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-3 w-full z-[1]">
          <ComparisonHeader />
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <h2 className="text-white text-[32px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[38.4px] break-words text-center font-inter md:text-[44px] md:tracking-[-0.44px] md:leading-[52.8px]">
              Why LanX Stands Out
            </h2>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-none break-words w-full md:max-w-[440px]">
            <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter">
              See how we compare against others in performance, growth
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <ComparisonTable />
        </FadeIn>
      </div>
      <div className="absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] top-0 md:w-screen"></div>
      <div className="absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-249px] box-border caret-transparent shrink-0 h-[378px] left-[calc(50%_-_300px)] rotate-[-12.999997801129437deg] w-[600px] z-[1] rounded-[10px] md:h-[499px] md:left-[calc(50%_-_396.5px)] md:w-[793px]"></div>
    </section>
  );
};