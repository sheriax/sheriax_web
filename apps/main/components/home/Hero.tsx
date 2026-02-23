'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-white to-stone-50/80" />
      <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-100/50 via-brand-50/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-stone-100/60 to-transparent blur-3xl pointer-events-none" />
      {/* Decorative dots */}
      <div className="absolute top-32 right-20 w-2 h-2 rounded-full bg-brand-300/40 hidden lg:block" />
      <div className="absolute top-48 right-40 w-1.5 h-1.5 rounded-full bg-brand-200/50 hidden lg:block" />
      <div className="absolute bottom-40 left-32 w-2 h-2 rounded-full bg-stone-300/30 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-stone-500 bg-white/80 border border-stone-200/60 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                DPIIT Recognized Startup
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-bold text-stone-900 leading-[1.05] tracking-tight"
            >
              We build AI products <br className="hidden lg:block" />
              that{' '}
              <span className="text-gradient">solve real problems.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-xl"
            >
              Sheriax is a product studio from Chennai. We design, build, and ship AI-powered products and automation systems.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/10"
              >
                See Our Work
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://sprint.sheriax.com"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-stone-600 bg-white/80 border border-stone-200 rounded-full hover:border-stone-300 hover:bg-white transition-all"
              >
                Work With Us
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="opacity-40 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-[13px] text-stone-500 tracking-wide"
            >
              Currently building{' '}
              <span className="text-brand-500 font-medium">Kizu</span> — AI-powered financial recovery
            </motion.p>
          </motion.div>

          {/* Kizu mascot illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-200/30 to-brand-100/20 rounded-full blur-2xl scale-125" />
              <Image
                src="/images/kizu/app_mascot_transparent.png"
                alt="Kizu mascot"
                width={280}
                height={280}
                className="relative drop-shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
