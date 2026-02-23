import { Metadata } from 'next';
import { CaseStudies } from '@/components/home/CaseStudies';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results from our AI automation sprints.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-16">
        <CaseStudies />
      </div>
      <BookCTA />
    </>
  );
}
