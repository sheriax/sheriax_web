import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { kizuAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kizu — AI Financial Recovery',
  description: 'AI-powered financial recovery app. Scans receipts, detects money leaks, and guides you to financial wellness.',
};

export default function KizuPage() {
  const features = [
    {
      title: 'Receipt Scanning',
      description: 'Automatically extract line items and categorize expenses with unmatched AI precision.',
    },
    {
      title: 'Wound Detection',
      description: 'Identify hidden subscriptions and money leaks bleeding your account dry.',
    },
    {
      title: 'Health Score',
      description: 'Get actionable insights and a daily financial health score to stay on track.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-10 shadow-lg shadow-success/10">
          <svg className="w-10 h-10 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>

        <Badge variant="success" className="mb-6 animate-pulse">
          Launching 2026
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Kizu — Heal Your <br className="hidden md:block"/> Financial Wounds
        </h1>
        
        <p className="text-xl text-text-muted font-light mb-16 leading-relaxed max-w-2xl mx-auto">
          We built Kizu to stop the bleeding. It’s an AI-powered financial recovery system that scans your receipts, spots your money leaks, and coaches you to a healthier bank balance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left bg-transparent border-border/60 hover:border-success/30 transition-colors">
              <h3 className="font-bold text-lg text-primary mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-success mr-2 block"/>
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href={kizuAppUrl} variant="primary" size="lg" className="w-full sm:w-auto bg-success hover:bg-success/90">
            Visit kizu.in <span className="ml-2 font-mono opacity-60">↗</span>
          </Button>
          <Button href={`${kizuAppUrl}/waitlist`} variant="secondary" size="lg" className="w-full sm:w-auto">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
