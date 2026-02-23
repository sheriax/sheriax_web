'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-xl"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">About</span>
            <h2 className="mt-3 text-3xl sm:text-[2.5rem] font-display text-zinc-900 tracking-[-0.03em]">
              Built in Chennai <br className="hidden sm:block" />by Youhana Sheriff
            </h2>
            <p className="mt-5 text-base text-zinc-600 leading-relaxed">
              I started Sheriax because I believe technology should solve real problems, not just create more complexity.
              We build focused AI products and run automation sprints for agencies who are tired of inefficient workflows.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
            >
              Read the full story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-brand-100/60 via-brand-50/30 to-zinc-50 border border-zinc-200/40 flex items-center justify-center">
              <span className="text-6xl font-display text-brand-500/30 select-none">S.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
