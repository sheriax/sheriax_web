'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'Education Workflow',
    client: 'VIT Project',
    description: 'Built and shipped a structured automation workflow that reduced manual back-and-forth in task tracking. Centralized intake, ownership, and execution visibility for faster coordination.',
  },
  {
    tag: 'Ops Standardization',
    client: 'Sheriax Internal',
    description: 'Core repetitive operations standardized into repeatable automation pipelines. Improved response consistency, reduced avoidable misses, and created cleaner operating rhythm.',
  },
  {
    tag: 'Government Workflow',
    client: 'RFP Automation',
    description: 'Fragmented RFP response process converted into structured pipeline: requirement extraction, owner assignment, deadline triggers, and progress visibility.',
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-text-muted font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            Proof of Work
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Real Results, <br className="hidden sm:block" /> Not Theory.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="border border-border p-8 h-full flex flex-col hover:border-accent transition-colors duration-300 relative bg-white">
                <div className="inline-flex items-center px-3 py-1 bg-border/50 text-text-muted font-black text-xs uppercase tracking-widest mb-6 w-fit group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  {cs.client}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4 leading-none">
                  {cs.tag}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">
                  {cs.description}
                </p>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border group-hover:border-accent transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border group-hover:border-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
