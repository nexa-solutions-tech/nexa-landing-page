import { FadeIn } from "@/components/FadeIn";
import { PricingHeader } from "@/sections/Pricing/components/PricingHeader";
import { PricingToggle } from "@/sections/Pricing/components/PricingToggle";

export const Pricing = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full overflow-hidden px-[18px] py-20 md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 flex-wrap h-min justify-start max-w-[1200px] gap-y-11 w-full">
        <FadeIn
          direction="up"
          className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-3 w-full z-[3]"
        >
          <PricingHeader />
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
            <h2 className="text-white text-[32px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[38.4px] break-words text-center font-inter md:text-[44px] md:tracking-[-0.44px] md:leading-[52.8px]">
              Planos Flexíveis
            </h2>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[440px] break-words w-full">
            <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter">
              Escolha o plano ideal para sua clínica e desbloqueie todo o potencial da nossa plataforma
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <PricingToggle />
        </FadeIn>
        <FadeIn
          direction="up"
          delay={0.4}
          className="relative content-center items-center bg-[radial-gradient(96%_96%_at_49.3%_-25.1%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 flex-wrap h-min justify-center max-w-[500px] gap-y-2.5 w-full z-[3] px-4 py-3 rounded-[211px] md:flex-row"
        >
          <div className="relative box-border caret-transparent shrink-0 h-[25px] w-[25px]">
            <div className="box-border caret-transparent contents">
              <img
                src="https://c.animaapp.com/mkvwf206SqHHjG/assets/icon-19.svg"
                alt="Icon"
                className="text-indigo-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
              />
            </div>
          </div>
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block basis-auto flex-row grow-0 shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-violet-100/70 md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                LanderX contributes 5% of subscription to the green life
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] top-0 md:w-screen"></div>
      <div className="absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-249px] box-border caret-transparent shrink-0 h-[378px] left-[calc(50%_-_300px)] rotate-[-12.999997801129437deg] w-[600px] z-[1] rounded-[10px] md:h-[499px] md:left-[calc(50%_-_396.5px)] md:w-[793px]"></div>
      <div className="[mask-image:radial-gradient(50%_109%,rgb(0,0,0)_0%,rgba(0,0,0,0.965)_0%,rgba(0,0,0,0)_96%)] absolute box-border caret-transparent blur-lg shrink-0 h-[1790px] left-[calc(50%_-_571px)] opacity-90 pointer-events-none top-[-728px] w-[1142px] z-[2] overflow-hidden">
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2072px] left-[calc(50%_-_20px)] opacity-[0.265005] top-[-352px] origin-[100%_0%] w-10 z-[1] overflow-hidden scale-[0.98705] md:opacity-[0.234495] md:scale-[0.90795]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.209552] top-[-352px] rotate-[25.000013859254793deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden scale-[0.7798499470391724] md:opacity-[0.207984] md:rotate-[25.00000539066602deg] md:scale-[0.7749497917368583]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.50958] top-[-352px] rotate-[11.000007220766994deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden scale-[0.9257995678876719] md:opacity-[0.285] md:rotate-[11.000007676071172deg] md:scale-[0.6500003538768268]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.42] top-[-352px] rotate-[-12.000012571476546deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.32] top-[-352px] rotate-[-24.000029347278506deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_25px)] opacity-[0.2223] top-[-352px] rotate-[-17.99998515225178deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.8186999627238297] md:opacity-[0.237] md:rotate-[-17.999972627187677deg] md:scale-[0.8529996484653438]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-[0.2223] top-[-342px] rotate-[-17.99998515225178deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.8186999627238297] right-[446px] md:opacity-[0.237] md:rotate-[-17.999972627187677deg] md:scale-[0.8529996484653438]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_25px)] opacity-[0.2223] top-[-362px] rotate-[-17.99998515225178deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.8186999627238297] md:opacity-[0.237] md:rotate-[-17.999972627187677deg] md:scale-[0.8529996484653438]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_10px)] opacity-[0.16485] top-[-352px] rotate-[-4.999999540265332deg] origin-[100%_0%] w-5 z-[1] overflow-hidden scale-[0.6846503006166287] md:opacity-[0.2514] md:rotate-[-5.0000024250423065deg] md:scale-[0.8865997831171006]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_10px)] opacity-[0.17985] top-[-362px] rotate-[-5.0000011693128235deg] origin-[100%_0%] w-5 z-[1] overflow-hidden scale-[0.719649484837973] md:opacity-[0.2514] md:rotate-[-5.0000024250423065deg] md:scale-[0.8865997831171006]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-[0.5995] top-[-352px] rotate-[-5.0000011693128235deg] origin-[100%_0%] z-[1] overflow-hidden scale-[0.719649484837973] left-[881px] right-[241px] md:opacity-[0.797] md:rotate-[-5.00000173299305deg] md:scale-[0.8578995691290502]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_7.5px)] opacity-50 top-[-352px] rotate-[-3.0000011085596214deg] origin-[100%_0%] w-[15px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_10px)] opacity-60 top-[-352px] rotate-[17.99999174234843deg] origin-[100%_0%] w-5 z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_10px)] opacity-[0.18] top-[-352px] rotate-[5.999972975483472deg] origin-[100%_0%] w-5 z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(41,52,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-46px] box-border caret-transparent shrink-0 left-[calc(50%_-_599px)] opacity-[0.23] top-[-352px] w-[1198px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(41,52,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[929px] left-[calc(50%_-_432.5px)] opacity-[0.46] top-[-252px] w-[865px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(41,52,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[639px] left-[calc(50%_-_389px)] opacity-[0.72] top-[-393px] w-[778px] z-[1] overflow-hidden"></div>
      </div>
    </section>
  );
};
