import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const socials = [
  {
    href: 'https://linkedin.com/company/sheriax',
    label: 'LinkedIn',
    Icon: Linkedin,
  },
  {
    href: 'https://instagram.com/sheriax/',
    label: 'Instagram',
    Icon: Instagram,
  },
  { href: 'https://x.com/sheriaxofficial', label: 'Twitter', Icon: Twitter },
  {
    href: 'https://facebook.com/sheriaxofficial',
    label: 'Facebook',
    Icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Sheriax Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                aria-label={label}
                className="text-foreground/70 hover:text-blue-500"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
