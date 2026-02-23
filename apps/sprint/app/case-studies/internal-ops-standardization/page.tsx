import { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Button } from '@sheriax/ui';
import { BookCTA } from '@/components/home/BookCTA';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Study: Internal Ops Standardization',
  description: 'How automation converts ad-hoc manual operations into repeatable pipelines — reducing manual steps by 80% and eliminating single-person dependencies.',
};

export default function OpsCaseStudy() {
  return (
    <>
      <article className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[13px] text-stone-500 hover:text-stone-700 transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> All Case Studies
          </Link>

          <Badge variant="default">Operations</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-[1.1]">
            Standardizing Repetitive Operations Into Automation Pipelines
          </h1>
          <p className="mt-5 text-lg text-stone-600 leading-relaxed">
            When core repetitive tasks run on memory and ad-hoc effort, things slip. Here&apos;s how structured,
            trigger-based automation pipelines eliminate that fragility entirely.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: '4', label: 'Pipelines built' },
              { value: '80%', label: 'Fewer manual steps' },
              { value: '14', label: 'Days to delivery' },
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
                  Across the organization, a set of recurring operational tasks were being handled manually every week —
                  client onboarding checklists, weekly reporting compilation, invoice generation, and team standby alerts.
                  Each of these depended on one or two people remembering to do them, at the right time, in the right order.
                </p>
                <p>
                  The failure mode was predictable: when those key people were on leave or overloaded, things got missed.
                  Reports went out late. Onboarding steps were skipped. Invoice follow-ups fell behind. The inconsistency
                  wasn&apos;t because people didn&apos;t care — it was because the process lived in heads, not in systems.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-stone-900 mb-3">How Automation Solves This</h2>
              <div className="space-y-4 text-[15px] text-stone-600 leading-[1.8]">
                <p>
                  The first step is a process audit — documenting every step of each recurring workflow: who triggers it,
                  what data is needed, what decisions are made, what outputs are produced, and where it gets stuck. This
                  reveals the exact points where automation replaces manual effort.
                </p>
                <p>
                  From there, each workflow becomes a trigger-based pipeline:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-stone-800">Client Onboarding:</strong> A new client form submission triggers a 12-step checklist auto-assigned to the relevant team members, with progress tracking and completion alerts. No steps get skipped because they&apos;re tracked, not remembered.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-stone-800">Weekly Reporting:</strong> Data from multiple tools auto-pulls on schedule, compiles into a templated report, and sends to stakeholders — no manual copy-paste, no forgetting.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-stone-800">Invoice Pipeline:</strong> Completed project milestones trigger invoice draft generation, approval routing, and send reminders — fully tracked from trigger to payment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span><strong className="text-stone-800">Team Alerts:</strong> Escalation and standby notifications fire based on SLA timers, ensuring nothing sits unaddressed beyond defined thresholds.</span>
                  </li>
                </ul>
                <p>
                  Each pipeline gets refined in production — adjusting trigger conditions, tuning notification frequency
                  to avoid alert fatigue, and handling edge cases. The result is a system that runs itself.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-stone-900 mb-3">The Impact</h2>
              <div className="space-y-4 text-[15px] text-stone-600 leading-[1.8]">
                <p>
                  Organizations that automate these kinds of operational workflows typically see manual steps drop by 80%
                  or more. Weekly reporting goes from a 2-hour manual task to a 5-minute review-and-send. Onboarding
                  completion rates jump from ~70% (steps frequently skipped) to 100% — because every step is tracked and
                  verified, not left to memory.
                </p>
                <p>
                  The biggest win is operational resilience. When processes live in systems instead of people&apos;s heads,
                  leave days and sick days stop being operational risks. The organization runs consistently regardless of
                  who&apos;s available.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-14 pt-8 border-t border-stone-100">
            <p className="text-base font-bold text-stone-900 mb-3">Running operations on manual effort?</p>
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
