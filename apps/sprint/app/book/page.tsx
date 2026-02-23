import { Metadata } from 'next';
import { CalEmbed } from '@/components/book/CalEmbed';
import { companyInfo } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: '30 minutes. We\'ll map your top workflow bottleneck and give you a concrete plan.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl lg:max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
            Book a Discovery Call
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            30 minutes. We&apos;ll map your top workflow bottleneck and give you a concrete plan.
          </p>
        </div>

        {/* Cal.com Embedded Calendar */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg overflow-hidden min-h-[500px]">
          <CalEmbed />
        </div>
        <p className="text-center mt-4 text-sm text-zinc-400">
          Powered by <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 transition-colors">Cal.com</a>
        </p>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            Not ready for a call? Email us at{' '}
            <a href={`mailto:${companyInfo.email}`} className="text-brand-600 hover:text-brand-700 font-medium">
              {companyInfo.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
