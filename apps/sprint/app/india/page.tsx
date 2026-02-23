import { Metadata } from 'next';
import { OfferHero } from '@/components/offer/OfferHero';
import { Scope } from '@/components/offer/Scope';
import { Pricing } from '@/components/offer/Pricing';
import { Process } from '@/components/home/Process';
import { CaseStudies } from '@/components/home/CaseStudies';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'India Agency AI Automation Sprint | Sheriax Sprint Studio',
  description: '2-Week Agency AI Automation Sprint for Indian marketing and creative agencies. Automate reporting, onboarding, and lead workflows in 14 days.',
};

export default function IndiaOfferPage() {
  const scopeItems = [
    {
      num: '01',
      title: 'Lead -> CRM Pipeline',
      description: 'Capture leads from forms/ads, auto-qualify, route by service type, and assign owner automatically.'
    },
    {
      num: '02',
      title: 'Client Onboarding Flow',
      description: 'Contract signed -> workspace setup -> kickoff checklist -> task templates and reminders auto-generated.'
    },
    {
      num: '03',
      title: 'Reporting + Follow-ups',
      description: 'Weekly/monthly KPI pull, report generation, approval nudges, and invoice/payment follow-up triggers.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter Sprint',
      tag: 'Starter',
      price: '₹1,50,000',
      currency: 'starting',
      features: [
        '2 workflows',
        'Up to 3 integrations',
        '1 AI assistant',
        '1 reporting view'
      ]
    },
    {
      name: 'Growth Sprint',
      tag: 'Recommended',
      price: '₹2,25,000',
      currency: 'starting',
      highlighted: true,
      features: [
        '3 workflows',
        'Up to 5 integrations',
        '2 AI assistants',
        'Dashboard + SOP handover'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <OfferHero 
        badgeText="India Outreach Offer"
        title={<>2-Week Agency <br className="hidden sm:block" /> AI Automation Sprint</>}
        subtitle="For marketing and creative agencies that need faster reporting, smoother handoffs, and less manual ops."
        highlightText="We automate your delivery workflows in 14 days so your team spends less time on repetitive admin and more time on strategy + client outcomes."
      />
      <Scope items={scopeItems} />
      <Pricing tiers={pricingTiers} />
      <Process />
      <CaseStudies />
      <FAQ />
      <BookCTA />
    </div>
  );
}
