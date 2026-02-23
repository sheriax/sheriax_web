'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { Badge } from '../shared/Badge';
import { Button } from '../shared/Button';
import { SectionHeader } from '../shared/SectionHeader';
import { kizuAppUrl, sprintAppUrl } from '@/lib/constants';

const products = [
  {
    id: 'kizu',
    title: 'Kizu',
    description: 'AI-powered financial recovery. Scans receipts, detects money leaks, and guides you to financial wellness.',
    badge: 'Launching 2026',
    badgeVariant: 'accent' as const,
    link: '/kizu',
    linkText: 'Learn more',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 ease-out z-10 relative">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
    ),
    color: 'group-hover:bg-accent/5',
  },
  {
    id: 'sprint',
    title: 'Sprint Studio',
    description: 'Fixed-scope AI automation sprints for agencies. Automate your delivery workflows in 14 days.',
    badge: 'Taking Clients',
    badgeVariant: 'success' as const,
    link: sprintAppUrl,
    linkText: 'View offers',
    icon: (
      <div className="w-12 h-12 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 ease-out z-10 relative">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
    ),
    color: 'group-hover:bg-success/5',
  }
];

export function Products() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            label="What We Build"
            title="Two focused offerings."
            description="We split our focus between our flagship AI consumer product and specialized automation sprints for high-performing agencies."
            align="left"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card 
                hover 
                className={`h-full group flex flex-col justify-between transition-colors duration-500 border-border/60 ${product.color}`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    {product.icon}
                    <Badge variant={product.badgeVariant} className="font-mono shadow-sm">
                      {product.badge}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed max-w-sm">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border/50 flex justify-start">
                  <Button
                    href={product.link}
                    variant="ghost"
                    size="sm"
                    rightIcon
                    className="px-0 text-primary hover:text-accent font-medium group-hover:translate-x-2 transition-transform"
                  >
                    {product.linkText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
