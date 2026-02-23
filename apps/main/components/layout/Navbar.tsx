'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Kizu', href: '/kizu' },
  { name: 'Sprint Studio', href: '/sprint' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo/Sheriax-Logo.png"
              alt="Sheriax"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-lg font-bold text-zinc-900 tracking-tight">Sheriax</span>
            <span className="text-lg font-bold text-brand-500 group-hover:text-brand-600 transition-colors">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors relative ${
                    isActive
                      ? 'text-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-700'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-500/60" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="https://sprint.sheriax.com/book"
              className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-all hover:shadow-lg hover:shadow-brand-500/20"
            >
              Book a Call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <a
                href="https://sprint.sheriax.com/book"
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-full"
              >
                Book a Call →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
