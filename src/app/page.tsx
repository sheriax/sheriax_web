/* eslint-disable @next/next/no-img-element */
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
  ScanLine,
  ShieldAlert,
  HeartPulse,
  MessageCircleHeart,
  Upload,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Kizu Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">
            Comprehensive Care for Your{' '}
            <span className="text-[#FF7043]">Wallet</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Kizu provides the medical-grade attention your finances deserve,
            powered by advanced artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <FeatureCard
            icon={ScanLine}
            title="AI Receipt Scanning"
            description="Instant diagnosis. Snap a photo of any receipt or invoice, and our AI extracts every detail to find financial leaks."
            color="#FF7043"
          />
          <FeatureCard
            icon={ShieldAlert}
            title="Wound Detection"
            description="Stop the bleeding. We automatically identify hidden fees, forgotten subscriptions, and wasteful spending habits."
            color="#FF8A65"
          />
          <FeatureCard
            icon={HeartPulse}
            title="Financial Health Score"
            description="Your vitals at a glance. Track your Kizu Score from 0-100 and watch it improve as you heal your finances."
            color="#4CAF50"
          />
          <FeatureCard
            icon={MessageCircleHeart}
            title="AI Therapist"
            description="24/7 Care. Chat with Kizu to get personalized advice, budgeting tips, and emotional support for your money stress."
            color="#3b82f6"
          />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">The Healing Process</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Three simple steps to financial recovery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <StepCard
            step="01"
            icon={Upload}
            title="Scan & Diagnose"
            description="Upload receipts, invoices, or connect your bank. Kizu digitizes and analyzes your financial history."
          />
          <StepCard
            step="02"
            icon={AlertTriangle}
            title="Detect Wounds"
            description="Our AI identifies money leaks, hidden fees, and subscriptions that are bleeding your budget dry."
          />
          <StepCard
            step="03"
            icon={TrendingUp}
            title="Heal & Recover"
            description="Follow your personalized treatment plan to cut costs, save money, and improve your Kizu Score."
          />
        </motion.div>
      </section>

      {/* Transformation Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Real Transformations</h2>
          <p className="mt-4 text-lg text-foreground/70">
            See how Kizu heals financial wounds over time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <TransformationCard
            stage="Critical Condition"
            score={23}
            status="Multiple financial wounds detected."
            color="red"
          />
          <TransformationCard
            stage="Healing Started"
            score={58}
            status="Bleeding stopped, wounds treating."
            color="yellow"
          />
          <TransformationCard
            stage="Fully Healed"
            score={92}
            status="Financial wellness achieved."
            color="green"
          />
        </motion.div>
      </section>

      {/* Services Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm text-[#FF7043] font-medium mb-2">
              Need Custom Development?
            </p>
            <h2 className="text-2xl font-semibold">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-blue-500 hover:underline flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
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

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
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
          <TestimonialCard
            quote="The JavaScript implementation exceeded my expectations completely. The final product delivered exceptional quality and performance that truly impressed us."
            name="Karthi"
            title="CEO, Cappricio Securities"
          />
          <TestimonialCard
            quote="Working with Sheriax has been incredibly smooth and efficient. Their attention to detail and quick response to any issues is remarkable - when we encountered a minor bug, they resolved it within hours."
            name="Amjath"
            title="Co-Founder, Tulips Organization"
          />
          <TestimonialCard
            quote="I'm really happy with the website's simplicity as well as the richness of the design. I'm looking forward to work with you in the future."
            name="Venkat"
            title="Founder, Snowbirds"
          />
        </motion.div>
      </section>

      {/* Kizu CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="rounded-2xl border border-[#FF7043]/30 bg-gradient-to-r from-[#FF7043]/10 to-[#FF8A65]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <img
              src="/images/kizu/app_logo_transparent.png"
              alt="Kizu"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div>
              <h3 className="text-2xl font-bold">Ready to heal your finances?</h3>
              <p className="text-foreground/70 mt-1">
                Join the financial healing revolution. Be the first to know when
                Kizu launches.
              </p>
              <p className="text-sm text-[#FF7043] mt-2">
                🚀 Launching Soon · Early access perks included
              </p>
            </div>
          </div>
          <Link
            href="/kizu"
            className="inline-flex items-center gap-2 rounded-md bg-[#FF7043] text-white px-6 py-3 text-sm font-medium hover:bg-[#FF8A65] transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Get Early Access <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
      whileHover={{ y: -4 }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </motion.div>
  );
}

// Step Card Component
function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: {
  step: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative p-6 rounded-xl border border-border hover:border-[#FF7043]/30 transition-colors"
      whileHover={{ y: -4 }}
    >
      <span className="absolute top-4 right-4 text-4xl font-bold text-foreground/5">
        {step}
      </span>
      <div className="w-12 h-12 rounded-lg bg-[#FF7043]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#FF7043]" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </motion.div>
  );
}

// Transformation Card Component
function TransformationCard({
  stage,
  score,
  status,
  color,
}: {
  stage: string;
  score: number;
  status: string;
  color: 'red' | 'yellow' | 'green';
}) {
  const colorMap = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  };

  return (
    <motion.div
      className={`p-6 rounded-xl border ${colorMap[color].border} ${colorMap[color].bg}`}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-semibold ${colorMap[color].text}`}>{stage}</h3>
        <span className={`text-2xl font-bold ${colorMap[color].text}`}>{score}</span>
      </div>
      <div className="w-full bg-secondary/30 rounded-full h-2 mb-4">
        <div
          className={`h-2 rounded-full ${color === 'red' ? 'bg-red-500' : color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <p className="text-sm text-foreground/70">{status}</p>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-border">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-foreground/70 mb-4">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-[#FF7043] to-[#FF8A65] rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-foreground/50">{title}</p>
        </div>
      </div>
    </div>
  );
}
