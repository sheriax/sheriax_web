'use client';

import { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';

interface WaitlistFormProps {
  plan?: 'free' | 'pro';
  className?: string;
}

export default function WaitlistForm({ plan = 'free', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://kizu.in/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, plan }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('You\'re on the list! 🎉 Check your email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to connect. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="Enter your email"
          disabled={status === 'loading' || status === 'success'}
          className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF7043]/50 focus:outline-none text-foreground placeholder:text-foreground/50 min-w-[280px] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-6 py-3 rounded-lg bg-[#FF7043] text-white font-medium hover:bg-[#FF8A65] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Joining...
            </>
          ) : status === 'success' ? (
            <>
              <Check size={16} />
              Joined!
            </>
          ) : (
            <>
              Join Waitlist <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
