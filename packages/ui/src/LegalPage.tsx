'use client';

import React from 'react';
import Markdown from 'react-markdown';

interface LegalPageProps {
  markdown: string;
}

export function LegalPage({ markdown }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <article className="prose-legal">
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight mb-2">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-semibold text-zinc-900 mt-10 mb-3">{children}</h2>
              ),
              p: ({ children }) => (
                <p className="text-[15px] text-zinc-600 leading-relaxed mt-3">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mt-3 space-y-2">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex gap-2.5 text-[15px] text-zinc-600 leading-relaxed">
                  <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-zinc-400" />
                  <span>{children}</span>
                </li>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-brand-600 hover:text-brand-700 underline underline-offset-2 decoration-brand-200 transition-colors">
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-zinc-800">{children}</strong>
              ),
            }}
          >
            {markdown}
          </Markdown>
        </article>
      </div>
    </div>
  );
}
