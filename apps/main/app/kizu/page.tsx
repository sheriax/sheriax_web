import { Metadata } from 'next';
import { Badge, Button, Card, SectionHeader } from '@sheriax/ui';

export const metadata: Metadata = {
  title: 'Kizu — AI Financial Recovery',
  description: 'Kizu uses AI to scan your receipts, detect money leaks, and guide you to financial wellness.',
};

const features = [
  {
    title: 'Receipt Scanning',
    description: 'AI-powered receipt scanning that extracts and categorizes your spending automatically.',
  },
  {
    title: 'Wound Detection',
    description: 'Identifies financial wounds — recurring leaks, overspending patterns, and missed savings.',
  },
  {
    title: 'Health Score',
    description: 'Track your financial health score over time as you heal your spending habits.',
  },
];

export default function KizuPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">

        {/* Hero */}
        <div className="max-w-3xl">
          <Badge variant="success">Launching 2026</Badge>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-display text-zinc-900 tracking-tight leading-[1.1]">
            Kizu — Heal Your Financial Wounds
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            Kizu (傷) means &quot;wound&quot; in Japanese. We chose this name because we believe every financial wound —
            whether it&apos;s hidden fees, forgotten subscriptions, or poor spending habits — can be healed with the right
            care and attention.
          </p>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed">
            Built by Sheriax Solutions, Kizu combines our expertise in AI and thoughtful design to create a financial
            companion that truly understands your needs.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20">
          <SectionHeader label="Features" title="How Kizu Works" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <Card key={feature.title} hover>
                <h3 className="text-base font-bold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-3">
          <Button href="https://kizu.in" variant="primary" size="lg" rightIcon>
            Visit kizu.in
          </Button>
          <Button href="https://kizu.in/#waitlist" variant="secondary" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
