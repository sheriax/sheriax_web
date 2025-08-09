/* eslint-disable @next/next/no-img-element */
'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from '@/components/ui/motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image Placeholder */}
      {/* Prompt: "Futuristic tech city with digital innovation, neon lights, AR/VR elements, holographic displays" */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            Technology beyond time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg text-foreground/70 max-w-2xl"
          >
            Igniting tomorrow&apos;s marvels through revolutionary tech
            adventures. We craft AI/ML, web, mobile, SEO, and AR/VR experiences
            that feel magical and intuitive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-all duration-300 hover:scale-105"
            >
              Explore services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/5 transition-all duration-300 hover:scale-105"
            >
              Contact us
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-96 rounded-lg border border-white/10 overflow-hidden"
        >
          <img
            src="/images/hero-futuristic-city.jpeg"
            alt="Futuristic tech city with AI, robots, and holographic displays"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
