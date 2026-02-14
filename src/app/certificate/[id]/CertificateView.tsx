'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Download,
  Award,
  Building2,
  Calendar,
  Hash,
  User,
  ArrowLeft,
} from 'lucide-react';
import { motion } from '@/components/ui/motion';
import type { Certificate } from '@/lib/certificates';

interface CertificateViewProps {
  certificate: Certificate | null;
  id: string;
}

export function CertificateView({ certificate, id }: CertificateViewProps) {
  if (!certificate) {
    return <NotFound id={id} />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/certificate"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Verify another certificate
        </Link>
      </motion.div>

      {/* Verified Banner */}
      <motion.div
        className="flex items-center gap-4 rounded-xl px-6 py-5 mb-8"
        style={{
          backgroundColor: 'var(--verified-bg)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--verified-border)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--verified-icon-bg)' }}
        >
          <ShieldCheck
            className="h-6 w-6"
            style={{ color: 'var(--verified-icon)' }}
          />
        </div>
        <div>
          <p
            className="text-lg font-semibold"
            style={{ color: 'var(--verified-title)' }}
          >
            Certificate Verified
          </p>
          <p className="text-sm" style={{ color: 'var(--verified-text)' }}>
            This certificate was issued by Sheriax Solutions and is authentic.
          </p>
        </div>
      </motion.div>

      {/* Certificate Details Card */}
      <motion.div
        className="rounded-xl border border-border overflow-hidden mb-8"
        style={{ backgroundColor: 'var(--background)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div
          className="border-b border-border px-6 py-4 flex items-center gap-3"
          style={{ backgroundColor: 'var(--card-header-bg)' }}
        >
          <Award className="h-5 w-5 text-[#FF7043]" />
          <h1 className="text-xl font-semibold">Certificate Details</h1>
        </div>

        <div className="px-6 py-6 space-y-5">
          <DetailRow
            icon={<Hash className="h-4 w-4" />}
            label="Certificate ID"
            value={certificate.id}
            mono
          />
          <DetailRow
            icon={<User className="h-4 w-4" />}
            label="Recipient"
            value={certificate.name}
          />
          <DetailRow
            icon={<Award className="h-4 w-4" />}
            label="Program"
            value={certificate.program}
          />
          <DetailRow
            icon={<Calendar className="h-4 w-4" />}
            label="Issue Date"
            value={certificate.issueDate}
          />
          <DetailRow
            icon={<Building2 className="h-4 w-4" />}
            label="Issuing Organization"
            value="Sheriax Solutions (OPC) Private Limited"
          />
        </div>
      </motion.div>

      {/* Certificate Preview */}
      <motion.div
        className="rounded-xl border border-border overflow-hidden mb-8"
        style={{ backgroundColor: 'var(--background)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="border-b border-border px-6 py-4"
          style={{ backgroundColor: 'var(--card-header-bg)' }}
        >
          <h2 className="text-lg font-semibold">Certificate Preview</h2>
        </div>
        <div className="aspect-[4/3]" style={{ backgroundColor: 'var(--muted)' }}>
          <iframe
            src={certificate.url}
            className="w-full h-full border-0"
            title={`Certificate ${certificate.id}`}
          />
        </div>
      </motion.div>

      {/* Download Button */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FF7043] hover:bg-[#FF8A65] text-white px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
        >
          <Download className="h-5 w-5" />
          Download Certificate
        </a>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="text-center text-sm text-foreground/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Issued by Sheriax Solutions &middot; DPIIT Recognized Startup &ndash;
        Government of India
      </motion.p>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
  mono,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-foreground/30">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p
          className={`mt-0.5 font-medium ${mono ? 'font-mono text-[#FF7043]' : ''}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function NotFound({ id }: { id: string }) {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-12"
      >
        <Link
          href="/certificate"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to verification
        </Link>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            backgroundColor: 'var(--error-bg)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--error-border)',
          }}
        >
          <AlertTriangle
            className="h-8 w-8"
            style={{ color: 'var(--error-icon)' }}
          />
        </div>
        <h1 className="text-2xl font-bold mb-3">Certificate Not Found</h1>
        <p className="text-foreground/60 mb-2">
          The certificate ID{' '}
          <span className="font-mono font-medium text-foreground/80 bg-muted px-1.5 py-0.5 rounded text-sm">
            {id}
          </span>{' '}
          could not be verified.
        </p>
        <p className="text-muted-foreground text-sm mb-8">
          Please double-check the ID and try again. If you believe this is an
          error, contact us at{' '}
          <a
            href="mailto:hi@sheriax.com"
            className="text-[#FF7043] hover:underline"
          >
            hi@sheriax.com
          </a>
          .
        </p>
        <Link
          href="/certificate"
          className="inline-flex items-center gap-2 rounded-lg border border-border hover:bg-muted px-5 py-2.5 font-medium transition-colors"
        >
          Try Again
        </Link>
      </motion.div>
    </div>
  );
}
