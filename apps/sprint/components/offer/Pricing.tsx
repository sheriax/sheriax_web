'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button, SectionHeader } from '@sheriax/ui';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  tag: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  currency?: string;
}

interface PricingProps {
  tiers: PricingTier[];
}

export function Pricing({ tiers }: PricingProps) {
  return (
    <section className="bg-zinc-50/70">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeader
          label="Investment"
          title="Commercial Structure"
        />

        <div className={`mt-12 grid gap-6 lg:gap-8 max-w-4xl mx-auto ${
          tiers.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`relative rounded-2xl overflow-hidden h-full flex flex-col ${
                tier.highlighted
                  ? 'border-2 border-brand-500 shadow-lg'
                  : 'border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
              }`}>
                {tier.highlighted && (
                  <div className="h-1.5 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500" />
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-1 bg-white">
                  <span className={`inline-flex self-start text-xs font-semibold rounded px-2 py-0.5 mb-4 ${
                    tier.highlighted ? 'text-brand-600 bg-brand-50' : 'text-zinc-600 bg-zinc-100'
                  }`}>
                    {tier.tag}
                  </span>

                  <h3 className="text-xl font-bold text-zinc-900">{tier.name}</h3>

                  <div className="mt-4 mb-6">
                    <p className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                      {tier.price}
                    </p>
                    {tier.currency && <p className="text-sm text-zinc-400 mt-1">{tier.currency}</p>}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className="flex gap-3 text-sm text-zinc-700 leading-relaxed">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-brand-500' : 'text-zinc-400'
                        }`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/book"
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    size="md"
                    rightIcon
                    className="w-full justify-center"
                  >
                    Book Discovery Sprint
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
