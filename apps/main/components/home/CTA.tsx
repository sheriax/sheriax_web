'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { sprintAppUrl } from '@/lib/constants';

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-surface-dark border-t border-border-dark relative overflow-hidden flex justify-center">
      {/* Abstract light leak */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-blue-500 opacity-5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Have a workflow problem? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Let's sprint.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl font-light text-text-muted max-w-2xl mb-12">
            We run fixed-scope 2-week automation sprints for high-performing agencies. Stop wasting hours on manual repetition.
          </p>
          
          <Button
            href={`${sprintAppUrl}/book`}
            variant="primary"
            size="lg"
            rightIcon
            className="group px-8 relative overflow-hidden bg-white text-surface-dark hover:bg-surface"
          >
            <span className="relative z-10 flex items-center font-bold">
              Book a Discovery Call
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-accent group-hover:h-full transition-all duration-300 z-0 opacity-20" />
          </Button>

          <p className="mt-8 text-xs font-mono text-text-muted/60 uppercase tracking-widest">
            30 minute intro · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
