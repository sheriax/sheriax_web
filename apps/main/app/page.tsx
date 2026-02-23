import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Products } from '@/components/home/Products';
import { Numbers } from '@/components/home/Numbers';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Sheriax Solutions — AI Products & Automation',
  description: 'We build AI products and automation systems. Sheriax is a product studio from Chennai.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Hero />
      <Products />
      <Numbers />
      <AboutTeaser />
      <CTA />
    </div>
  );
}
