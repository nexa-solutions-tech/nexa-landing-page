import { Instagram } from "lucide-react";

const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.5 3c.3 2.2 1.6 3.6 3.7 3.8v2.5c-1.2.1-2.3-.2-3.6-.9v5.9c0 4.3-3.9 6.9-7.5 5.4-2.3-1-3.4-3.6-2.6-6 .7-2 2.6-3.2 4.9-3v2.6c-.4.1-.8.2-1.2.4-1.1.6-1.4 1.9-.8 2.9.6 1 1.9 1.2 2.8.5.6-.4.9-1.1.9-1.9V3h3z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/", Icon: TikTokIcon },
];

export const FooterLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 text-violet-100/70 hover:text-white hover:border-neutral-600 transition-colors duration-200"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
};
