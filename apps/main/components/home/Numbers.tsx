'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 'DPIIT', label: 'Recognized Startup', mono: true },
  { value: '2024', label: 'Founded', mono: true },
  { value: '2', label: 'Products Shipping', mono: false },
];

export function Numbers() {
  return (
    <section className="border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center"
            >
              <p className={`text-3xl sm:text-4xl font-bold tracking-tight ${stat.mono ? 'font-mono text-stone-900' : 'text-gradient'}`}>
                {stat.value}
              </p>
              <p className="mt-1.5 text-[13px] text-stone-500 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
