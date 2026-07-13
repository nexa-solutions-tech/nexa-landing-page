import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const menuItems = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Planos", href: "#pricing" },
  { label: "Contato", href: "#footer" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <div className="flex md:hidden items-center">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 -mr-2 rounded-xl text-neutral-400 hover:text-white transition-colors"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay + Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-[7]"
              onClick={close}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed top-[60px] inset-x-0 z-[8] px-[18px] pt-2 pb-4"
            >
              <div className="flex flex-col rounded-2xl bg-[radial-gradient(96%_96%_at_50%_0%,rgb(18,20,38)_0%,rgb(5,5,12)_100%)] border border-neutral-800/60 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
                {/* Nav links */}
                <nav className="flex flex-col">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                      className="flex items-center px-5 py-3.5 text-neutral-300 hover:text-white text-[15px] font-inter tracking-[-0.3px] transition-colors border-b border-neutral-800/40 last:border-b-0"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA */}
                <div className="px-4 pt-2 pb-4">
                  <a
                    href="/cadastro"
                    onClick={close}
                    className="flex items-center justify-center w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold font-inter transition-all shadow-[0_0_16px_rgba(99,102,241,0.3)]"
                  >
                    Testar Grátis
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
