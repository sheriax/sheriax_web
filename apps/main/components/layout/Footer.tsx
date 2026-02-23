import React from 'react';
import Link from 'next/link';
import { companyInfo, kizuAppUrl, sprintAppUrl } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-text-muted py-16 px-6 lg:py-24 border-t border-border-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-bold text-2xl tracking-tight text-white group w-fit">
              Sheriax
              <span className="inline-block w-2 text-accent">.</span>
            </Link>
            <p className="text-sm max-w-xs">{companyInfo.description}</p>
            <div className="pt-4 flex items-center space-x-2">
              <span className="text-sm">Made with 🧡 in India</span>
              <span className="mx-2 h-1 w-1 bg-border rounded-full" />
              <span className="text-xs bg-accent-light/10 border border-accent/20 px-2 py-1 rounded text-accent-light inline-block font-mono">
                DPIIT Recognized
              </span>
            </div>
          </div>

          {/* Core Products */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href={kizuAppUrl} className="text-sm hover:text-white transition-colors">
                  Kizu
                </Link>
              </li>
              <li>
                <Link href={sprintAppUrl} className="text-sm hover:text-white transition-colors">
                  Sprint Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials / Legal */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Legal & Socials</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href={companyInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm hover:text-white transition-colors block pt-2"
                >
                  LinkedIn↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark w-full mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-text-muted/60">
          <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
