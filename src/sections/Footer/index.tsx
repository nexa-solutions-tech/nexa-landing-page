import { FadeIn } from "@/components/FadeIn";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterNav } from "@/sections/Footer/components/FooterNav";

export const Footer = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 order-[1002] w-full">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <footer className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-[radial-gradient(83%_50%_at_44%_111.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:gap-x-[60px] md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[60px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-10 md:py-20 md:scroll-m-0 md:scroll-p-[auto]">
          <FadeIn direction="up" className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto z-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-11 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:max-w-[1200px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-11 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <FooterNav />
            <FooterLinks />
            <FooterCopyright />
          </FadeIn>
          <div className="static bg-none box-content caret-black shrink h-auto opacity-100 w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-[radial-gradient(63.6719%_63.6719%_at_50%_50%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:h-1 md:left-[calc(50%_-_640px)] md:opacity-[0.14] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-screen md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0"></div>
        </footer>
      </div>
    </div>
  );
};