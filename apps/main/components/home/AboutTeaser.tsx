'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { SectionHeader } from '../shared/SectionHeader';

export function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 flex flex-col items-start"
        >
          <SectionHeader
            label="About"
            title="Built in Chennai by Youhana Sheriff"
            description="Sheriax is driven by a belief that great software should feel inevitable. We don't just write code; we architect systems that automate the mundane, so humans can focus on what matters."
            align="left"
            className="mb-8"
          />
          <Button
            href="/about"
            variant="ghost"
            rightIcon
            className="group px-0 hover:bg-transparent"
          >
            <span className="border-b border-primary/30 group-hover:border-primary pb-1 transition-colors font-semibold">
              Read more about our story
            </span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 w-full aspect-square md:aspect-video lg:aspect-square bg-surface-dark dark:bg-border rounded-3xl overflow-hidden relative shadow-2xl shadow-accent/5 ring-1 ring-border-dark/10"
        >
          {/* Placeholder for founder image, styled to look premium even without image */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center text-text-muted/20 font-mono text-sm">
            [Founder Image Placeholder]
          </div>
          
          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-white font-bold text-xl mb-1">Youhana Sheriff</p>
            <p className="text-white/60 font-mono text-xs">Founder & CEO</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
