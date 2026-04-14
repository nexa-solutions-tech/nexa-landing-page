import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="fixed z-[8] top-0 inset-x-0">
      {/* Mobile header */}
      <header className="flex md:hidden items-center justify-between h-[60px] w-full px-[18px] backdrop-blur-md bg-gradient-to-b from-black/90 to-black/50">
        <NavbarLogo />
        <MobileMenu />
      </header>

      {/* Desktop header */}
      <header className="hidden md:flex items-center justify-center h-[68px] w-full backdrop-blur bg-gradient-to-b from-black to-transparent overflow-hidden">
        <div className="flex items-center justify-start gap-8 grow h-full max-w-[1350px] w-px px-10">
          <NavbarLogo />
          <DesktopMenu />
        </div>
      </header>
    </div>
  );
};
