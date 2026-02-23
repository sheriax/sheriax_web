'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

export function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end z-10 relative bg-background">
          <div>
            <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 block">
              The Protocol
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
              Our Sprint <br className="hidden md:block" /> Packages
            </h2>
          </div>
          <p className="mt-8 md:mt-0 text-xl text-text-muted font-medium max-w-sm">
            Two focused engagement formats designed for speed and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Offer 1: Agency Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <Card hover={false} className="border-4 border-primary rounded-none p-8 md:p-12 relative flex-grow bg-white flex flex-col justify-between group overflow-hidden">
              <div className="absolute right-0 top-0 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 translate-x-0 group-hover:bg-accent transition-colors">
                2 Weeks
              </div>

              <div>
                <h3 className="text-3xl font-black text-primary uppercase tracking-tight mb-4 pr-16 mt-4">
                  Agency AI <br /> Automation Sprint
                </h3>
                
                <p className="text-lg text-text-muted font-medium mb-12">
                  We automate your delivery workflows in 14 days so your team spends less time on repetitive admin and more time on strategy + client outcomes.
                </p>

                <div className="pb-8 border-b-2 border-border mb-8 group-hover:border-accent transition-colors">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter text-primary">₹1,50,000</span>
                    <span className="text-sm text-text-muted font-bold tracking-widest uppercase">starting</span>
                  </div>
                  <p className="text-xs text-text-muted font-mono mt-2">AED 15,000+ for UAE clients</p>
                </div>

                <ul className="space-y-4 font-bold text-primary tracking-wide text-sm md:text-base uppercase mb-12">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-accent block" />
                    2-3 workflows automated
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-accent block" />
                    SOP + handover included
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-accent block" />
                    Dashboard + reporting views
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-accent block" />
                    2-week post-sprint support
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Button href="/india" variant="primary" size="lg" className="w-full text-lg font-black uppercase tracking-widest border-2 border-primary rounded-none shadow-[4px_4px_0_theme(colors.primary)] hover:shadow-[0_0_0_theme(colors.primary)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-accent text-primary">
                  View Full Offer
                </Button>
                <div className="text-center pt-2">
                  <a href="/government" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent flex items-center justify-center gap-1 group">
                    <svg className="w-3 h-3 text-accent transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 2L2 7l10 5 10-5-10-5zm0 20v-5m-7-3v5l7 3 7-3v-5m-7-3l7-3-7-3-7 3 7 3z" /></svg>
                    <span>Government Variant available</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Offer 2: Discovery Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <Card hover={false} className="border-4 border-surface-dark rounded-none p-8 md:p-12 relative flex-grow bg-surface flex flex-col justify-between group">
              <div className="absolute right-0 top-0 bg-surface-dark text-white text-xs font-bold uppercase tracking-widest px-4 py-2 group-hover:bg-primary transition-colors">
                3 Days
              </div>

              <div>
                <h3 className="text-3xl font-black text-primary uppercase tracking-tight mb-4 pr-16 mt-4">
                  Workflow <br /> Discovery Sprint
                </h3>
                
                <p className="text-lg text-text-muted font-medium mb-12">
                  Not ready for full implementation? Start with a 3-day discovery to map your top workflow bottleneck and get a concrete 14-day plan.
                </p>

                <div className="pb-8 border-b-2 border-border mb-8 group-hover:border-surface-dark transition-colors">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter text-primary">₹50,000</span>
                    <span className="text-sm text-text-muted font-bold tracking-widest uppercase">starting</span>
                  </div>
                  <p className="text-xs text-text-muted font-mono mt-2">AED 2,500+ for UAE clients</p>
                </div>

                <ul className="space-y-4 font-bold text-primary tracking-wide text-sm md:text-base uppercase mb-12 opacity-80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-primary block" />
                    Process audit of one workflow
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-primary block" />
                    Bottleneck + risk map
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-primary block" />
                    Automation opportunity matrix
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-none bg-primary block" />
                    14-day implementation roadmap
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Button href="/book" variant="secondary" size="lg" className="w-full text-lg font-black uppercase tracking-widest border-2 border-primary rounded-none shadow-[4px_4px_0_theme(colors.primary)] hover:shadow-[0_0_0_theme(colors.primary)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-white text-primary">
                  Book Discovery Call
                </Button>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
