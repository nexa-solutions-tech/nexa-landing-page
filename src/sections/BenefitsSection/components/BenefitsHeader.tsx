export const BenefitsHeader = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-center max-w-screen-sm gap-y-3 w-full z-[3]">
      <div className="relative box-border caret-transparent shrink-0 z-[4]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex h-min justify-start gap-y-2.5 w-min rounded-[60px]">
          <div className="relative content-center items-center backdrop-blur-[68px] bg-black box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-min z-[2] overflow-hidden px-4 py-2 rounded-[26px]">
            <div className="relative content-center items-center box-border caret-transparent gap-x-1 flex shrink-0 h-min justify-start gap-y-1 w-min">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter">
                  <span className="bg-clip-text bg-[linear-gradient(105deg,rgb(138,165,255)_22.3694%,rgb(133,77,255)_180%)] box-border caret-transparent inline-block text-nowrap">
                    BENEFÍCIOS
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[linear-gradient(105deg,rgb(41,52,255)_-8%,rgba(36,65,212,0)_50%)] box-border caret-transparent shrink-0 z-[1] overflow-hidden rounded-[22px] -left-0.5 -right-px -inset-y-px"></div>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center break-words w-full">
        <h2 className="text-white text-[32px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[38.4px] break-words text-center font-inter md:text-[44px] md:tracking-[-0.44px] md:leading-[52.8px]">
          Por que escolher o FisioClinic?
        </h2>
      </div>
      <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[440px] break-words w-full">
        <p className="text-violet-100/70 text-base box-border caret-transparent tracking-[-0.32px] leading-[25.6px] break-words text-center font-inter">
          Ferramentas inovadoras e funcionalidades completas para transformar a gestão da sua clínica
        </p>
      </div>
    </div>
  );
};