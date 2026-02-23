/* eslint-disable @next/next/no-img-element */
'use client';

import ServiceCard from '@/components/ServiceCard';
import { BrainCircuit, Globe, Smartphone, Search, Boxes, ArrowRight } from 'lucide-react';
import { motion } from '@/components/ui/motion';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Kizu Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-4 rounded-xl border border-[#FF7043]/30 bg-gradient-to-r from-[#FF7043]/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦊</span>
            <p className="text-foreground/80">
              Looking for our AI financial product?{' '}
              <span className="font-medium text-[#FF7043]">Try Kizu</span> — AI-powered financial recovery.
            </p>
          </div>
          <Link
            href="/kizu"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF7043] text-white text-sm font-medium hover:bg-[#FF8A65] transition-colors whitespace-nowrap"
          >
            Learn more <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="mb-12 text-center">
          <p className="text-sm text-[#FF7043] font-medium mb-2">By the Makers of Kizu</p>
          <h1 className="text-4xl font-bold mb-4">Custom Development Services</h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Explore our comprehensive range of services that blend cutting-edge
            AI, thoughtful design, and robust engineering to build intuitive,
            future-ready products that transform businesses and delight users.
          </p>
          <div className="mt-8 h-[24rem] rounded-lg overflow-hidden border border-border">
          <img
            src="/images/services-showcase-holographic.jpeg"
            alt="Technology services showcase with floating holographic icons"
            className="w-full h-full object-cover"
          />
        </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ServiceCard
            title="AI & ML"
            href="/services/ai-ml"
            icon={BrainCircuit}
          />
          <ServiceCard
            title="Web Development"
            href="/services/web-development"
            icon={Globe}
          />
          <ServiceCard
            title="Mobile App Development"
            href="/services/mobile-app"
            icon={Smartphone}
          />
          <ServiceCard title="SEO" href="/services/seo" icon={Search} />
          <ServiceCard title="AR/VR" href="/services/ar-vr" icon={Boxes} />
        </motion.div>

        {/* Additional Content Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why Choose Our Services?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">End-to-End Solutions</h3>
                  <p className="text-foreground/70">
                    From ideation to deployment, we handle every aspect of your
                    project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Cutting-Edge Technology</h3>
                  <p className="text-foreground/70">
                    We leverage the latest technologies and frameworks for
                    optimal results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Future-Ready Approach</h3>
                  <p className="text-foreground/70">
                    Built for scalability and adaptability to evolving business
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Process</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Discovery & Planning</h3>
                  <p className="text-foreground/70 text-sm">
                    Understanding your goals and requirements
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Design & Prototype</h3>
                  <p className="text-foreground/70 text-sm">
                    Creating user-centered designs and prototypes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Development & Testing</h3>
                  <p className="text-foreground/70 text-sm">
                    Building and rigorously testing your solution
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Launch & Support</h3>
                  <p className="text-foreground/70 text-sm">
                    Deploying and providing ongoing maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
