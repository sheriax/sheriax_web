'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, SectionHeader } from '@sheriax/ui';

interface ScopeItem {
  num: string;
  title: string;
  description: string;
}

interface ScopeProps {
  items: ScopeItem[];
}

export function Scope({ items }: ScopeProps) {
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="What We Automate"
          title="In-Scope Workstreams"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-brand-700 bg-brand-50 rounded px-2 py-0.5">{item.num}</span>
                  <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
