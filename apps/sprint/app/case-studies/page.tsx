import { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Card, SectionHeader, Button } from '@sheriax/ui';
import { BookCTA } from '@/components/home/BookCTA';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how AI automation transforms real workflows — education coordination, internal operations, and government RFP processes.',
};

const caseStudies = [
  {
    slug: 'education-task-tracking',
    type: 'Education Workflow',
    title: 'Automating Task Coordination for a University Project Team',
    summary: 'How structured automation replaces manual back-and-forth in academic projects — cutting coordination overhead by 60% and eliminating missed deadlines.',
    metrics: ['60% less coordination time', '0 missed deadlines', '3 workflows automated'],
    badgeVariant: 'accent' as const,
  },
  {
    slug: 'internal-ops-standardization',
    type: 'Operations',
    title: 'Standardizing Repetitive Operations Into Automation Pipelines',
    summary: 'How trigger-based automation pipelines replace ad-hoc manual processes — improving consistency and removing single-person dependencies.',
    metrics: ['4 pipelines built', '80% fewer manual steps', 'Consistent output quality'],
    badgeVariant: 'default' as const,
  },
  {
    slug: 'government-rfp-automation',
    type: 'Government Workflow',
    title: 'Structuring the RFP Response Process With AI-Assisted Automation',
    summary: 'How AI-assisted automation unifies fragmented RFP workflows into a single pipeline — from requirement extraction to compliance verification.',
    metrics: ['50% faster turnaround', 'Automated requirement parsing', 'Full audit trail'],
    badgeVariant: 'blue' as const,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-500">Case Studies</span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1]">
              How Automation Improves Real Workflows
            </h1>
            <p className="mt-5 text-lg text-stone-600 leading-relaxed">
              Detailed breakdowns of how AI automation solves common operational problems — from coordination overhead to compliance tracking.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="block group">
                <Card hover className="!p-0 overflow-hidden">
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1 max-w-2xl">
                        <Badge variant={cs.badgeVariant}>{cs.type}</Badge>
                        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-stone-900 tracking-tight group-hover:text-brand-600 transition-colors">
                          {cs.title}
                        </h2>
                        <p className="mt-3 text-[15px] text-stone-600 leading-relaxed">{cs.summary}</p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap gap-4">
                      {cs.metrics.map((m) => (
                        <span key={m} className="text-[13px] font-medium text-stone-500 bg-stone-50 px-3 py-1 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <BookCTA />
    </>
  );
}
