import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using Sheriax Solutions services and products.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-foreground/60 mb-8">Last updated: January 10, 2026</p>

      <article className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-foreground/70 mb-4">
            By accessing or using services provided by Sheriax Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, 
            please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="text-foreground/70 mb-4">
            Sheriax Solutions provides technology consulting and development services including:
          </p>
          <ul className="list-disc pl-6 text-foreground/70 space-y-2">
            <li>AI & Machine Learning solutions</li>
            <li>Web development</li>
            <li>Mobile app development</li>
            <li>SEO services</li>
            <li>AR/VR development</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
          <p className="text-foreground/70 mb-4">As a client, you agree to:</p>
          <ul className="list-disc pl-6 text-foreground/70 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Use our services only for lawful purposes</li>
            <li>Pay for services as agreed in project contracts</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-foreground/70 mb-4">
            Unless otherwise specified in a project agreement, intellectual property rights for 
            deliverables will be transferred to the client upon full payment. Sheriax Solutions 
            retains rights to use anonymized work samples in our portfolio.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-foreground/70 mb-4">
            To the maximum extent permitted by law, Sheriax Solutions shall not be liable for 
            any indirect, incidental, special, or consequential damages arising from your use 
            of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-foreground/70 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of India.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
          <p className="text-foreground/70 mb-4">
            For questions about these Terms, please contact us at:{' '}
            <a href="mailto:legal@sheriax.com" className="text-blue-400 hover:underline">
              legal@sheriax.com
            </a>
          </p>
        </section>

        {/* Product-Specific Terms */}
        <section className="mt-16 p-6 rounded-xl border border-border bg-secondary/20">
          <h2 className="text-xl font-semibold mb-4">Product-Specific Terms of Service</h2>
          <p className="text-foreground/70 mb-4">
            Our products have their own detailed terms of service:
          </p>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://kizu.in/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF7043] hover:underline"
              >
                Kizu Terms of Service <ExternalLink size={14} />
              </a>
              <span className="text-foreground/50"> — AI-powered financial recovery app</span>
            </li>
            <li>
              <a 
                href="https://nidaa.app/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:underline"
              >
                Nidaa Terms of Service <ExternalLink size={14} />
              </a>
              <span className="text-foreground/50"> — Mosque prayer times app</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
