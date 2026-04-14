import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Planos", href: "./#pricing" },
  { label: "Benefícios", href: "./#benefits" },
  { label: "Contato", href: "./contact" },
  { label: "Blog", href: "./blog" },
  { label: "Privacidade", href: "./privacy" },
];

const FooterLogo = () => (
  <a href="./" className="flex items-center gap-2">
    <svg
      className="w-7 h-7 text-indigo-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
    <span className="text-white font-bold text-lg font-inter tracking-tight">
      NexaClinic
    </span>
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
            className="text-violet-100/70 hover:text-white text-sm font-inter tracking-[-0.32px] transition-colors duration-200"
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && <NavDivider />}
        </div>
      ))}

      <NavDivider />

      <span className="text-indigo-400 text-sm font-inter tracking-[-0.32px]">
        contato@nexaclinic.com.br
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
