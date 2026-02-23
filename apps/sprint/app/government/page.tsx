import { Metadata } from 'next';
import { OfferHero } from '@/components/offer/OfferHero';
import { Scope } from '@/components/offer/Scope';
import { Pricing } from '@/components/offer/Pricing';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Government AI Automation Sprint | Sheriax Sprint Studio',
  description: '2-Week Government AI Automation Sprint. Sovereign-ready automation for public-sector workflows in Abu Dhabi. Fixed-fee, 14-day delivery.',
};

export default function GovernmentOfferPage() {
  const scopeItems = [
    {
      num: '01',
      title: 'RFP Automation',
      description: 'Ingest RFP packets, auto-classify requirements, route to owners, and track response status from intake to submission prep.'
    },
    {
      num: '02',
      title: 'TAMM-Compliant Reporting Dashboards',
      description: 'Configure executive and operational reporting views aligned to TAMM-style service metrics, SLA visibility, and exception tracking.'
    },
    {
      num: '03',
      title: 'Compliance Document Processing',
      description: 'Automate document intake, validation checkpoints, metadata tagging, and review queues for policy and compliance operations.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Government Sprint',
      tag: 'Sovereign-Ready',
      price: 'AED 15,000+',
      currency: 'starting',
      highlighted: true,
      features: [
        'Fixed sprint fee based on integrations',
        'Sovereign infrastructure compliant',
        'Data residency locked controls',
        'Payment terms: 50% kick-off / 50% handover',
        'Optional monthly support retainer'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <OfferHero 
        badgeText="Government Variant · Abu Dhabi"
        title={<>2-Week Government <br className="hidden sm:block" /> AI Automation Sprint</>}
        subtitle="Fast-track sovereign-ready automation for public-sector workflows without replacing existing core systems."
        highlightText="Sovereign-compliant workflow automation on UAE infrastructure. No public cloud leakage. No off-jurisdiction data routing. Execution aligned to agency controls."
      />
      <Scope items={scopeItems} />
      <Pricing tiers={pricingTiers} />
      <Process />
      <FAQ />
      <BookCTA />
    </div>
  );
}
