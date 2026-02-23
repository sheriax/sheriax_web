'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';

interface OfferHeroProps {
  badgeText: string;
  title: React.ReactNode;
  subtitle: string;
  highlightText: string;
}

export function OfferHero({ badgeText, title, subtitle, highlightText }: OfferHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl flex flex-col items-start space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="accent" className="font-bold tracking-widest uppercase border-accent/30 bg-accent/10 px-4 py-1.5 shadow-sm shadow-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              {badgeText}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1] tracking-tighter uppercase"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-accent/5 border-l-4 border-accent p-6 md:p-8 w-full max-w-2xl text-primary font-medium text-lg leading-relaxed shadow-sm bg-white"
          >
            {highlightText}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6 w-full sm:w-auto"
          >
            <Button
              href="/book"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 font-black uppercase tracking-widest border-2 border-primary rounded-none shadow-[4px_4px_0_theme(colors.accent)] hover:shadow-[0_0_0_theme(colors.accent)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-accent text-primary"
            >
              Book Discovery Call
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
