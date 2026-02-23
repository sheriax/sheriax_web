'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';

interface PricingProp {
  tiers: {
    name: string;
    tag: string;
    price: string;
    features: string[];
    highlighted?: boolean;
    currency?: string;
  }[];
}

export function Pricing({ tiers }: PricingProp) {
  return (
    <section className="py-24 sm:py-32 bg-background relative z-10 border-t border-border">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            Sprint Packages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Choose Your Sprint.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative bg-background">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`border-4 p-8 md:p-12 h-full flex flex-col group relative bg-white transition-all ${
                tier.highlighted ? 'border-primary shadow-[8px_8px_0_theme(colors.primary)]' : 'border-border hover:border-accent'
              }`}
            >
              <div className={`absolute top-0 left-0 text-white font-black uppercase tracking-widest px-4 py-1 text-xs -translate-y-[2px] -translate-x-[4px] shadow-sm ${
                tier.highlighted ? 'bg-primary' : 'bg-text-muted'
              }`}>
                {tier.tag}
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tight text-primary mt-6 mb-2">
                {tier.name}
              </h3>
              
              <div className={`pb-6 border-b-2 mb-8 transition-colors ${tier.highlighted ? 'border-primary/20' : 'border-border group-hover:border-accent'}`}>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black tracking-tighter text-primary">{tier.price}</span>
                </div>
                {tier.currency && <p className="text-xs text-text-muted font-mono mt-2 tracking-wide uppercase">{tier.currency}</p>}
              </div>
              
              <ul className={`space-y-4 font-bold tracking-wide text-sm md:text-base uppercase mb-12 flex-grow ${tier.highlighted ? 'text-primary' : 'text-text-muted'}`}>
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-none block ${tier.highlighted ? 'bg-accent' : 'bg-border-dark'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              
              <Button
                href="/book"
                variant={tier.highlighted ? "primary" : "secondary"}
                size="lg"
                className={`w-full text-lg font-black uppercase tracking-widest border-2 rounded-none transition-all ${
                  tier.highlighted 
                    ? 'border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:shadow-[0_0_0_theme(colors.primary)] hover:translate-x-[4px] hover:translate-y-[4px] bg-accent text-primary' 
                    : 'border-border text-text-muted hover:border-primary hover:text-primary hover:bg-transparent'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
