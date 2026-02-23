'use client';

import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    title: 'Leads fall through the cracks',
    description: 'No structured intake means missed follow-ups, lost prospects, and inconsistent pipeline tracking.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/>
      </svg>
    ),
  },
  {
    title: 'Reporting takes too long',
    description: 'Hours spent pulling data from multiple tools instead of delivering insights and strategy to clients.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'Onboarding is inconsistent',
    description: "Every new client gets a different experience because the process lives in people's heads, not systems.",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
      </svg>
    ),
  },
  {
    title: 'Follow-ups depend on memory',
    description: 'Critical tasks slip because there is no automated trigger system -- just people trying to remember.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/>
      </svg>
    ),
  },
];

export function PainPoints() {
  return (
    <section className="py-24 sm:py-32 bg-surface text-primary relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left mb-20 max-w-4xl"
        >
          <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            The Diagnosis
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Manual workflows are killing delivery speed.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col group"
            >
              <div className="w-16 h-16 rounded-none bg-accent/10 border-2 border-accent/20 flex items-center justify-center mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed font-medium">
                {point.description}
              </p>
              
              <div className="w-12 h-1 bg-border-dark mt-8 transition-all duration-300 group-hover:w-full group-hover:bg-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
