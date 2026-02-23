/* eslint-disable @next/next/no-img-element */
'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from '@/components/ui/motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with Kizu orange accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7043]/10 via-purple-900/20 to-cyan-900/20 opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7043]/10 border border-[#FF7043]/30 text-sm text-[#FF8A65] mb-6"
            >
              <Sparkles size={14} />
              <span>AI-Powered Financial Recovery</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Heal Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7043] to-[#FF8A65]">
                Financial Wounds
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-foreground/70 max-w-xl"
            >
              Stop the bleeding. Start healing. Kizu AI scans your receipts,
              detects hidden money leaks, and guides you to financial wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/kizu"
                className="inline-flex items-center gap-2 rounded-md bg-[#FF7043] text-white px-5 py-3 text-sm font-medium hover:bg-[#FF8A65] transition-all duration-300 hover:scale-105"
              >
                Get Early Access <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <span className="text-sm font-medium" style={{ color: 'var(--stat-green)' }}>Auto-Cancelled</span>
                <span className="font-bold" style={{ color: 'var(--stat-green-bold)' }}>₹899 Saved</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <span className="text-sm font-medium" style={{ color: 'var(--stat-blue)' }}>Health Score</span>
                <span className="font-bold" style={{ color: 'var(--stat-blue-bold)' }}>+12 Points</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Kizu Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF7043]/30 to-transparent blur-3xl rounded-full scale-150"></div>
              
              <motion.img
                src="/images/kizu/app_mascot_transparent.png"
                alt="Kizu Fox Mascot - Your AI Financial Companion"
                className="relative w-72 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave/gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
