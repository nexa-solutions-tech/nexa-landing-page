export const PricingHeader = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex h-min justify-start gap-y-2.5 w-min rounded-[60px]">
        <div className="relative content-center items-center backdrop-blur-[68px] bg-black box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start gap-y-2.5 w-min z-[2] overflow-hidden px-4 py-2 rounded-[26px]">
          <div className="relative content-center items-center box-border caret-transparent gap-x-1 flex shrink-0 h-min justify-start gap-y-1 w-min">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p className="text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[25.6px] text-left text-nowrap font-inter">
                <span className="bg-clip-text bg-[linear-gradient(105deg,rgb(138,165,255)_22.3694%,rgb(133,77,255)_180%)] box-border caret-transparent inline-block text-nowrap">
                  PLANOS E PREÇOS
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[linear-gradient(105deg,rgb(41,52,255)_-8%,rgba(36,65,212,0)_50%)] box-border caret-transparent shrink-0 z-[1] overflow-hidden rounded-[22px] -left-0.5 -right-px -inset-y-px"></div>
      </div>
    </div>
  );
};