import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sheriax',
  description: 'Terms of Service for Sheriax Solutions.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-sm dark:prose-invert text-text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Sheriax Terms of Service. Please consult legal counsel to generate a comprehensive terms document tailored to your business operations.</p>
        </div>
      </div>
    </div>
  );
}
