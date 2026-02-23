import { Metadata } from 'next';
import { Button } from '@sheriax/ui';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">Contact</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-display text-zinc-900 tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            Have a question or want to work together? Reach out and we&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-2">Email</h3>
              <a href="mailto:hello@sheriax.com" className="text-base text-brand-600 hover:text-brand-700 font-medium">
                hello@sheriax.com
              </a>
            </div>
            <div>
              <h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-2">Location</h3>
              <p className="text-base text-zinc-800">Chennai, India</p>
            </div>
            <div className="pt-4 border-t border-zinc-100">
              <p className="text-sm text-zinc-600">
                For Sprint Studio inquiries, book a call at{' '}
                <a href="https://sprint.sheriax.com/book" className="text-brand-600 hover:text-brand-700 font-medium">
                  sprint.sheriax.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
