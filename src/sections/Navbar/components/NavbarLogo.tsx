export const NavbarLogo = () => {
  return (
    <div className="flex items-center grow md:w-px">
      <a
        href="./#hero"
        className="flex items-center gap-1.5 h-10 md:h-11 overflow-hidden"
      >
        <img
          src="/clinic-A1-dark.svg"
          alt="Nexa"
          className="h-full w-auto"
        />
      </a>
    </div>
  );
};
