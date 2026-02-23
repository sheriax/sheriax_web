'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Kizu',
    description: 'AI-powered financial recovery. Scans receipts, detects money leaks, and guides you to financial wellness.',
    badge: 'Launching 2026',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    href: '/kizu',
    linkLabel: 'Learn more',
    gradient: 'from-emerald-50/50 to-transparent',
    icon: '/images/kizu/app_logo_transparent.png',
  },
  {
    title: 'Sprint Studio',
    description: 'Fixed-scope AI automation sprints for agencies. Automate your delivery workflows in 14 days.',
    badge: 'Taking Clients',
    badgeColor: 'bg-brand-50 text-brand-600 border-brand-100',
    href: 'https://sprint.sheriax.com',
    linkLabel: 'View offers',
    gradient: 'from-brand-50/50 to-transparent',
    icon: null,
  },
];

export function Products() {
  return (
    <section id="products" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 to-white" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-500">What We Build</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">Products</h2>
          <p className="mt-3 text-base text-stone-600 max-w-lg mx-auto">
            We ship products that automate real workflows and solve hard problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const }}
            >
              <Link href={product.href} className="block group">
                <div className={`relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/[0.04] hover:border-stone-300/60 hover:-translate-y-0.5`}>
                  {/* Subtle gradient top */}
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${product.gradient} pointer-events-none`} />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      {/* Product icon */}
                      {product.icon ? (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100/60 p-1.5 shadow-sm">
                          <Image src={product.icon} alt={product.title} width={36} height={36} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-100/60 flex items-center justify-center shadow-sm">
                          <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                          </svg>
                        </div>
                      )}
                      <div className="flex-1">
                        <span className={`inline-flex px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full border ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                        <h3 className="mt-3 text-xl font-bold text-stone-900 tracking-tight">{product.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] text-stone-600 leading-relaxed">{product.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                      {product.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
