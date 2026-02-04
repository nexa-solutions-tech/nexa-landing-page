import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent shrink-0 z-[8] top-0 inset-x-0">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <header className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:backdrop-blur md:bg-[linear-gradient(rgb(0,0,0)_-50%,rgba(0,0,0,0)_170%)] md:box-border md:caret-transparent md:gap-x-0 md:flex md:h-[68px] md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal max-w-none min-h-0 min-w-0 gap-y-[normal] w-auto px-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-8 md:flex md:basis-0 md:grow md:shrink-0 md:h-full md:justify-start md:max-w-[1350px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:px-10 md:scroll-m-0 md:scroll-p-[auto]">
            <NavbarLogo />
            <DesktopMenu />
          </div>
        </header>
      </div>
    </div>
  );
};