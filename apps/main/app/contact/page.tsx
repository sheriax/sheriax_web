'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';
import { sprintAppUrl, companyInfo } from '@/lib/constants';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission to Formspree or similar
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/2">
          <SectionHeader
            label="Contact"
            title="Start a conversation."
            description="Whether you want to discuss AI products, an automation sprint, or just say hello."
            align="left"
            className="mb-12"
          />

          <div className="space-y-8 text-primary max-w-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-2">Email</p>
              <a href={`mailto:${companyInfo.email}`} className="text-xl font-medium hover:text-accent transition-colors">
                {companyInfo.email}
              </a>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-2">Location</p>
              <p className="text-xl font-medium">{companyInfo.location}</p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-2">Social</p>
              <div className="flex space-x-4">
                <a href={companyInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">LinkedIn</a>
                <a href={companyInfo.socials.twitter} target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          <div className="mt-16 p-6 bg-accent/5 border border-accent/20 rounded-2xl w-fit">
            <h4 className="font-bold text-accent mb-2">Looking for a Sprint?</h4>
            <p className="text-sm text-text-muted mb-4 max-w-sm">
              If you’re an agency looking to automate your workflows, bypass this form and book a discovery call directly.
            </p>
            <Button href={`${sprintAppUrl}/book`} variant="ghost" size="sm" className="px-0 hover:bg-transparent text-accent" rightIcon>
              Book at Sprint Studio
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-3xl border border-border/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] flex flex-col">
            <h3 className="text-2xl font-bold mb-8">Send a message</h3>
            
            <div className="space-y-6 flex-grow">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col space-y-2 pb-4">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about..."
                />
              </div>
            </div>
            
            <div className="pt-8 flex items-center justify-between">
              <Button 
                type="submit" 
                variant="primary" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full md:w-auto"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
              </Button>
              
              {status === 'success' && (
                <span className="text-success text-sm font-medium ml-4 hidden md:block animate-in fade-in slide-in-from-bottom-2">
                  We'll be in touch soon.
                </span>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
