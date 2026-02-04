import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroCTAButtons } from "@/sections/Hero/components/HeroCTAButtons";
import { HeroDescription } from "@/sections/Hero/components/HeroDescription";
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroLogos } from "@/sections/Hero/components/HeroLogos";

export const Hero = () => {
  return (
    <section className="relative content-center items-center bg-[radial-gradient(80%_25%_at_50%_7.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] box-border caret-transparent gap-x-11 flex flex-col shrink-0 h-min justify-center gap-y-11 w-full overflow-hidden pt-[120px] pb-20 px-[18px] md:pt-40 md:pb-[100px] md:px-10">
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[1000px] gap-y-6 w-full z-[3]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[720px] gap-y-6 w-full">
          <HeroContent />
          <HeroHeading />
          <HeroDescription />
          <HeroCTAButtons />
        </div>
        <HeroLogos />
      </div>
      <section className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[1200px] gap-y-6 w-full z-[2] scroll-mt-[100px]">
        <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-6 w-full md:flex-row">
          <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center min-w-[auto] gap-y-6 w-full p-8 rounded-2xl md:basis-0 md:grow md:min-w-[300px] md:w-px">
            <div className="absolute bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 z-[3] overflow-hidden rounded-2xl inset-0"></div>
            <div className="relative content-start items-start box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center max-w-[540px] gap-y-4 w-full z-[3] overflow-hidden">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <h3 className="text-white text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-7 break-words font-inter">
                  Destaque sua Clínica
                </h3>
              </div>
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[440px] break-words w-full">
                <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-left font-inter">
                  Eleve sua clínica com gestão profissional e conecte-se com
                  pacientes de forma eficiente.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent contents">
              <div className="relative box-border caret-transparent shrink-0 h-[168px] w-[294px] z-[3]">
                <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static box-content caret-black h-auto w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto rounded-none left-auto top-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:p-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:left-0 md:top-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-800 after:md:rounded-xl after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
                      <div className="static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:bg-zinc-700 md:box-border md:caret-transparent md:shrink-0 md:h-8 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr">
                        <div className="static box-content caret-black shrink w-auto left-auto top-auto md:absolute md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                          <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                            <img
                              src="https://c.animaapp.com/mkvwf206SqHHjG/assets/hB5bi4QrUW6ADBo4x4YHYj1FyyY.svg"
                              alt="user avatar"
                              className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_58_/_58] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                          LanderX
                        </p>
                      </div>
                      <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-4 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                          <img
                            src="https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg"
                            alt=""
                            className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_22_/_22] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto rounded-none right-auto bottom-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:p-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:right-0 md:bottom-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-800 after:md:rounded-xl after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif">
                      <div className="static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:bg-zinc-700 md:box-border md:caret-transparent md:shrink-0 md:h-8 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr">
                        <div className="static box-content caret-black shrink w-auto left-auto top-auto md:absolute md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                          <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                            <img
                              src="https://c.animaapp.com/mkvwf206SqHHjG/assets/AtXPNff5LTVvIV6wxVjP76Wnvc.svg"
                              alt="user avatar"
                              className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_58_/_58] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                          Crystalio
                        </p>
                      </div>
                      <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-4 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                          <img
                            src="https://c.animaapp.com/mkvwf206SqHHjG/assets/pJ14Zm6fSChKb3riNPqdMYdzpDM.svg"
                            alt=""
                            className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_22_/_22] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
