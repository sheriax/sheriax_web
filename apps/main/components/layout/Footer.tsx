import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-base font-bold text-zinc-900">Sheriax</span>
              <span className="text-base font-bold text-brand-500">.</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed">
              Made with 🧡 in India
            </p>
            <p className="text-[11px] text-zinc-500 mt-1 tracking-wide">DPIIT Recognized Startup</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><Link href="/kizu" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">Kizu</Link></li>
              <li><Link href="/sprint" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">Sprint Studio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-100 text-center">
          <p className="text-[11px] text-zinc-500 tracking-wide">&copy; {currentYear} Sheriax Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
