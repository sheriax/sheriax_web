import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Sheriax Solutions protects your data and privacy across our services and products.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-foreground/60 mb-8">Last updated: January 10, 2026</p>

      <article className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-foreground/70 mb-4">
            Sheriax Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you use our services and products.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-foreground/70 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-foreground/70 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us or sign up for our services.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our websites and services.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information for analytics and security.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-foreground/70 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To communicate with you about projects and updates</li>
            <li>To improve our services and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-foreground/70 mb-4">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-foreground/70 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-foreground/70 space-y-2">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-foreground/70 mb-4">
            For any privacy-related questions, please contact us at:{' '}
            <a href="mailto:privacy@sheriax.com" className="text-blue-400 hover:underline">
              privacy@sheriax.com
            </a>
          </p>
        </section>

        {/* Product-Specific Policies */}
        <section className="mt-16 p-6 rounded-xl border border-border bg-secondary/20">
          <h2 className="text-xl font-semibold mb-4">Product-Specific Privacy Policies</h2>
          <p className="text-foreground/70 mb-4">
            Our products have their own detailed privacy policies:
          </p>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://kizu.in/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF7043] hover:underline"
              >
                Kizu Privacy Policy <ExternalLink size={14} />
              </a>
              <span className="text-foreground/50"> — AI-powered financial recovery app</span>
            </li>
            <li>
              <a 
                href="https://nidaa.app/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:underline"
              >
                Nidaa Privacy Policy <ExternalLink size={14} />
              </a>
              <span className="text-foreground/50"> — Mosque prayer times app</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
