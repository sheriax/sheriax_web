/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from '@/components/ui/motion';
import {
  ScanLine,
  ShieldAlert,
  HeartPulse,
  MessageCircleHeart,
  Upload,
  AlertTriangle,
  TrendingUp,
  Lock,
  Sparkles,
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import WaitlistForm from '@/components/WaitlistForm';

export default function KizuPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--kizu-orange)]/10 via-purple-900/10 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--kizu-orange)]/10 border border-[var(--kizu-orange)]/30 text-sm text-[var(--kizu-coral)] mb-6">
                <Sparkles size={14} />
                <span>AI-Powered Financial Recovery</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Meet{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--kizu-orange)] to-[var(--kizu-coral)]">
                  Kizu
                </span>
              </h1>

              <p className="mt-6 text-xl text-foreground/70 max-w-xl">
                Your AI companion for financial healing. Kizu (傷) means
                &quot;wound&quot; in Japanese — because we believe every
                financial wound can be healed.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30">
                <span className="text-xs text-foreground/60">
                  By Sheriax Solutions · DPIIT Recognized Startup
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--kizu-orange)] text-white px-6 py-3 text-sm font-medium hover:bg-[var(--kizu-coral)] transition-all duration-300 hover:scale-105"
                >
                  Join the Waitlist <ArrowRight size={16} />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-secondary/50 transition-all"
                >
                  See Features
                </Link>
                <a
                  href="https://kizu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--kizu-orange)]/30 text-[var(--kizu-orange)] px-6 py-3 text-sm font-medium hover:bg-[var(--kizu-orange)]/10 transition-all"
                >
                  Visit kizu.in <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--kizu-orange)]/30 to-transparent blur-3xl rounded-full scale-125"></div>
                <motion.img
                  src="/images/kizu/app_mascot_transparent.png"
                  alt="Kizu Fox Mascot"
                  className="relative w-72 sm:w-80 lg:w-96 h-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section id="features" className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">
              Complete Financial Healing Suite
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to diagnose, treat, and recover from financial
              wounds.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureBlock
              icon={ScanLine}
              title="AI Receipt Scanning"
              description="Point your camera at any receipt, bill, or invoice. Our AI instantly extracts merchant, amount, date, and category — no manual entry needed."
              features={[
                'Works with wrinkled or faded receipts',
                'Supports multiple languages',
                'Automatic categorization',
                'Export to spreadsheet',
              ]}
            />
            <FeatureBlock
              icon={ShieldAlert}
              title="Wound Detection"
              description="Kizu continuously monitors your spending patterns to identify financial wounds before they become critical."
              features={[
                'Hidden subscription alerts',
                'Unusual fee detection',
                'Spending pattern analysis',
                'Automatic cancellation assistance',
              ]}
            />
            <FeatureBlock
              icon={HeartPulse}
              title="Financial Health Score"
              description="Your Kizu Score is a comprehensive 0-100 rating of your financial wellness, updated in real-time."
              features={[
                'Personalized scoring algorithm',
                'Improvement recommendations',
                'Progress tracking over time',
                'Benchmark comparison',
              ]}
            />
            <FeatureBlock
              icon={MessageCircleHeart}
              title="AI Therapist"
              description="Chat with Kizu anytime for personalized financial advice, budgeting help, or just to vent about money stress."
              features={[
                '24/7 availability',
                'No judgment, just support',
                'Actionable advice',
                'Emotional intelligence',
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">How Kizu Works</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Your journey to financial wellness in three steps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 relative"
          >
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--kizu-orange)]/50 via-[var(--kizu-coral)]/50 to-[var(--kizu-success)]/50 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <StepBlock
                number={1}
                icon={Upload}
                title="Connect & Scan"
                description="Link your bank accounts or snap photos of receipts. Kizu securely analyzes your financial data."
              />
              <StepBlock
                number={2}
                icon={AlertTriangle}
                title="Diagnose Wounds"
                description="Our AI identifies money leaks, hidden fees, forgotten subscriptions, and spending inefficiencies."
              />
              <StepBlock
                number={3}
                icon={TrendingUp}
                title="Heal & Thrive"
                description="Follow personalized treatment plans, track your progress, and watch your Kizu Score improve."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-sm text-green-400 mb-6">
                <Lock size={14} />
                <span>Your Data, Your Control</span>
              </div>

              <h2 className="text-3xl font-bold">Privacy-First Design</h2>
              <p className="mt-4 text-lg text-foreground/70">
                We built Kizu with privacy at its core. Your financial data is
                encrypted, never sold, and you can delete it anytime.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'End-to-end encryption for all data',
                  'No data selling to third parties',
                  'Complete data deletion on request',
                  'Transparent data usage policies',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check size={14} className="text-green-400" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/images/kizu/app_logo_transparent.png"
                alt="Kizu Logo"
                className="w-64 h-64 opacity-50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">Simple Pricing</h2>
            <p className="mt-4 text-lg text-foreground/70">Start healing for free, upgrade when ready</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Free Plan */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-2xl font-bold">Free</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-foreground/50">/forever</span>
              </div>
              <p className="mt-4 text-foreground/60">Essential tools to start your healing process.</p>
              <ul className="mt-6 space-y-4">
                {[
                  'Unlimited manual transactions',
                  '30 AI scans/month (~1/day)',
                  '3 Accounts & Budgets',
                  '1 Year Transaction History',
                  '10 Kizu AI queries/month',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <Check size={18} className="text-[var(--kizu-success)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#waitlist"
                className="mt-8 block w-full py-3 text-center rounded-full border border-border font-medium hover:bg-secondary transition-colors"
              >
                Join Waitlist – Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm relative">
              <div className="absolute -top-3 right-6 px-4 py-1 bg-[var(--kizu-orange)] text-white text-sm font-medium rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold">Kizu Pro</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xl text-foreground/40 line-through">₹249</span>
                <span className="text-4xl font-bold text-[var(--kizu-orange)]">₹0</span>
                <span className="text-foreground/50">/month</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-[var(--kizu-success)]/10 text-[var(--kizu-success)] text-sm rounded-md">
                <Sparkles size={14} />
                Free for Beta Users
              </div>
              <p className="mt-4 text-foreground/60">Full access to medical-grade financial care.</p>
              <ul className="mt-6 space-y-4">
                {[
                  'Unlimited AI Scans',
                  'Unlimited Accounts & Budgets',
                  'Unlimited History & AI Queries',
                  'Cloud Backup',
                  'CSV + PDF Export',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <Check size={18} className="text-[var(--kizu-success)] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#waitlist"
                className="mt-8 block w-full py-3 text-center rounded-full bg-[var(--kizu-orange)] text-white font-medium hover:bg-[var(--kizu-coral)] transition-colors"
              >
                Get Early Pro Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 space-y-4"
          >
            <FAQItem
              question="What does Kizu mean?"
              answer="Kizu (傷) means 'wound' in Japanese. We chose this name because we believe every financial wound — whether it's debt, overspending, or hidden fees — can be healed with the right care and attention."
            />
            <FAQItem
              question="Is my financial data safe?"
              answer="Absolutely. All data is encrypted end-to-end, we never sell your information to third parties, and you can request complete data deletion at any time."
            />
            <FAQItem
              question="How does the AI receipt scanning work?"
              answer="Simply take a photo of any receipt, bill, or invoice. Our AI reads the text, extracts key information (merchant, amount, date, items), and automatically categorizes it for you."
            />
            <FAQItem
              question="When will Kizu launch?"
              answer="We're currently in development and will launch soon. Join our waitlist to be the first to know and get early access perks!"
            />
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="/images/kizu/app_mascot_transparent.png"
              alt="Kizu Mascot"
              className="w-32 h-32 mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold">
              Ready to Heal Your Finances?
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
              Join our waitlist and be the first to experience AI-powered
              financial recovery. Early supporters get exclusive perks!
            </p>

            <div className="mt-8">
              <WaitlistForm plan="free" />
            </div>

            <p className="mt-4 text-sm text-foreground/50">
              🚀 Launching Soon · No spam, just updates
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Feature Block Component
function FeatureBlock({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border hover:border-[var(--kizu-orange)]/30 transition-colors"
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--kizu-orange)]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[var(--kizu-orange)]" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-foreground/70">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground/60">
            <Check size={14} className="text-[var(--kizu-orange)]" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// Step Block Component
function StepBlock({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="relative text-center p-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-background border-2 border-[var(--kizu-orange)] flex items-center justify-center mb-4 relative z-10">
        <Icon className="w-7 h-7 text-[var(--kizu-orange)]" />
      </div>
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-foreground/5">
        {number}
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </div>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          size={20}
          className={`text-foreground/50 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-foreground/70">{answer}</p>
        </div>
      )}
    </div>
  );
}
