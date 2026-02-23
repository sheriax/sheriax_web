'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do you build custom apps in this sprint?',
    answer: 'No. This sprint is for workflow automation only. Custom app development is a separate engagement.',
  },
  {
    question: 'What are the payment terms?',
    answer: '50% upfront at kickoff, 50% on handover. Discovery sprints are 100% upfront.',
  },
  {
    question: 'Can you support compliance-sensitive use cases?',
    answer: 'Yes. We have a dedicated government offer variant designed for sovereign-compliant infrastructure.',
  },
  {
    question: 'What tools do you integrate with?',
    answer: 'We work with your existing stack -- CRMs, project management tools, reporting platforms, communication tools, and custom APIs.',
  },
  {
    question: 'What happens after the sprint?',
    answer: 'You get full ownership of all workflows, SOPs, and documentation. Optional monthly support retainer available.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-text-muted font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            Questions
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            FAQ.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 transition-colors duration-300 ${
                openIndex === index ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-border-dark'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-primary tracking-tight pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-none border-2 border-primary flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-transparent text-primary'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
