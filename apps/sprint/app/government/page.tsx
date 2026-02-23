import { Metadata } from 'next';
import { OfferHero } from '@/components/offer/OfferHero';
import { Scope } from '@/components/offer/Scope';
import { Pricing } from '@/components/offer/Pricing';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Government AI Automation',
  description: '2-Week Government AI Automation Sprint. Sovereign-ready automation for public-sector workflows. Fixed-fee, 14-day delivery.',
};

export default function GovernmentOfferPage() {
  const scopeItems = [
    {
      num: '01',
      title: 'RFP Automation',
      description: 'Ingest RFP packets, auto-classify requirements, route to owners, and track response status from intake to submission prep.',
    },
    {
      num: '02',
      title: 'TAMM-Compliant Reporting Dashboards',
      description: 'Configure executive and operational reporting views aligned to TAMM-style service metrics, SLA visibility, and exception tracking.',
    },
    {
      num: '03',
      title: 'Compliance Document Processing',
      description: 'Automate document intake, validation checkpoints, metadata tagging, and review queues for policy and compliance operations.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Government Sprint',
      tag: 'Sovereign-Ready',
      price: 'AED 15,000 – 25,000',
      currency: '₹3.4L – ₹5.6L equivalent',
      highlighted: true,
      features: [
        'Fixed sprint fee based on complexity',
        'Sovereign infrastructure compliant',
        'No data leaves controlled infrastructure',
        'Audit trails built into every automation',
        'Payment: 50% kickoff · 50% handover',
        'Optional monthly support retainer',
      ],
    },
  ];

  return (
    <>
      <OfferHero
        badgeText="Government Variant · Abu Dhabi"
        title={<>Government AI Automation Sprint</>}
        subtitle="Fast-track sovereign-ready automation for public-sector workflows without replacing existing core systems."
        highlightText="Sovereign-compliant workflow automation on UAE infrastructure. No public cloud leakage. No off-jurisdiction data routing. Execution aligned to agency controls."
        highlightIcon={
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        }
      />
      <Scope items={scopeItems} />
      <Pricing tiers={pricingTiers} />
      <Process />
      <FAQ />
      <BookCTA />
    </>
  );
}
