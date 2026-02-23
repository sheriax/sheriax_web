'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { bookingUrl } from '@/lib/constants';

export function BookCTA() {
  return (
    <section id="book" className="py-24 sm:py-32 bg-primary border-t-4 border-accent relative overflow-hidden flex justify-center text-center">
      {/* Background graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20mix-blend-screen mix-blend-screen opacity-[0.1]">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-white blur-[150px] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-dark border border-border-dark p-8 md:p-12 mb-16 shadow-2xl relative"
        >
          {/* Accent decoration */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent" />
          
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
              Ready to Stop <br />
              <span className="text-accent underline decoration-4 underline-offset-8">Doing Things Manually?</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed font-medium mb-10">
              Book a 30-minute Discovery Call. We&apos;ll map your top workflow bottleneck and show a realistic 14-day plan.
            </p>
            
            <Button
              href={bookingUrl}
              variant="primary"
              size="lg"
              rightIcon
              className="w-full text-xl font-black uppercase tracking-widest border-2 border-white rounded-none shadow-[4px_4px_0_theme(colors.white)] hover:shadow-[0_0_0_theme(colors.white)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-accent text-primary p-6"
            >
              Book Discovery Call
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
