/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Layout,
  Gauge,
  Accessibility,
  Sparkles,
} from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function WebDevPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Web Development</h1>
        <p className="mt-4 text-xl text-foreground/70 max-w-4xl">
          We build blazing-fast, accessible, and SEO-friendly websites using
          modern frameworks and best practices. Our focus is on performance,
          scalability, and delightful user experience.
        </p>
        <div className="mt-8 h-[22rem] rounded-lg overflow-hidden border border-border">
          <img
            src="/images/web-dev-responsive-design.jpeg"
            alt="Modern responsive web design on multiple devices, glassmorphism UI"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="rounded-lg border border-border p-6 hover:border-primary/30"
            whileHover={{ y: -4 }}
          >
            <Layout className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-medium">Responsive design across devices</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Fluid, adaptive layouts for mobile, tablet, and desktop.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-border p-6 hover:border-primary/30"
            whileHover={{ y: -4 }}
          >
            <Gauge className="w-7 h-7 text-green-500 mb-3" />
            <h3 className="font-medium">SSR/ISR with Next.js</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Static sites and dynamic rendering for speed and SEO.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-border p-6 hover:border-primary/30"
            whileHover={{ y: -4 }}
          >
            <Accessibility className="w-7 h-7 text-purple-500 mb-3" />
            <h3 className="font-medium">Accessibility</h3>
            <p className="text-foreground/70 text-sm mt-2">
              WCAG-compliant experiences for inclusive design.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-border p-6 hover:border-primary/30"
            whileHover={{ y: -4 }}
          >
            <Sparkles className="w-7 h-7 text-yellow-500 mb-3" />
            <h3 className="font-medium">Animations</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Polished microinteractions using Framer Motion.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg border border-border p-8 text-center">
          <h3 className="text-xl font-semibold">Need a modern website?</h3>
          <p className="mt-2 text-foreground/70">
            Let&apos;s craft a site that converts and delights users.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
