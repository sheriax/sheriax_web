'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    days: 'Days 1-2',
    description: 'We audit your workflows and lock scope in 1-2 days.',
  },
  {
    num: '02',
    title: 'Build',
    days: 'Days 3-8',
    description: 'Automation build-out, integrations, first QA pass over days 3-8.',
  },
  {
    num: '03',
    title: 'Test',
    days: 'Days 9-12',
    description: 'Edge-case handling, team review, pilot run on days 9-12.',
  },
  {
    num: '04',
    title: 'Handover',
    days: 'Days 13-14',
    description: 'Training, SOP docs, and support kickoff on days 13-14.',
  },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32 bg-surface border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end z-10 relative">
          <div>
            <span className="text-text-muted font-black tracking-[0.2em] uppercase text-sm mb-4 block">
              The Protocol
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
              How It Works.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-border-dark" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-left"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white text-xl font-black mb-8 relative z-10 rounded-none shadow-[4px_4px_0_theme(colors.accent)] border-2 border-primary group hover:-translate-y-1 hover:shadow-[6px_6px_0_theme(colors.accent)] transition-all">
                {step.num}
              </div>

              <div>
                <p className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">{step.days}</p>
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-3 leading-none">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] text-text-muted leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
