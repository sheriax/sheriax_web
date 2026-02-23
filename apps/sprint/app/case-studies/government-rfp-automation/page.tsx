import { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Button } from '@sheriax/ui';
import { BookCTA } from '@/components/home/BookCTA';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Study: Government RFP Automation',
  description: 'How AI-assisted automation structures fragmented RFP response processes — extracting requirements, tracking deadlines, and ensuring compliance automatically.',
};

export default function RFPCaseStudy() {
  return (
    <>
      <article className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] text-stone-500 hover:text-stone-700 transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> All Case Studies
          </Link>

          <Badge variant="blue">Government Workflow</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-[1.1]">
            Structuring the RFP Response Process With AI-Assisted Automation
          </h1>
          <p className="mt-5 text-lg text-stone-600 leading-relaxed">
            Government RFP responses involve manual document parsing, fragmented owner assignment, and constant
            deadline anxiety. Here&apos;s how a structured automation pipeline makes the process repeatable and trackable.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: '50%', label: 'Faster turnaround' },
              { value: 'AI', label: 'Requirement parsing' },
              { value: '100%', label: 'Audit coverage' },
            ].map((m) => (
              <div key={m.label} className="text-center p-4 rounded-xl bg-stone-50 border border-stone-100">
                <p className="text-2xl font-bold text-stone-900 font-mono">{m.value}</p>
                <p className="mt-1 text-[12px] text-stone-500 tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-10">
            <section>
              <h2 className="text-lg font-bold text-stone-900 mb-3">The Problem</h2>
              <div className="space-y-4 text-[15px] text-stone-600 leading-[1.8]">
                <p>
                  Responding to government RFPs (Request for Proposals) is a high-stakes, deadline-driven process. The team
                  was handling it with a manual, document-first approach: someone would read through the 40-80 page RFP
                  document, manually extract requirements, create a spreadsheet, assign sections to different people, and
                  chase them for contributions via email.
                </p>
                <p>
                  The problems compounded at scale. With 3-4 active RFPs at any time, tracking which requirements were
                  assigned to whom, which sections were drafted, which needed review, and which deadlines were approaching
                  became a full-time coordination job. Requirements were occasionally missed, leading to non-compliant
                  submissions. And there was no audit trail — if something was wrong in the final submission, tracing
                  the breakdown was guesswork.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-stone-900 mb-3">How Automation Solves This</h2>
              <div className="space-y-4 text-[15px] text-stone-600 leading-[1.8]">
                <p>
                  The answer is a 3-layer automation system that replaces manual parsing, coordination, and compliance
                  checking with structured pipelines:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>
                      <strong className="text-stone-800">Layer 1 — AI Requirement Extraction:</strong> Upload the RFP document (PDF or Word).
                      An AI pipeline extracts individual requirements, categorizes them (technical, financial, compliance, narrative),
                      assigns priority levels, and outputs a structured requirements matrix — automatically. What typically takes a senior
                      team member 3-4 hours becomes a 5-minute review.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>
                      <strong className="text-stone-800">Layer 2 — Assignment & Tracking:</strong> Each extracted requirement gets auto-assigned
                      to the relevant team member based on expertise area. Deadlines cascade backwards from the submission date.
                      The system sends reminders, flags overdue items, and shows a real-time progress dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>
                      <strong className="text-stone-800">Layer 3 — Compliance Checklist & Audit:</strong> Before final submission, the system
                      runs a compliance check — verifying that every extracted requirement has a corresponding response section, all
                      mandatory documents are attached, and formatting standards are met. Every action is logged for a full audit trail.
                    </span>
                  </li>
                </ul>
                <p>
                  AI extraction typically matches 90%+ of manually identified requirements — and catches requirements
                  that manual passes miss. All data stays on sovereign-compliant infrastructure, with no external API
                  calls involving sensitive government data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-stone-900 mb-3">The Impact</h2>
              <div className="space-y-4 text-[15px] text-stone-600 leading-[1.8]">
                <p>
                  Teams that implement this kind of pipeline typically cut RFP response turnaround by 50%. The requirement
                  extraction phase — usually the bottleneck — goes from half a day of manual work to minutes. Assignment
                  coordination moves from email threads to automated, visible tracking. Compliance gaps that normally surface
                  at the last minute get caught early.
                </p>
                <p>
                  The audit trail is especially valuable in government contexts. When a submission is questioned weeks later,
                  every section can be traced — who drafted it, when it was reviewed, what compliance checks it passed. Full
                  accountability, fully documentable.
                </p>
                <p>
                  With this system in place, 3-4 concurrent RFPs can run without additional coordination overhead. The team
                  focuses on writing quality responses instead of managing logistics.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-14 pt-8 border-t border-stone-100">
            <p className="text-base font-bold text-stone-900 mb-3">Struggling with government workflows?</p>
            <div className="flex gap-3">
              <Button href="/book" variant="primary" size="md" rightIcon>
                Book a Discovery Call
              </Button>
              <Button href="/government" variant="secondary" size="md">
                Government Offer →
              </Button>
            </div>
          </div>
        </div>
      </article>
      <BookCTA />
    </>
  );
}
