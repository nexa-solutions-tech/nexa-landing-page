export const NavbarLogo = () => {
  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-9 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <a
          href="./#hero"
          className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-1.5 md:flex md:h-full md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[160px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
        >
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-white font-bold text-xl font-inter tracking-tight">FisioClinic</span>
          </div>
        </a>
      </div>
    </div>
  );
};