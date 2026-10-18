import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Planos", href: "#pricing" },
  { label: "Benefícios", href: "#features" },
  { label: "Privacidade", href: "/privacidade" },
];

const WHATSAPP_NUMBER = "5579981056663";
const WHATSAPP_DISPLAY = "(79) 98105-6663";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o Nexa Clinic."
)}`;

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
  </svg>
);

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
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-inter tracking-[-0.32px] transition-colors duration-200"
      >
        <WhatsAppIcon />
        {WHATSAPP_DISPLAY}
      </a>

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
