'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScopeProp {
  items: {
    num: string;
    title: string;
    description: string;
  }[];
}

export function Scope({ items }: ScopeProp) {
  return (
    <section className="py-24 md:py-32 bg-surface text-primary relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            What You Get
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Top 3 Automations.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="border border-border p-8 h-full flex flex-col bg-white hover:border-accent hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute top-0 right-0 bg-accent text-primary font-black uppercase tracking-widest px-4 py-1 text-xs -translate-y-1/2 translate-x-1/4 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  Automation {item.num}
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary mt-6 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed font-medium">
                  {item.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-border-dark group-hover:bg-accent group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
