'use client';

import Link from 'next/link';
import { ArrowRight, Smartphone, Bell, WifiOff, Rocket } from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function MobileAppPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Prompt: "Cross-platform mobile apps on Android and iOS with sleek UI" */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Mobile App Development</h1>
        <p className="mt-4 text-xl text-foreground/70 max-w-4xl">
          Build high-quality cross-platform apps that feel native and perform brilliantly across Android and iOS.
          From MVP to scale, we deliver apps users love.
        </p>
        <div className="mt-8 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground/50">Mobile App Hero Image Placeholder</p>
            <p className="text-foreground/30 text-sm mt-2">&quot;Cross-platform mobile apps on Android and iOS with sleek UI&quot;</p>
          </div>
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
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Smartphone className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-medium">React Native & Expo builds</h3>
            <p className="text-foreground/70 text-sm mt-2">Single codebase, native performance, faster iteration.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Bell className="w-7 h-7 text-green-500 mb-3" />
            <h3 className="font-medium">Push notifications & deep linking</h3>
            <p className="text-foreground/70 text-sm mt-2">Keep users engaged with smart triggers and routing.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <WifiOff className="w-7 h-7 text-purple-500 mb-3" />
            <h3 className="font-medium">Offline-first & sync strategies</h3>
            <p className="text-foreground/70 text-sm mt-2">Resilient apps that work without connectivity.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Rocket className="w-7 h-7 text-yellow-500 mb-3" />
            <h3 className="font-medium">App store launch & analytics</h3>
            <p className="text-foreground/70 text-sm mt-2">From submission to monitoring and growth.</p>
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
        <div className="rounded-lg border border-white/10 p-8 text-center">
          <h3 className="text-xl font-semibold">Let&apos;s build your app.</h3>
          <p className="mt-2 text-foreground/70">
            From MVP to scale, we&apos;ll guide you through every step.
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
