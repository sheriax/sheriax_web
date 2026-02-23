import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { sprintAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sprint Studio — AI Automation Sprints',
  description: 'Fixed-scope AI automation sprints for agencies. Automate your delivery workflows in 14 days.',
};

export default function SprintPage() {
  const packages = [
    {
      title: 'Agency Sprint',
      price: '₹1.5L',
      description: 'End-to-end automation of 2-3 core workflows with complete handover documentation in 14 days.',
    },
    {
      title: 'Discovery Sprint',
      price: '₹50K',
      description: 'A 3-day deep dive mapping bottlenecks and delivering an automation roadmap.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface-dark py-24 md:py-32 border-b border-border-dark relative overflow-hidden">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none mix-blend-screen opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-10 shadow-xl shadow-accent/20 relative">
          <svg className="w-10 h-10 text-accent/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        <Badge variant="accent" className="mb-6 px-4 font-mono tracking-wider shadow-sm uppercase shadow-accent/20 border-accent/40 bg-accent/10">
          Taking Clients
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Sprint Studio — <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">AI Automation in 14 Days</span>
        </h1>
        
        <p className="text-xl text-text-muted font-light mb-16 leading-relaxed max-w-2xl mx-auto">
          We strip away the endless consulting and build production-ready automation workflows for agencies. Predictable scope, fixed pricing, and delivery in exactly two weeks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.title} className="text-left bg-transparent border-border-dark/60 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-white">
                  {pkg.title}
                </h3>
                <span className="text-accent font-mono text-sm tracking-wider bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                  {pkg.price}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {pkg.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href={sprintAppUrl} variant="primary" size="lg" className="w-full sm:w-auto overflow-hidden relative group">
            <span className="relative z-10 flex items-center">
              View Full Offers <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Button>
          <Button href={`${sprintAppUrl}/book`} variant="secondary" size="lg" className="w-full sm:w-auto !border-border-dark/80 text-white hover:text-white hover:bg-white/5">
            Book Discovery Call
          </Button>
        </div>
      </div>
    </div>
  );
}
