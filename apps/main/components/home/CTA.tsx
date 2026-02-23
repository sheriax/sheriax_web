'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-500/15 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white tracking-tight leading-tight">
            Have a workflow problem?
            <br />
            <span className="text-brand-400">Let&apos;s sprint.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
            We run fixed-scope 2-week automation sprints for agencies.
          </p>
          <div className="mt-10">
            <a
              href="https://sprint.sheriax.com/book"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-zinc-900 bg-white rounded-full hover:bg-zinc-50 transition-all hover:shadow-xl hover:shadow-white/10"
            >
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="opacity-40 group-hover:translate-x-0.5 transition-transform">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
