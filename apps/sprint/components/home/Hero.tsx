'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';

export function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Intense gradient background element */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-accent blur-[150px] opacity-10 rounded-full mix-blend-multiply translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="max-w-4xl flex flex-col items-start space-y-8">
          
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="accent" className="font-bold tracking-widest uppercase border-accent/30 bg-accent/10 px-4 py-1.5 shadow-sm shadow-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              Fixed-Scope AI Sprints
            </Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-[0.95] tracking-tighter uppercase"
          >
            Automate Your <br />
            Agency Workflows in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent-light stroke-text inline-block transform -skew-x-[10deg]">
              2 Weeks.
            </span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl font-medium"
          >
            Fixed-scope AI automation sprints for agencies that want faster reporting, cleaner handoffs, and fewer manual operations.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 w-full sm:w-auto"
          >
            <Button
              href="/book"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 font-bold uppercase tracking-widest relative after:absolute after:inset-0 after:border-2 after:border-accent after:translate-x-1 filter hover:after:translate-x-0 transition-transform after:translate-y-1 hover:after:translate-y-0"
            >
              <span className="relative z-10 flex items-center">
                Book Discovery Call
              </span>
            </Button>
            
            <Button
              href="#packages"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-lg font-bold uppercase tracking-widest border-2 border-primary/20 hover:border-primary text-primary hover:bg-transparent"
            >
              View Offers
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
