import { Metadata } from 'next';
import { OfferHero } from '@/components/offer/OfferHero';
import { Scope } from '@/components/offer/Scope';
import { Pricing } from '@/components/offer/Pricing';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Agency AI Sprint — UAE',
  description: '2-Week AI Automation Sprint for international agencies. Multi-timezone workflow orchestration in 14 days.',
};

export default function UAEOfferPage() {
  const scopeItems = [
    {
      num: '01',
      title: 'Multi-timezone Workflow Orchestration',
      description: 'Automated scheduling, task handoffs, and deadline management across time zones with smart routing.',
    },
    {
      num: '02',
      title: 'Client Portal Automation',
      description: 'Self-service dashboards for international clients with project status, document sharing, and approval workflows.',
    },
    {
      num: '03',
      title: 'Compliance & Documentation',
      description: 'Automated contract generation, VAT-compliant invoicing, audit trails, and document management.',
    },
  ];

  const pricingTiers = [
    {
      name: 'International Sprint',
      tag: 'Base',
      price: 'AED 15,000+',
      currency: 'Additional workflows: AED 5,000–8,000 each',
      features: [
        '2 workflows automated',
        'Up to 4 integrations',
        'Multi-timezone support',
        'Client portal setup',
      ],
    },
    {
      name: 'Growth Sprint',
      tag: 'Recommended',
      price: 'AED 25,000+',
      currency: 'Optional retainer: AED 3,500/mo',
      highlighted: true,
      features: [
        '4 workflows automated',
        'Up to 8 integrations',
        'Advanced compliance automation',
        'Dashboard + SOP handover',
        'Priority support',
      ],
    },
  ];

  return (
    <>
      <OfferHero
        badgeText="UAE & International"
        title={<>International AI Automation Sprint</>}
        subtitle="For agencies operating across borders that need seamless workflows, client self-service, and compliance automation."
        highlightText="We operate in India Standard Time with strong timezone overlap for UAE clients. Remote delivery with daily async updates and weekly sync calls."
      />
      <Scope items={scopeItems} />
      <Pricing tiers={pricingTiers} />
      <Process />
      <FAQ />
      <BookCTA />
    </>
  );
}
