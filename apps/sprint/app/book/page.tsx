import React from 'react';
import { Metadata } from 'next';
import { bookingUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Sheriax Sprint Studio',
  description: 'Book a 30-minute discovery call to map your workflows and identify automation opportunities.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            Schedule a Call
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
            Pick a time that <br className="hidden sm:block" /> works for you.
          </h1>
        </div>
        
        <div className="bg-surface border-4 border-border relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] shadow-[8px_8px_0_theme(colors.border)] p-8">
            <h2 className="text-2xl font-black text-primary uppercase mb-6">Booking Portal</h2>
            <p className="text-text-muted text-center mb-8 font-medium">Click the button below to be redirected to our secure booking page.</p>
            <a 
              href={bookingUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-black uppercase tracking-widest border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Open Cal.com Calendar
            </a>
        </div>
        
      </div>
    </div>
  );
}
