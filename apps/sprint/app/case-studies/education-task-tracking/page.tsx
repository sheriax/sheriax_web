import { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Button } from '@sheriax/ui';
import { BookCTA } from '@/components/home/BookCTA';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Study: Education Task Tracking Automation',
  description: 'How automation transforms task coordination in university project teams — eliminating missed deadlines and cutting overhead.',
};

export default function EducationCaseStudy() {
  return (
    <>
      <article className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-700 transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> All Case Studies
          </Link>

          <Badge variant="accent">Education Workflow</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
            Automating Task Coordination in University Project Teams
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            University project teams lose hours every week to manual coordination. Here&apos;s how structured
            automation eliminates that overhead entirely.
          </p>

          {/* Potential impact */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: '60%', label: 'Coordination time saved' },
              { value: '0', label: 'Missed deadlines' },
              { value: '2 wks', label: 'To implement' },
            ].map((m) => (
              <div key={m.label} className="text-center p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                <p className="text-2xl font-bold text-zinc-900 font-mono">{m.value}</p>
                <p className="mt-1 text-[12px] text-zinc-500 tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-10">
            <section>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">The Problem</h2>
              <div className="space-y-4 text-[15px] text-zinc-600 leading-[1.8]">
                <p>
                  Multi-phase academic projects — research initiatives, capstone projects, lab collaborations — generate
                  a surprising amount of coordination overhead. Task assignments get communicated through scattered WhatsApp
                  messages, email chains, and verbal handoffs during meetings. Deadlines live in shared spreadsheets that
                  nobody updates consistently.
                </p>
                <p>
                  The result is predictable: duplicated work, missed tasks, unclear ownership, and 2-3 hours per week
                  lost to "who&apos;s doing what?" follow-ups. When deadlines slip, tracing where the breakdown occurred
                  is nearly impossible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">How Automation Solves This</h2>
              <div className="space-y-4 text-[15px] text-zinc-600 leading-[1.8]">
                <p>
                  The fix isn&apos;t a better spreadsheet — it&apos;s removing the manual coordination layer entirely.
                  A well-designed automation pipeline can handle four things simultaneously:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-zinc-800">Centralized task intake:</strong> A single form replaces scattered messages. When a task is submitted, it auto-assigns to the right person based on workload and expertise tags — no manual delegation needed.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-zinc-800">Automated deadline enforcement:</strong> Reminders trigger at 48h, 24h, and 4h before due dates. Overdue items escalate automatically. Nothing slips through because someone forgot to check.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-zinc-800">Live progress visibility:</strong> A dashboard shows task status, blockers, and completion rates per team member — in real time. The weekly status meeting shrinks from 45 minutes to 10.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-zinc-800">Notification integrations:</strong> Slack, email, or push notifications keep everyone in sync without manual check-in messages. Updates happen in context, not in a separate thread.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-zinc-900 mb-3">The Impact</h2>
              <div className="space-y-4 text-[15px] text-zinc-600 leading-[1.8]">
                <p>
                  Teams that implement this kind of automation typically cut coordination overhead by 50-60% in the first
                  month. Weekly sync meetings become short reviews rather than detective work. Deadlines stop being surprise
                  emergencies because the system catches them early.
                </p>
                <p>
                  The deeper benefit is psychological. When every task has a clear owner, a visible deadline, and automated
                  follow-ups, the ambient stress around "is anything falling through the cracks?" disappears. The team focuses
                  on the actual work instead of managing the process of doing the work.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-14 pt-8 border-t border-zinc-100">
            <p className="text-base font-bold text-zinc-900 mb-5">Facing similar coordination problems?</p>
            <Button href="/book" variant="primary" size="md" rightIcon>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </article>
      <BookCTA />
    </>
  );
}
