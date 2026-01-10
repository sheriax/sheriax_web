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

const productLinks = [
  { href: '/kizu', label: 'Features' },
  { href: '/kizu#features', label: 'How it Works' },
  { href: '/kizu#waitlist', label: 'Get Early Access' },
  { href: 'https://kizu.in', label: 'Visit kizu.in', external: true },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-foreground">Sheriax</span>
            </Link>
            <p className="text-sm text-foreground/60 mb-4">
              Makers of Kizu — AI-powered financial recovery for the modern era.
            </p>
            <p className="text-sm text-foreground/50">
              Made with 🧡 in India
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground/80">Kizu</h4>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/60 hover:text-[var(--kizu-orange)] transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-[var(--kizu-orange)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground/80">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground/80">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
                className="text-foreground/70 hover:text-[var(--kizu-orange)] transition-colors"
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
