'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button, Badge } from '@sheriax/ui';

interface OfferHeroProps {
  badgeText: string;
  title: React.ReactNode;
  subtitle: string;
  highlightText: string;
  highlightIcon?: React.ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function OfferHero({ badgeText, title, subtitle, highlightText, highlightIcon }: OfferHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <Badge variant="accent">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              {badgeText}
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-zinc-500 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6 max-w-2xl"
          >
            <div className="flex gap-3">
              {highlightIcon && <div className="flex-shrink-0 mt-0.5">{highlightIcon}</div>}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{highlightText}</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button href="/book" variant="primary" size="lg" rightIcon>
              Book Discovery Sprint
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
