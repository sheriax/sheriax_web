import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sheriax',
  description: 'Privacy Policy for Sheriax Solutions and our products.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-sm dark:prose-invert text-text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder for the Sheriax Privacy Policy. Please consult legal counsel to generate a comprehensive privacy policy tailored to your business operations.</p>
        </div>
      </div>
    </div>
  );
}
