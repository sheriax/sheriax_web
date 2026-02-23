'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, Badge, SectionHeader } from '@sheriax/ui';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    slug: 'education-task-tracking',
    type: 'Education Workflow',
    title: 'Task Coordination Automation',
    description: 'Replaced manual back-and-forth with a structured automation pipeline — reducing coordination overhead by 60%.',
    metric: '60% less overhead',
  },
  {
    slug: 'internal-ops-standardization',
    type: 'Ops Standardization',
    title: 'Ops Pipeline Automation',
    description: 'Core repetitive operations standardized into repeatable automation pipelines. 80% fewer manual steps.',
    metric: '4 pipelines built',
  },
  {
    slug: 'government-rfp-automation',
    type: 'Government Workflow',
    title: 'RFP Response Automation',
    description: 'Fragmented RFP process converted into a structured pipeline with AI requirement extraction.',
    metric: '50% faster',
  },
];

export function CaseStudies() {
  return (
    <section className="bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="Proof of Work"
          title="Real Results, Not Theory"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/case-studies/${cs.slug}`} className="block group h-full">
                <Card hover className="h-full flex flex-col">
                  <Badge variant="default">{cs.type}</Badge>
                  <h3 className="mt-4 text-base font-bold text-stone-900">{cs.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed flex-1">{cs.description}</p>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-stone-500 bg-stone-50 px-2 py-0.5 rounded">{cs.metric}</span>
                    <span className="text-[13px] font-semibold text-brand-600 group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
