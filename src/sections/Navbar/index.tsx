import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";

export const Navbar = () => {
  return (
    <div className="fixed z-[8] top-0 inset-x-0">
      <header className="hidden md:flex items-center justify-center h-[68px] w-full backdrop-blur bg-gradient-to-b from-black to-transparent overflow-hidden">
        <div className="flex items-center justify-start gap-8 grow h-full max-w-[1350px] w-px px-10">
          <NavbarLogo />
          <DesktopMenu />
        </div>
      </header>
    </div>
  );
};