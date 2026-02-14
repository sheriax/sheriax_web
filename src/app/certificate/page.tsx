'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Award,
  Clock,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function CertificateVerificationPage() {
  const [certificateId, setCertificateId] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = certificateId.trim();
    if (trimmed) {
      router.push(`/certificate/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF7043]/10 border border-[#FF7043]/20">
          <ShieldCheck className="h-8 w-8 text-[#FF7043]" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Certificate Verification
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          Verify the authenticity of certificates issued by Sheriax Solutions.
          Enter the certificate ID found on your document.
        </p>
      </motion.div>

      {/* Verification Form */}
      <motion.div
        className="mt-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="rounded-xl border border-border bg-background shadow-sm p-6">
            <label
              htmlFor="certificate-id"
              className="block text-sm font-medium mb-2"
            >
              Certificate ID
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                <input
                  id="certificate-id"
                  type="text"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                  placeholder="e.g. SHX-SE-2025-0047"
                  className="w-full rounded-lg border border-border bg-transparent pl-10 pr-4 py-3 font-mono text-sm outline-none placeholder:text-foreground/30 focus:ring-2 focus:ring-[#FF7043]/40 focus:border-[#FF7043]/50 transition-all"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <button
                type="submit"
                disabled={!certificateId.trim()}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF7043] text-white px-5 py-3 text-sm font-medium hover:bg-[#FF8A65] transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
              >
                Verify
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-foreground/40">
              The certificate ID is printed at the bottom of your certificate
              (e.g. SHX-SE-2025-0047).
            </p>
          </div>
        </form>
      </motion.div>

      {/* How it works */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-xl font-semibold mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StepCard
            icon={FileCheck}
            step="01"
            title="Enter Certificate ID"
            description="Find the ID on your certificate document and enter it above."
          />
          <StepCard
            icon={Search}
            step="02"
            title="Instant Verification"
            description="We check the ID against our records to confirm authenticity."
          />
          <StepCard
            icon={CheckCircle2}
            step="03"
            title="View Details"
            description="See the certificate details, preview, and download if valid."
          />
        </div>
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        className="mt-16 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/40">
          <span className="flex items-center gap-1.5">
            <Award className="h-4 w-4" />
            DPIIT Recognized Startup
          </span>
          <span className="hidden sm:inline text-foreground/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            Tamper-Proof Records
          </span>
          <span className="hidden sm:inline text-foreground/20">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            Instant Verification
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function StepCard({
  icon: Icon,
  step,
  title,
  description,
}: {
  icon: React.ElementType;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative rounded-xl border border-border p-5 hover:border-[#FF7043]/30 transition-colors"
      whileHover={{ y: -4 }}
    >
      <span className="absolute top-4 right-4 text-3xl font-bold text-foreground/5">
        {step}
      </span>
      <div className="w-10 h-10 rounded-lg bg-[#FF7043]/10 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-[#FF7043]" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-foreground/60">{description}</p>
    </motion.div>
  );
}
