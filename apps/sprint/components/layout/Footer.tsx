import React from 'react';
import Link from 'next/link';
import { companyInfo } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark border-t-4 border-accent text-white py-16 px-6 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] bg-accent blur-[200px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 w-full mb-16">
          
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-black text-3xl uppercase tracking-tighter text-white">
              Sheriax <span className="text-accent underline decoration-4 underline-offset-8">Sprint</span>
            </Link>
            <p className="text-sm font-mono tracking-widest text-text-muted mt-2">
              MADE WITH DEDICATION IN INDIA
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-wider text-text-muted">
            <Link href="/#packages" className="hover:text-white hover:translate-x-1 transition-all">Sprint Offers</Link>
            <Link href="/government" className="hover:text-accent hover:translate-x-1 transition-all">Government</Link>
            <Link href="/case-studies" className="hover:text-white hover:translate-x-1 transition-all">Case Studies</Link>
            <Link href="/#faq" className="hover:text-white hover:translate-x-1 transition-all">FAQ</Link>
            <Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all text-xs opacity-60">Privacy</Link>
            <Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all text-xs opacity-60">Terms</Link>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <a href={companyInfo.parentUrl} target="_blank" rel="noreferrer" className="text-xs font-mono group p-4 border border-border-dark/50 hover:bg-white/5 transition-colors">
              <span className="block text-text-muted mb-1">A product of</span>
              <span className="font-bold text-white group-hover:text-accent transition-colors">Sheriax Solutions ↗</span>
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 w-full pt-8 flex items-center justify-between text-xs font-mono text-text-muted/60">
          <p>© {currentYear} {companyInfo.parentCompany}. All rights reserved.</p>
          <p className="hidden md:block">sprint.sheriax.com</p>
        </div>
      </div>
    </footer>
  );
}
