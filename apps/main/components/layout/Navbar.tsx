'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks, sprintAppUrl } from '@/lib/constants';
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border/50 shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-xl tracking-tight text-primary transition-transform group-hover:scale-105 duration-300">
              Sheriax
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((link) => {
              // Avoid exact match for home unless pathname is '/'
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group py-2 ${
                    isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              href={`${sprintAppUrl}/book`}
              variant="primary"
              size="sm"
              rightIcon
              className="rounded-full px-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              Book a Call
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
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-surface/90 flex flex-col pt-24 px-6 pb-6 overflow-hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col space-y-8 mt-12 flex-1">
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
                    className="text-4xl font-semibold tracking-tight text-primary hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8 border-t border-border pt-8"
            >
              <Button
                href={`${sprintAppUrl}/book`}
                variant="primary"
                size="lg"
                rightIcon
                className="w-full text-center py-5 text-lg rounded-2xl"
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
