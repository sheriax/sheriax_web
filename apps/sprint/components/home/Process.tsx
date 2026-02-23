'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@sheriax/ui';

const steps = [
  { num: '1-2', title: 'Discovery', days: 'Days 1-2', description: 'We audit your workflows and lock scope in 1-2 days.' },
  { num: '3-8', title: 'Build', days: 'Days 3-8', description: 'Automation build-out, integrations, first QA pass.' },
  { num: '9-12', title: 'Test', days: 'Days 9-12', description: 'Edge-case handling, team review, pilot run.' },
  { num: '13-14', title: 'Handover', days: 'Days 13-14', description: 'Training, SOP docs, and support kickoff.' },
];

export function Process() {
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="How It Works"
          title="Delivery Timeline"
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md ${
                  i === steps.length - 1 ? 'bg-brand-500' : 'bg-stone-900'
                }`}>
                  {step.num}
                </div>
              </div>
              <div className="bg-white rounded-xl border border-stone-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">{step.title}</h3>
                  <span className={`text-[11px] font-semibold rounded px-2 py-0.5 ${
                    i === steps.length - 1 ? 'text-brand-600 bg-brand-50' : 'text-stone-600 bg-stone-100'
                  }`}>
                    {step.days}
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
