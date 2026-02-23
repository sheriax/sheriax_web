'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge, SectionHeader } from '@sheriax/ui';

const cases = [
  {
    type: 'Education Workflow',
    title: 'VIT Project',
    description: 'Built and shipped a structured automation workflow that reduced manual back-and-forth in task tracking. Centralized intake, ownership, and execution visibility for faster coordination.',
  },
  {
    type: 'Ops Standardization',
    title: 'Sheriax Internal',
    description: 'Core repetitive operations standardized into repeatable automation pipelines. Improved response consistency, reduced avoidable misses, and created cleaner operating rhythm.',
  },
  {
    type: 'Government Workflow',
    title: 'RFP Automation',
    description: 'Fragmented RFP response process converted into structured pipeline: requirement extraction, owner assignment, deadline triggers, and progress visibility.',
  },
];

export function CaseStudies() {
  return (
    <section className="bg-stone-50/50">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="Proof of Work"
          title="Real Results, Not Theory"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card hover className="h-full">
                <Badge variant="default">{cs.type}</Badge>
                <h3 className="mt-4 text-base font-bold text-stone-900">{cs.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{cs.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
