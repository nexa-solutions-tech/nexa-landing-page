import { FadeIn } from "@/components/FadeIn";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterNav } from "@/sections/Footer/components/FooterNav";

const FooterGlow = () => (
  <div className="hidden md:block absolute bg-[radial-gradient(63.6719%_63.6719%_at_50%_50%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-screen z-[1] top-0" />
);

export const Footer = () => {
  return (
    <footer id="footer" className="relative w-full bg-[radial-gradient(83%_50%_at_44%_111.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] flex flex-col items-center gap-y-10 md:gap-y-[60px] overflow-hidden px-[18px] py-14 md:px-10 md:py-20 scroll-mt-[80px]">
      <FadeIn
        direction="up"
        className="relative flex flex-col items-center justify-center gap-y-8 md:gap-y-11 max-w-[1200px] w-full z-[2]"
      >
        <FooterNav />
        <FooterLinks />
        <FooterCopyright />
      </FadeIn>

      <FooterGlow />
    </footer>
  );
};