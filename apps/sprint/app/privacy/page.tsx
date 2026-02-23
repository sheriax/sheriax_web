import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sheriax Sprint Studio',
  description: 'Privacy Policy for Sheriax Sprint Studio.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8 text-primary uppercase">Privacy Policy</h1>
        <div className="prose prose-sm dark:prose-invert text-text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Sheriax Sprint Studio Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
