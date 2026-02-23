'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Card } from '@sheriax/ui';

const painPoints = [
  {
    title: 'Leads fall through the cracks',
    description: 'No structured intake means missed follow-ups, lost prospects, and inconsistent pipeline tracking.',
  },
  {
    title: 'Reporting takes too long',
    description: 'Hours spent pulling data from multiple tools instead of delivering insights and strategy to clients.',
  },
  {
    title: 'Onboarding is inconsistent',
    description: "Every new client gets a different experience because the process lives in people's heads, not systems.",
  },
  {
    title: 'Follow-ups depend on memory',
    description: 'Critical tasks slip because there is no automated trigger system — just people trying to remember.',
  },
];

export function PainPoints() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 to-white" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32">
        <SectionHeader
          label="The Problem"
          title="Manual workflows are killing delivery speed."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Card hover className="h-full">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-50/80 border border-red-100/60 mb-5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-zinc-900">{point.title}</h3>
                <p className="mt-2 text-[14px] text-zinc-600 leading-relaxed">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
