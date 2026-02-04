export type FeatureCardProps = {
  variant: string;
  title: string;
  description: string;
  avatars?: Array<{
    src: string;
    alt: string;
    name: string;
    badgeSrc: string;
  }>;
  categories?: Array<{
    name: string;
  }>;
  statsIcons?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  chartImageSrc?: string;
  checklistItems?: Array<{
    iconSrc: string;
    text: string;
  }>;
  showGrowthSection?: boolean;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const getContainerClass = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full content-center items-center basis-auto grow-0 min-w-[auto] p-8 rounded-2xl md:basis-0 md:grow md:min-w-[300px] md:w-px";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full content-center items-center bg-[linear-gradient(rgb(138,165,255)_-30%,rgb(0,0,0)_10%)] basis-auto grow-0 p-px rounded-2xl md:basis-0 md:grow-[2] md:w-px";
    if (props.variant === "variant3")
      return "relative box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full content-start items-start flex-wrap overflow-hidden md:flex-row";
    if (props.variant === "variant4")
      return "relative box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full content-center items-center bg-[linear-gradient(rgb(138,165,255)_-30%,rgb(0,0,0)_10%)] basis-auto grow-0 p-px rounded-2xl md:basis-0 md:grow md:w-px";
    return "relative box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full content-center items-center basis-auto grow-0 min-w-[auto] p-8 rounded-2xl md:basis-0 md:grow md:min-w-[300px] md:w-px";
  };

  const getInnerContainerClass = () => {
    if (props.variant === "variant1")
      return "box-border caret-transparent shrink-0 rounded-2xl absolute bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] z-[3] overflow-hidden inset-0";
    if (props.variant === "variant2")
      return "box-border caret-transparent shrink-0 rounded-2xl relative content-start items-start bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] gap-x-6 flex flex-col h-min justify-center min-w-[auto] gap-y-6 w-full p-8 md:min-w-[440px]";
    if (props.variant === "variant3")
      return "box-border caret-transparent shrink-0 rounded-2xl relative content-center items-center bg-[linear-gradient(172deg,rgb(138,165,255)_-30%,rgb(0,0,0)_23%)] gap-x-6 flex basis-auto flex-col grow-0 h-min justify-center gap-y-6 w-full overflow-hidden p-px md:basis-0 md:grow-[2] md:w-px";
    if (props.variant === "variant4")
      return "box-border caret-transparent shrink-0 rounded-2xl relative content-start items-start bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] gap-x-6 flex flex-col h-min justify-start min-w-[auto] gap-y-6 w-full p-8 md:min-w-[300px]";
    return "box-border caret-transparent shrink-0 rounded-2xl absolute bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] z-[3] overflow-hidden inset-0";
  };

  const getContentWrapperClass = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min justify-center w-full overflow-hidden content-start items-start gap-x-4 max-w-[540px] gap-y-4 z-[3]";
    if (props.variant === "variant3")
      return "relative content-start items-start box-border caret-transparent flex flex-col shrink-0 h-min justify-center w-full overflow-hidden bg-[radial-gradient(96%_96%_at_50%_7.5%,rgb(18,20,38)_0%,rgb(0,0,0)_100%)] gap-x-6 min-w-[auto] gap-y-6 p-8 rounded-2xl md:min-w-[440px]";
    return "";
  };

  const getContentWidthClass = () => {
    if (props.variant === "variant2") return "w-[294px]";
    if (props.variant === "variant4") return "w-[282px]";
    return "";
  };

  if (props.variant === "variant1") {
    return (
      <div className={getContainerClass()}>
        <div className={getInnerContainerClass()}></div>
        <div className={getContentWrapperClass()}>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <h3 className="text-white text-2xl font-medium box-border caret-transparent tracking-[-0.48px] leading-7 break-words font-inter">
              {props.title}
            </h3>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[440px] break-words w-full">
            <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-left font-inter">
              {props.description}
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent contents">
          <div className="relative box-border caret-transparent shrink-0 h-[168px] w-[294px] z-[3]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black h-auto w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                {props.avatars &&
                  props.avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className={
                        index === 0
                          ? "static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto rounded-none left-auto top-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:p-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:left-0 md:top-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-800 after:md:rounded-xl after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
                          : index === 1
                            ? "static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto rounded-none right-auto bottom-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:p-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:right-0 md:bottom-0 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-800 after:md:rounded-xl after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
                            : "static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto z-auto rounded-none left-auto top-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-zinc-900 md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:z-[2] md:[mask-position:0%] md:bg-left-top md:p-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:left-[52%] md:top-2/4 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-neutral-800 after:md:rounded-xl after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"
                      }
                    >
                      <div
                        className={
                          index === 2
                            ? "static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:bg-zinc-700 md:box-border md:caret-transparent md:shrink-0 md:h-8 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl"
                            : "static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:bg-zinc-700 md:box-border md:caret-transparent md:shrink-0 md:h-8 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                        }
                      >
                        <div className="static box-content caret-black shrink w-auto left-auto top-auto md:absolute md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                          <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                            <img
                              src={avatar.src}
                              alt={avatar.alt}
                              className={
                                index === 2
                                  ? "box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_1312_/_912] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                  : "box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_58_/_58] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">
                          {avatar.name}
                        </p>
                      </div>
                      <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-4 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                          <img
                            src={avatar.badgeSrc}
                            alt=""
                            className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_22_/_22] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[linear-gradient(rgba(11,12,23,0)_0%,rgb(0,0,0)_100%)] box-border caret-transparent shrink-0 h-[127px] opacity-[0.63] pointer-events-none z-[3] overflow-hidden -left-2.5 right-0 bottom-0"></div>
        <div className="absolute bg-[linear-gradient(139deg,rgb(138,165,255)_-19%,rgb(0,0,0)_66%)] box-border caret-transparent gap-x-6 shrink-0 gap-y-6 z-[1] rounded-2xl -left-px right-0 -top-px bottom-0"></div>
      </div>
    );
  }
  
  return null;
}