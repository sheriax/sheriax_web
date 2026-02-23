import { Hero } from '@/components/home/Hero';
import { PainPoints } from '@/components/home/PainPoints';
import { Packages } from '@/components/home/Packages';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { BookCTA } from '@/components/home/BookCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Packages />
      <CaseStudies />
      <Process />
      <FAQ />
      <BookCTA />
    </>
  );
}
