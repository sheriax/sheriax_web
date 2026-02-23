import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { PainPoints } from '@/components/home/PainPoints';
import { Packages } from '@/components/home/Packages';
import { CaseStudies } from '@/components/home/CaseStudies';
import { FAQ } from '@/components/home/FAQ';
import { Process } from '@/components/home/Process';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Sheriax Sprint Studio - AI Automation Sprints for Agencies',
  description: 'Fixed-scope AI automation sprints for agencies. Automate reporting, onboarding, and operations workflows in 2 weeks.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PainPoints />
      <Packages />
      <CaseStudies />
      <Process />
      <FAQ />
      <BookCTA />
    </div>
  );
}
