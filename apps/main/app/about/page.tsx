import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const team = [
  { name: 'Youhana Sheriff', role: 'Founder & CEO', line: 'Building AI products from Chennai for the world.' },
  { name: 'Alamur Rahman', role: 'CTO', line: 'Engineering the systems that power everything we ship.' },
  { name: 'Nusrath', role: 'CMO', line: 'Driving go-to-market strategy and brand presence.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">

        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">About</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
            About Sheriax & Kizu
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            Sheriax Solutions is a multi-disciplinary technology studio building delightful, future-ready products.
            We blend AI, thoughtful design, and robust engineering to solve problems that matter.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200/60 p-7 sm:p-8 bg-white">
            <span className="text-[10px] font-semibold text-brand-600 tracking-widest uppercase">Mission</span>
            <h3 className="mt-3 text-xl font-bold text-zinc-900 tracking-tight">
              Igniting Tomorrow&apos;s Marvels Through Revolutionary Tech Adventures
            </h3>
            <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
              We embark on thrilling, creative tech adventures powered by AI and ML. Inspired by Doraemon, Wall‑E, Eva,
              and Big Hero 6, our goal is to build magical, imaginative technology that delights.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/60 p-7 sm:p-8 bg-white">
            <span className="text-[10px] font-semibold text-brand-600 tracking-widest uppercase">Vision</span>
            <h3 className="mt-3 text-xl font-bold text-zinc-900 tracking-tight">
              Crafting Tomorrow&apos;s Tech Ecosystem with Intuitive Brilliance
            </h3>
            <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
              We envision a seamless and trustworthy tech ecosystem — smart, intuitive, and impactful. Drawing from
              creativity, eco-consciousness, futuristic thinking, reliability, and team spirit.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-20 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">Our Story</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">How it started</h2>
          <div className="mt-6 space-y-5 text-[15px] text-zinc-600 leading-[1.8]">
            <p>
              Sheriax started with a simple frustration: too much technology felt cold, complicated, and disconnected from
              the people it was supposed to help. Youhana Sheriff founded the company in Chennai with a conviction that
              technology should feel more like Doraemon pulling a gadget from his pocket — magical, personal, and genuinely useful.
            </p>
            <p>
              The early days were spent building for clients — websites, mobile apps, AI prototypes. Every project taught us
              something about what works and what doesn&apos;t. But the real turning point came when we stopped asking
              &quot;what can we build for someone else?&quot; and started asking &quot;what should exist in the world?&quot;
            </p>
            <p>
              That question led to Kizu. We saw friends and family bleeding money through forgotten subscriptions, hidden fees,
              and spending habits they didn&apos;t even know they had. The name Kizu (傷) — Japanese for &quot;wound&quot; — felt right.
              Financial wounds are real, they&apos;re personal, and they can be healed with the right care. So we set out to build
              an AI companion that scans, detects, and heals.
            </p>
            <p>
              Along the way, agencies kept asking us for help automating their own workflows. Rather than take on open-ended
              consulting, we created Sprint Studio — fixed-scope, 2-week automation sprints with clear deliverables, pricing,
              and handovers. No scope creep, no guesswork.
            </p>
            <p>
              Today, Sheriax is a small team that ships real products. We&apos;re recognized by DPIIT as an innovative startup.
              We operate from Chennai, serve clients across India and the UAE, and believe that the best technology is the kind
              you barely notice — it just makes your life better.
            </p>
          </div>
        </div>

        {/* Kizu Story */}
        <div className="mt-20 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-emerald-500">Product</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">The Story of Kizu</h2>
          <div className="mt-6 space-y-5 text-[15px] text-zinc-600 leading-[1.8]">
            <p>
              Kizu (傷) means &quot;wound&quot; in Japanese. We chose this name because we believe every financial wound —
              whether it&apos;s hidden fees, forgotten subscriptions, or poor spending habits — can be healed with the right
              care and attention.
            </p>
            <p>
              Built by Sheriax Solutions, Kizu combines our expertise in AI and thoughtful design to create a financial
              companion that truly understands your needs.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">Team</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">The people</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team.map((person) => (
              <div key={person.name} className="rounded-2xl border border-zinc-200/60 p-6 bg-white">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-100 to-zinc-100 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-brand-600">{person.name[0]}</span>
                </div>
                <h3 className="text-base font-bold text-zinc-900">{person.name}</h3>
                <p className="text-[13px] text-zinc-500 font-medium">{person.role}</p>
                <p className="mt-2 text-[14px] text-zinc-600 leading-relaxed">{person.line}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
