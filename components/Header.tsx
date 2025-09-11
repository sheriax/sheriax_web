'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/Sheriax-Logo.png"
              alt="Sheriax Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-bold text-xl hidden sm:block text-foreground">
              SHERIAX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className={`hover:text-blue-500 transition-colors ${
                  pathname === n.href ? 'text-blue-500' : 'text-foreground/80'
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded hover:bg-white/5"
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {nav.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-foreground/90 hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
