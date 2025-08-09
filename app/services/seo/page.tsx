/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { ArrowRight, Search, BarChart2, Code2, FileText } from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function SEOPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Prompt: "Search engine optimization dashboard with graphs and keywords" */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">SEO</h1>
        <p className="mt-4 text-xl text-foreground/70 max-w-4xl">
          Improve your visibility and organic traffic with technical, on-page,
          and content SEO strategies. We build sustainable growth through
          data-driven optimization.
        </p>
        <div className="mt-8 h-72 rounded-lg overflow-hidden border border-white/10">
          <img
            src="/images/seo-analytics-dashboard.jpeg"
            alt="Search engine optimization dashboard with graphs and keywords"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <BarChart2 className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-medium">Technical audits & site health</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Crawlability, site speed, and structured data fixes.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Search className="w-7 h-7 text-green-500 mb-3" />
            <h3 className="font-medium">Keyword strategy & content planning</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Map search intent to topics and content funnels.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Code2 className="w-7 h-7 text-purple-500 mb-3" />
            <h3 className="font-medium">On-page optimization & schema</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Semantic HTML, metadata, and rich results markup.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <FileText className="w-7 h-7 text-yellow-500 mb-3" />
            <h3 className="font-medium">Monitoring & reporting</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Dashboards for rankings, traffic, and conversions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg border border-white/10 p-8 text-center">
          <h3 className="text-xl font-semibold">
            Ready to grow organic traffic?
          </h3>
          <p className="mt-2 text-foreground/70">
            Let&apos;s build a roadmap to rank higher and faster.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
