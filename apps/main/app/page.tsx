import { Hero } from '@/components/home/Hero';
import { Products } from '@/components/home/Products';
import { Numbers } from '@/components/home/Numbers';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Numbers />
      <AboutTeaser />
      <CTA />
    </>
  );
}
