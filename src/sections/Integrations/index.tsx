import { IntegrationsHeader } from "@/sections/Integrations/components/IntegrationsHeader";
import { IntegrationsList } from "@/sections/Integrations/components/IntegrationsList";
import { FadeIn } from "@/components/FadeIn";

export const Integrations = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full overflow-hidden px-[18px] py-20 md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 flex-wrap h-min justify-start max-w-[1200px] gap-y-11 w-full">
        <FadeIn
          direction="up"
          className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-3 w-full z-[3]"
        >
          <IntegrationsHeader />
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
            <h2 className="text-white text-[32px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[38.4px] break-words text-center font-inter md:text-[44px] md:tracking-[-0.44px] md:leading-[52.8px]">
              Seamless Integrations
            </h2>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[440px] break-words w-full">
            <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter">
              Connect with your favorite tools to streamline workflows
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} fullWidth>
          <IntegrationsList />
        </FadeIn>
      </div>
      <div className="absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] top-0 md:w-screen"></div>
      <div className="absolute bg-[radial-gradient(50%_50%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] bottom-[-289px] box-border caret-transparent shrink-0 h-[378px] left-[calc(50%_-_300px)] rotate-[-12.999997801129437deg] w-[600px] z-[1] rounded-[10px] md:h-[499px] md:left-[calc(50%_-_396.5px)] md:w-[793px]"></div>
      <div className="[mask-image:radial-gradient(50%_109%,rgb(0,0,0)_0%,rgba(0,0,0,0.965)_0%,rgba(0,0,0,0)_96%)] absolute box-border caret-transparent blur-lg shrink-0 h-[1790px] left-[calc(50%_-_571px)] pointer-events-none top-[-637px] w-[1142px] z-[2] overflow-hidden">
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2072px] left-[calc(50%_-_20px)] opacity-[0.23031] top-[-352px] origin-[100%_0%] w-10 z-[1] overflow-hidden scale-[0.8971] md:opacity-[0.219186] md:scale-[0.86826]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.28] top-[-352px] rotate-[24.999981251686034deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden md:opacity-[0.247408] md:rotate-[25.000032739106587deg] md:scale-x-[0.8981498653482056] md:scale-y-[0.8981498653482057]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.285] top-[-352px] rotate-[11.000007676071172deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden scale-[0.6500003538768268] md:opacity-[0.387742] md:rotate-[10.999980200771567deg] md:scale-[0.7761754785008349]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.42] top-[-352px] rotate-[-12.000012571476546deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.32] top-[-352px] rotate-[-24.000029347278506deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_25px)] opacity-[0.151875] top-[-352px] rotate-[-17.99998974821658deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.6543753742868079] md:opacity-[0.27375] md:rotate-[-18.00002295897334deg] md:scale-[0.9387498018726822]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-[0.151875] top-[-342px] rotate-[-17.99998974821658deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.6543753742868079] right-[446px] md:opacity-[0.280275] md:rotate-[-17.99997477118487deg] md:scale-[0.9539747161701928]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_25px)] opacity-[0.151875] top-[-362px] rotate-[-17.99998974821658deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.6543753742868079] md:opacity-[0.280275] md:rotate-[-17.99997477118487deg] md:scale-[0.9539747161701928]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_10px)] opacity-30 top-[-352px] rotate-[-4.999996052434918deg] origin-[100%_0%] w-5 z-[1] overflow-hidden md:opacity-[0.1791] md:rotate-[-5.000000594986769deg] md:scale-[0.7178998262284301]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_10px)] opacity-30 top-[-362px] rotate-[-4.999996052434918deg] origin-[100%_0%] w-5 z-[1] overflow-hidden md:opacity-[0.1791] md:rotate-[-5.000000594986769deg] md:scale-[0.7178998262284301]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-100 top-[-352px] rotate-[-4.999996052434918deg] origin-[100%_0%] z-[1] overflow-hidden left-[881px] right-[241px] md:opacity-[0.597] md:rotate-[-5.000000594986769deg] md:scale-[0.7178998262284301]"></div>
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
