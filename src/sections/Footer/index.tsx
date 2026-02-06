import { FadeIn } from "@/components/FadeIn";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterNav } from "@/sections/Footer/components/FooterNav";

const FooterGlow = () => (
  <div className="hidden md:block absolute bg-[radial-gradient(63.6719%_63.6719%_at_50%_50%,rgb(138,165,255)_0%,rgb(0,0,0)_100%)] h-1 left-[calc(50%_-_640px)] opacity-[0.14] w-screen z-[1] top-0" />
);

export const Footer = () => {
  return (
    <footer className="relative w-full md:bg-[radial-gradient(83%_50%_at_44%_111.5%,rgb(3,20,87)_0%,rgb(0,0,0)_100%)] md:flex md:flex-col md:items-center md:gap-y-[60px] md:overflow-hidden md:px-10 md:py-20">
      <FadeIn
        direction="up"
        className="md:relative md:flex md:flex-col md:items-center md:justify-center md:gap-y-11 md:max-w-[1200px] md:w-full md:z-[2]"
      >
        <FooterNav />
        <FooterLinks />
        <FooterCopyright />
      </FadeIn>

      <FooterGlow />
    </footer>
  );
};