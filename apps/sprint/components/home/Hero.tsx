'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-white to-zinc-50/60" />
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-100/30 via-brand-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-zinc-100/40 to-transparent blur-3xl pointer-events-none" />
      {/* Decorative dots */}
      <div className="absolute top-40 right-28 w-2 h-2 rounded-full bg-brand-300/30 hidden lg:block" />
      <div className="absolute bottom-36 left-28 w-1.5 h-1.5 rounded-full bg-zinc-300/30 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-0 w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 bg-white/80 border border-zinc-200/60 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Fixed-Scope AI Sprints
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-zinc-900 leading-[1.0] tracking-[-0.04em]"
          >
            Automate Your Agency
            <br className="hidden sm:block" />
            Workflows{' '}
            <span className="text-gradient">in 2 Weeks</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl"
          >
            Fixed-scope AI automation sprints for agencies that want faster reporting, cleaner handoffs, and fewer manual operations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="/book"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-all hover:shadow-lg hover:shadow-brand-500/20"
            >
              Book Discovery Call
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:translate-x-0.5 transition-transform">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-zinc-600 bg-white/80 border border-zinc-200 rounded-full hover:border-zinc-300 hover:bg-white transition-all"
            >
              View Offers ↓
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
