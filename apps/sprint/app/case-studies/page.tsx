import { Metadata } from 'next';
import { CaseStudies } from '@/components/home/CaseStudies';
import { BookCTA } from '@/components/home/BookCTA';

export const metadata: Metadata = {
  title: 'Case Studies | Sheriax Sprint Studio',
  description: 'Real results from our AI automation sprints.',
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <CaseStudies />
      <BookCTA />
    </div>
  );
}
