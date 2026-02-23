import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sheriax Sprint Studio',
  description: 'Terms of Service for Sheriax Sprint Studio.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8 text-primary uppercase">Terms of Service</h1>
        <div className="prose prose-sm dark:prose-invert text-text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Sheriax Sprint Studio Terms of Service.</p>
        </div>
      </div>
    </div>
  );
}
