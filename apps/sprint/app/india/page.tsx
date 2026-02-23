import { Metadata } from 'next';
import { OfferHero } from '@/components/offer/OfferHero';
import { Scope } from '@/components/offer/Scope';
import { Pricing } from '@/components/offer/Pricing';
import { Process } from '@/components/home/Process';
import { CaseStudies } from '@/components/home/CaseStudies';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Agency AI Sprint — India',
  description: '2-Week Agency AI Automation Sprint for Indian marketing and creative agencies. Automate reporting, onboarding, and lead workflows in 14 days.',
};

export default function IndiaOfferPage() {
  const scopeItems = [
    {
      num: '01',
      title: 'Lead → CRM Pipeline',
      description: 'Capture leads from forms/ads, auto-qualify, route by service type, and assign owner automatically.',
    },
    {
      num: '02',
      title: 'Client Onboarding Flow',
      description: 'Contract signed → workspace setup → kickoff checklist → task templates and reminders auto-generated.',
    },
    {
      num: '03',
      title: 'Reporting + Follow-ups',
      description: 'Weekly/monthly KPI pull, report generation, approval nudges, and invoice/payment follow-up triggers.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter Sprint',
      tag: 'Base',
      price: '₹1,50,000',
      currency: 'Additional workflows: ₹40,000–60,000 each',
      features: [
        '2 workflows automated',
        'Up to 3 integrations',
        'SOP + handover docs',
        '2-week post-sprint support',
      ],
    },
    {
      name: 'Growth Sprint',
      tag: 'Recommended',
      price: '₹2,25,000',
      currency: 'Optional monthly retainer: ₹30,000/mo',
      highlighted: true,
      features: [
        '3 workflows automated',
        'Up to 5 integrations',
        'Dashboard + reporting views',
        'SOP + handover documentation',
        '2-week post-sprint support',
      ],
    },
  ];

  return (
    <>
      <OfferHero
        badgeText="India · Agency Sprint"
        title={<>Agency AI Automation Sprint</>}
        subtitle="Automate your delivery workflows in 14 days so your team spends less time on repetitive admin and more time on strategy + client outcomes."
        highlightText="We work with your existing stack — CRMs, project management tools, reporting platforms, communication tools, and custom APIs. No rip-and-replace."
      />
      <Scope items={scopeItems} />
      <Pricing tiers={pricingTiers} />
      <Process />
      <CaseStudies />
      <FAQ />
      <BookCTA />
    </>
  );
}
