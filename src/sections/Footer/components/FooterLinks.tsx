import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export const FooterLinks = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex flex-col gap-4 md:gap-6 min-w-0 md:min-w-[284px]"
        >
          <div className="h-px w-full bg-neutral-800" />
          <div className="flex items-center justify-between">
            <span className="text-violet-100/70 text-base font-inter tracking-[-0.32px] group-hover:text-white transition-colors duration-200">
              {link.label}
            </span>
            <ArrowUpRight
              size={20}
              className="text-violet-100/70 group-hover:text-white transition-colors duration-200"
            />
          </div>
        </a>
      ))}
    </div>
  );
};
