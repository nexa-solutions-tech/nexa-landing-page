    import { CTAHeader } from "@/sections/CTA/components/CTAHeader";
import { CTAButtons } from "@/sections/CTA/components/CTAButtons";
import { FadeIn } from "@/components/FadeIn";

export const CTA = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full overflow-hidden pt-20 px-[18px] md:pt-[100px] md:px-10">
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 flex-wrap h-min justify-start max-w-[1200px] gap-y-11 w-full">
        <FadeIn direction="up" className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-6 w-full z-[3] pr-0 md:pr-5">
          <CTAHeader />
          <CTAButtons />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="relative box-border caret-transparent shrink-0 h-[370px] w-full">
          <div className="absolute content-center items-center bg-blue-950 bottom-[-242px] box-border caret-transparent gap-x-6 flex shrink-0 h-[640px] justify-center gap-y-6 w-[925px] overflow-hidden rounded-3xl left-[57px] md:left-[calc(53.3929%_-_462.5px)]"></div>
          <div className="absolute content-center items-center bottom-[-241px] box-border caret-transparent gap-x-6 flex shrink-0 h-[640px] justify-center gap-y-6 w-[918px] overflow-hidden rounded-3xl left-[60px] md:left-[calc(53.3929%_-_459px)]">
            <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-full w-px">
              <div className="absolute box-border caret-transparent inset-0">
                <img
                  src="https://c.animaapp.com/mkvwf206SqHHjG/assets/25.png"
                  alt=""
                  className="aspect-[auto_2880_/_1980] box-border caret-transparent h-full object-cover w-full"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0)_55%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-[397px] z-[2] bottom-0 inset-x-0"></div>
      <div className="absolute bg-[radial-gradient(63.6719%_63.6719%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-[1280px] z-[1] top-0 md:w-screen"></div>
      <div className="[mask-image:radial-gradient(50%_109%,rgb(0,0,0)_0%,rgba(0,0,0,0.965)_0%,rgba(0,0,0,0)_96%)] absolute box-border caret-transparent blur-lg shrink-0 h-[1790px] left-[calc(50%_-_571px)] pointer-events-none top-[-637px] w-[1142px] z-[2] overflow-hidden">
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2072px] left-[calc(50%_-_20px)] opacity-[0.2484] top-[-352px] origin-[100%_0%] w-10 z-[1] overflow-hidden scale-[0.944] md:opacity-[0.228258] md:scale-[0.89178]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.263704] top-[-352px] rotate-[24.999978257085687deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden scale-x-[0.9490747625619386] scale-y-[0.9490747625619385] md:opacity-[0.210504] md:rotate-[25.000002831928853deg] md:scale-[0.7828245839880094]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.399713] top-[-352px] rotate-[11.000000944606205deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden scale-[0.7908745963627862] md:opacity-[0.374205] md:rotate-[11.000000992868628deg] md:scale-[0.7595500767335884]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.42] top-[-352px] rotate-[-12.000012571476546deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_17.5px)] opacity-[0.32] top-[-352px] rotate-[-24.000029347278506deg] origin-[100%_0%] w-[35px] z-[1] overflow-hidden"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_25px)] opacity-[0.17925] top-[-352px] rotate-[-17.99997383965753deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.718249532973743] md:opacity-30 md:rotate-[-17.99999174234843deg]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-[0.17925] top-[-342px] rotate-[-17.99997383965753deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.718249532973743] right-[446px] md:opacity-30 md:rotate-[-17.99999174234843deg]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_25px)] opacity-[0.17385] top-[-362px] rotate-[-18.00001296568861deg] origin-[100%_0%] w-[50px] z-[1] overflow-hidden scale-[0.7056500195798197] md:opacity-30 md:rotate-[-17.99999174234843deg]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-920px] box-border caret-transparent shrink-0 left-[calc(50%_-_10px)] opacity-[0.24195] top-[-352px] rotate-[-5.00000090128544deg] origin-[100%_0%] w-5 z-[1] overflow-hidden scale-[0.8645498744724043] md:opacity-[0.2028] md:rotate-[-4.99999682646099deg] md:scale-[0.7732002566796262]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] bottom-[-910px] box-border caret-transparent shrink-0 left-[calc(69.2645%_-_10px)] opacity-[0.24195] top-[-362px] rotate-[-5.00000090128544deg] origin-[100%_0%] w-5 z-[1] overflow-hidden scale-[0.8645498744724043] md:opacity-[0.2028] md:rotate-[-4.99999682646099deg] md:scale-[0.7732002566796262]"></div>
        <div className="absolute bg-[radial-gradient(50%_50%,rgb(138,165,255)_0%,rgba(171,171,171,0)_100%)] box-border caret-transparent shrink-0 h-[2704px] opacity-[0.8065] top-[-352px] rotate-[-5.00000090128544deg] origin-[100%_0%] z-[1] overflow-hidden scale-[0.8645498744724043] left-[881px] right-[241px] md:opacity-[0.676] md:rotate-[-4.99999682646099deg] md:scale-[0.7732002566796262]"></div>
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