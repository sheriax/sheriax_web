'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Kizu Waitlist' },
  { value: '2026', label: 'Founded in Chennai' },
  { value: 'DPIIT', label: 'Recognized Startup' },
];

export function Numbers() {
  return (
    <section className="py-20 bg-surface-dark border-y border-border-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-surface-dark to-surface-dark/90" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-border-dark/50 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <h4 className="text-4xl md:text-5xl font-mono font-bold text-accent mb-3 tracking-tighter">
                {stat.value}
              </h4>
              <p className="text-text-muted font-medium text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
