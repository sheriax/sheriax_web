import { Metadata } from 'next';
import { Badge, Button, Card, SectionHeader } from '@sheriax/ui';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprint Studio — AI Automation Sprints',
  description: 'Fixed-scope AI automation sprints for agencies. Automate your delivery workflows in 14 days.',
};

export default function SprintPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl">
          <Badge variant="accent">Taking Clients</Badge>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-display text-stone-900 tracking-tight leading-[1.1]">
            Sprint Studio — AI Automation in 14 Days
          </h1>
          <p className="mt-5 text-lg text-stone-600 leading-relaxed">
            Fixed-scope AI automation sprints for agencies. We automate your delivery workflows so your team 
            spends less time on admin and more time on strategy.
          </p>
        </div>

        <div className="mt-20">
          <SectionHeader label="Packages" title="Two Sprint Formats" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card hover>
              <Badge variant="accent">Popular</Badge>
              <h3 className="mt-4 text-lg font-display text-stone-900">Agency AI Automation Sprint</h3>
              <p className="mt-1 text-2xl font-bold text-stone-900 font-mono tracking-tight">₹1,50,000</p>
              <p className="text-[11px] text-stone-500 mt-0.5 tracking-wide">2 Weeks · AED 15,000+ for UAE</p>
              <ul className="mt-4 space-y-2.5">
                {['2-3 workflows automated', 'SOP + handover', 'Dashboard views', '2-week support'].map(item => (
                  <li key={item} className="flex gap-2.5 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card hover>
              <Badge variant="default">Quick Start</Badge>
              <h3 className="mt-4 text-lg font-display text-stone-900">Workflow Discovery Sprint</h3>
              <p className="mt-1 text-2xl font-bold text-stone-900 font-mono tracking-tight">₹50,000</p>
              <p className="text-[11px] text-stone-500 mt-0.5 tracking-wide">3 Days · AED 2,500+ for UAE</p>
              <ul className="mt-4 space-y-2.5">
                {['Process audit', 'Bottleneck map', 'Automation matrix', '14-day roadmap'].map(item => (
                  <li key={item} className="flex gap-2.5 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-3">
          <Button href="https://sprint.sheriax.com" variant="primary" size="lg" rightIcon>
            View Full Offers
          </Button>
          <Button href="https://sprint.sheriax.com/book" variant="secondary" size="lg" rightIcon>
            Book Discovery Call
          </Button>
        </div>
      </div>
    </div>
  );
}
