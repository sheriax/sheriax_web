'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks, companyInfo } from '@/lib/constants';
import { Button } from '../shared/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-xl tracking-tight text-primary uppercase">
              Sheriax <span className="text-accent">Sprint</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href || (pathname !== '/' && link.href.includes(pathname));
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors uppercase tracking-wider relative group py-2 ${
                    isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              href="/book"
              variant="primary"
              size="sm"
              rightIcon
              className="rounded-none relative after:absolute after:inset-0 after:border-2 after:border-accent after:-translate-x-1 filter hover:after:translate-x-0 transition-transform after:-translate-y-1 hover:after:translate-y-0"
            >
              <span className="relative z-10 flex items-center">Book a Call</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-2 -mr-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 flex flex-col pt-24 px-6 pb-6 overflow-hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 text-primary hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col space-y-6 mt-12 flex-1">
              {mainNavLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 hover:from-accent hover:to-accent-light transition-all block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 pt-8"
            >
              <Button
                href="/book"
                variant="primary"
                size="lg"
                rightIcon
                className="w-full text-center py-6 text-xl rounded-none font-bold uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
