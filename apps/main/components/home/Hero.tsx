'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../shared/Badge';
import { Button } from '../shared/Button';
import { sprintAppUrl } from '@/lib/constants';

export function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-surface py-20 lg:py-32 group">
      {/* Decorative architectural background element */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-gradient-to-l from-surface-dark/[0.03] dark:from-white/[0.02] to-transparent transform -skew-x-12 hidden md:block transition-all duration-1000 group-hover:skew-x-[-15deg] group-hover:scale-105" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl flex flex-col items-start space-y-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="default" className="border-border-dark/20 dark:border-border px-4 py-1.5 backdrop-blur-md bg-surface/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              DPIIT Recognized Startup
            </Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight"
          >
            We build AI products <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
              that solve real problems.
            </span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl font-light"
          >
            Sheriax is a product studio from Chennai. We design, build, and ship AI-powered products and automation systems that don’t just look good, but work intelligently.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <Button
              href="#products"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto overflow-hidden relative group"
            >
              <span className="relative z-10 flex items-center">
                See Our Work 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </Button>
            
            <Button
              href={sprintAppUrl}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
               Work With Us <span className="ml-2 opacity-50">↗</span>
            </Button>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 flex items-center space-x-3 text-sm text-text-muted font-mono"
          >
            <div className="w-8 h-px bg-border-dark/20 dark:bg-border/30" />
            <span>Currently building Kizu — AI-powered financial recovery</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
