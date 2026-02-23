'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Badge, Button } from '@sheriax/ui';
import { Check } from 'lucide-react';

export function Packages() {
  return (
    <section id="packages">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32">
        <SectionHeader
          label="Sprint Packages"
          title="Two Sprint Formats"
          description="Focused engagement formats designed for speed and clarity."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Agency Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative rounded-2xl border-2 border-zinc-900 overflow-hidden h-full flex flex-col bg-white">
              <div className="h-1 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500" />
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <Badge variant="accent">Popular</Badge>
                  <span className="text-[11px] font-semibold text-zinc-500 tracking-widest uppercase">2 Weeks</span>
                </div>

                <h3 className="text-xl font-display text-zinc-900 tracking-tight">Agency AI Automation Sprint</h3>
                <p className="mt-2 text-[14px] text-zinc-600 leading-relaxed">
                  We automate your delivery workflows in 14 days so your team spends less time on repetitive admin.
                </p>

                <div className="mt-6 mb-6">
                  <p className="text-3xl font-bold text-zinc-900 tracking-tight font-mono">₹1,50,000</p>
                  <p className="text-[11px] text-zinc-500 mt-1 tracking-wide">AED 15,000+ for UAE clients</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {['2-3 workflows automated', 'SOP + handover included', 'Dashboard + reporting views', '2-week post-sprint support'].map(item => (
                    <li key={item} className="flex gap-2.5 text-[14px] text-zinc-600 leading-relaxed">
                      <Check className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <Button href="/india" variant="primary" size="md" rightIcon className="w-full justify-center">
                    View Full Offer
                  </Button>
                  <Button href="/government" variant="ghost" size="sm" className="w-full justify-center text-zinc-500">
                    Government Variant →
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Discovery Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="rounded-2xl border border-zinc-200/60 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full flex flex-col">
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <Badge variant="default">Quick Start</Badge>
                  <span className="text-[11px] font-semibold text-zinc-500 tracking-widest uppercase">3 Days</span>
                </div>

                <h3 className="text-xl font-display text-zinc-900 tracking-tight">Workflow Discovery Sprint</h3>
                <p className="mt-2 text-[14px] text-zinc-600 leading-relaxed">
                  Not ready for full implementation? Start with a 3-day discovery to map your top workflow bottleneck.
                </p>

                <div className="mt-6 mb-6">
                  <p className="text-3xl font-bold text-zinc-900 tracking-tight font-mono">₹50,000</p>
                  <p className="text-[11px] text-zinc-500 mt-1 tracking-wide">AED 2,500+ for UAE clients</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {['Process audit of one workflow', 'Bottleneck + risk map', 'Automation opportunity matrix', '14-day implementation roadmap'].map(item => (
                    <li key={item} className="flex gap-2.5 text-[14px] text-zinc-600 leading-relaxed">
                      <Check className="w-4 h-4 text-zinc-300 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href="/book" variant="secondary" size="md" rightIcon className="w-full justify-center">
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sovereign AI Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl bg-blue-50/50 border border-blue-100/60 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Badge variant="blue">Sovereign AI Ready</Badge>
          <p className="text-[13px] text-blue-700/70 leading-relaxed flex-1">
            Workflow automation designed for controlled infrastructure and compliance-sensitive government contexts.
          </p>
          <a href="/government" className="text-[13px] font-semibold text-blue-600 hover:text-blue-800 whitespace-nowrap transition-colors">
            View Government Offer →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
