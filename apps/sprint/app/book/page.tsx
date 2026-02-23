import { Metadata } from 'next';
import { Button } from '@sheriax/ui';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: '30 minutes. We\'ll map your top workflow bottleneck and give you a concrete plan.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Book a Discovery Call
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            30 minutes. We&apos;ll map your top workflow bottleneck and give you a concrete plan.
          </p>
        </div>

        {/* Cal.com Embed Placeholder */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden" style={{ minHeight: 500 }}>
          <div id="cal-inline" className="w-full" style={{ minHeight: 500 }}>
            <div className="flex flex-col items-center justify-center h-full min-h-[500px] p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule a 30-Minute Call</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-sm">Click below to open our calendar and pick a time that works for you.</p>
              <Button href="https://cal.com/sheriax/30min" variant="primary" size="lg" rightIcon>
                Open Calendar
              </Button>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-400">
          Powered by <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">Cal.com</a>
        </p>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Not ready for a call? Email us at{' '}
            <a href="mailto:sprint@sheriax.com" className="text-brand-600 hover:text-brand-700 font-medium">
              sprint@sheriax.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
