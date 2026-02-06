import { Button } from "@/components/Button";

const menuItems = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Planos", href: "#pricing" },
  { label: "Blog", href: "./blog#changelog-section" },
  { label: "Contato", href: "./contact#contact" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="hidden md:flex items-center h-16 px-3 py-1.5 overflow-hidden hover:text-white transition-colors"
    >
      <p className="text-violet-100/70 hover:text-white text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap font-inter transition-colors">
        {label}
      </p>
    </a>
  );
};

export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <nav className="flex items-center gap-4">
        {menuItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>

      <Button href="https://framer.link/DX0edsv" variant="secondary">
        Testar Grátis
      </Button>
    </div>
  );
};
