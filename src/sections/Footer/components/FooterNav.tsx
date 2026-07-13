import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Planos", href: "#pricing" },
  { label: "Benefícios", href: "#features" },
  { label: "Privacidade", href: "./privacy" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  }
};

const FooterLogo = () => (
  <a href="./" className="flex items-center">
    <img
      src="/clinic-A1-dark.svg"
      alt="Nexa"
      className="h-10 w-auto"
    />
  </a>
);

const NavDivider = () => (
  <div className="hidden md:block w-px self-stretch bg-neutral-800" />
);

export const FooterNav = () => {
  return (
    <nav className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-3 md:gap-5 md:justify-between w-full">
      <FooterLogo />

      <NavDivider />

      {navLinks.map((link, index) => (
        <div key={link.label} className="contents">
          <a
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-violet-100/70 hover:text-white text-sm font-inter tracking-[-0.32px] transition-colors duration-200"
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && <NavDivider />}
        </div>
      ))}

      <NavDivider />

      <span className="text-indigo-400 text-sm font-inter tracking-[-0.32px]">
        contato.nexasolutions@gmail.com
      </span>

      <NavDivider />

      <a
        href="/cadastro"
        className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2.5 rounded-xl bg-indigo-950 border border-indigo-500/20 backdrop-blur-sm text-white text-sm font-inter hover:bg-indigo-900 transition-colors duration-200"
      >
        Testar Grátis
        <ExternalLink size={14} />
      </a>
    </nav>
  );
};
