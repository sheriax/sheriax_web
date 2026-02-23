import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white tracking-tight">Sheriax</span>
              <span className="text-lg font-bold text-brand-500">.</span>
            </div>
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">Sprint Studio</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Sprint Home</Link>
            <Link href="/india" className="hover:text-white transition-colors">India</Link>
            <Link href="/uae" className="hover:text-white transition-colors">UAE</Link>
            <Link href="/government" className="hover:text-white transition-colors">Government</Link>
            <a href="https://sheriax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">sheriax.com</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>&copy; {currentYear} Sheriax Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
