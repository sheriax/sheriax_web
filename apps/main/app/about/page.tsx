import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';

export const metadata: Metadata = {
  title: 'About | Sheriax',
  description: 'Built in Chennai by Youhana Sheriff. The story of Sheriax Solutions.',
};

export default function AboutPage() {
  const team = [
    { name: 'Youhana Sheriff', role: 'Founder & CEO', tag: 'Building AI products from Chennai for the world.' },
    { name: 'Nusrath', role: 'CMO', tag: 'Architecting narrative and market presence.' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <SectionHeader
          label="Founder Story"
          title="Building from Chennai for the world."
          align="left"
        />

        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent max-w-none mb-24 text-text-muted">
          <p className="lead text-2xl font-light text-primary mb-8">
            Sheriax started with a simple belief: most software is bloated, confusing, and doesn't actually solve the problem it was hired to do.
          </p>
          <p>
            I'm Youhana Sheriff, and I started this company because I believe automation and AI shouldn't just be buzzwords thrown around in pitch decks. They should be invisible tools that remove friction from our daily lives.
          </p>
          <p>
            When we build products—whether it's our flagship financial recovery tool, Kizu, or the intense 14-day automation sprints we run for agencies—our focus is always on the outcome. We don't ship "features"; we ship time saved, margins improved, and headaches eliminated. 
          </p>
          <p>
            We're a small, concentrated team based out of Chennai, India. We operate on the thesis that small, dedicated pods can out-ship massive corporations by staying relentlessly focused on user reality instead of corporate bureaucracy. 
          </p>
        </div>

        <div className="py-16 border-t border-border">
          <SectionHeader
            label="The Team"
            title="Small by design."
            align="left"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="w-full aspect-square bg-surface-dark border border-border-dark rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-text-muted/20 font-mono text-xs">
                  [Photo: {member.name}]
                </div>
                <h3 className="font-bold text-2xl text-primary mb-1 tracking-tight">{member.name}</h3>
                <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">{member.role}</p>
                <p className="text-text-muted">{member.tag}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
