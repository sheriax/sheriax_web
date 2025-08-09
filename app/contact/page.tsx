'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from '@/components/ui/motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.section
        className="max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-foreground/70">
          Tell us a bit about your project, and we’ll get back within 24 hours.
        </p>
      </motion.section>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Info */}
        <motion.section
          className="rounded-lg border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="text-foreground/70 mt-2">We&apos;re excited to learn about your goals.</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@sheriax.com</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Remote-first / Global</li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4" /> Mon–Fri, 9am–6pm</li>
          </ul>
          <div className="mt-6 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md flex items-center justify-center">
            <div className="text-center">
              <p className="text-foreground/50">Contact Illustration Placeholder</p>
              <p className="text-foreground/30 text-xs mt-1">&quot;Friendly support team with chat bubbles and email icon&quot;</p>
            </div>
          </div>
        </motion.section>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jane Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jane@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                  message: 'Enter a valid email',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Company (optional)</label>
            <input
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Acme Inc."
              {...register('company')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Interested in</label>
            <select
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register('service')}
              defaultValue=""
            >
              <option value="" disabled className="bg-background">Select a service</option>
              <option value="ai-ml" className="bg-background">AI & ML</option>
              <option value="web" className="bg-background">Web Development</option>
              <option value="mobile" className="bg-background">Mobile App Development</option>
              <option value="seo" className="bg-background">SEO</option>
              <option value="ar-vr" className="bg-background">AR/VR</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What are you looking to build?"
              {...register('message', { required: 'Please include a short message' })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-500">Thanks! We&apos;ll be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
