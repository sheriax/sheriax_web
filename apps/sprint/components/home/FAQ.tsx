'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@sheriax/ui';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Do you build custom apps in this sprint?', answer: 'No. This sprint is for workflow automation only. Custom app development is a separate engagement.' },
  { question: 'What are the payment terms?', answer: '50% upfront at kickoff, 50% on handover. Discovery sprints are 100% upfront.' },
  { question: 'Can you support compliance-sensitive use cases?', answer: 'Yes. We have a dedicated government offer variant designed for sovereign-compliant infrastructure.' },
  { question: 'What tools do you integrate with?', answer: 'We work with your existing stack — CRMs, project management tools, reporting platforms, communication tools, and custom APIs.' },
  { question: 'What happens after the sprint?', answer: 'You get full ownership of all workflows, SOPs, and documentation. Optional monthly support retainer available.' },
  { question: 'Do you work with international clients?', answer: 'Yes. We serve India (INR pricing) and UAE/international clients (AED/USD pricing). Remote delivery.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="Questions"
          title="Frequently Asked Questions"
        />

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-zinc-200">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-900 pr-8 group-hover:text-brand-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-zinc-600 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
