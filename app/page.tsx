'use client';

import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import {
  BrainCircuit,
  Globe,
  Smartphone,
  Search,
  Boxes,
  Star,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-4"
        >
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <Link
            href="/services"
            className="text-sm text-blue-500 hover:underline"
          >
            View all
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
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
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-4">
              <Award className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-foreground/70">Projects Delivered</p>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
              <Star className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold">99%</h3>
            <p className="text-foreground/70">Client Satisfaction</p>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Why Choose Sheriax?</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative problem-solving to
            deliver solutions that drive real business results.
          </p>
        </motion.div>

        {/* Prompt: "Professional team working on innovative technology solutions with AI, robots, and futuristic elements" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 h-64 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center"
        >
          <p className="text-foreground/50 text-center">
            Why Choose Us Hero Image Placeholder
            <br />
            <span className="text-sm">
              Professional team working on innovative technology solutions
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-lg border border-white/10">
            <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold">Future-Ready Solutions</h3>
            <p className="mt-2 text-foreground/70">
              We build with tomorrow&apos;s technology today, ensuring your
              solutions remain competitive and scalable.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10">
            <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">End-to-End Expertise</h3>
            <p className="mt-2 text-foreground/70">
              From AI/ML to web development, we provide comprehensive solutions
              under one roof.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10">
            <CheckCircle className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="mt-2 text-foreground/70">
              Our dedicated team provides ongoing support to ensure your success
              long after deployment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="p-6 rounded-lg bg-blue-500/5 border border-blue-500/20">
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-foreground/70">
              &quot;Igniting Tomorrow&apos;s Marvels Through Revolutionary Tech
              Adventures&quot; — We embark on thrilling, creative tech
              adventures powered by AI and ML. Inspired by Doraemon, Wall‑E,
              Eva, and Big Hero 6, our goal is to build magical, imaginative
              technology that delights.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-purple-500/5 border border-purple-500/20">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-foreground/70">
              &quot;Crafting Tomorrow&apos;s Tech Ecosystem with Intuitive
              Brilliance&quot; — We envision a seamless and trustworthy tech
              ecosystem—smart, intuitive, and impactful. Drawing from the
              creativity of Kitaratsu, the eco‑consciousness of Wall‑E, the
              futuristic nature of Eva, the reliability of Doraemon, and the
              team spirit of Big Hero 6.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Don&apos;t just take our word for it - hear from our satisfied
            clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-foreground/70 mb-4">
              &quot;Sheriax transformed our business with their AI solutions.
              The team&apos;s expertise and dedication exceeded our
              expectations.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-foreground/50">
                  CEO, TechStart Inc.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-foreground/70 mb-4">
              &quot;The mobile app they built for us has been a game-changer.
              User engagement increased by 300% within the first month.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">Mike Chen</p>
                <p className="text-sm text-foreground/50">
                  Founder, EcoTech Solutions
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-foreground/70 mb-4">
              &quot;Outstanding web development service. Our site is now
              lightning-fast and converts visitors into customers
              efficiently.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div>
                <p className="font-medium">Lisa Rodriguez</p>
                <p className="text-sm text-foreground/50">
                  Marketing Director, Global Retail Co.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="rounded-lg border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              Have an idea? Let&apos;s build it.
            </h3>
            <p className="text-foreground/70">
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
