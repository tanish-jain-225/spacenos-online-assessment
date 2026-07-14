'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <form
      className="flex flex-wrap gap-2 relative w-full"
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
    >
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder={status === 'success' ? 'Thank you!' : 'you@example.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading' || status === 'success'}
        className="flex-1 min-w-[200px] h-10 px-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-ink-light focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-shadow disabled:bg-gray-50 disabled:text-emerald-700 disabled:placeholder:text-emerald-600 disabled:font-medium"
        aria-label="Email address for newsletter"
        autoComplete="off"
        suppressHydrationWarning
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-primary-800 text-white text-sm font-semibold hover:bg-primary-700 transition-all active:scale-95 disabled:bg-emerald-600 disabled:opacity-100 disabled:active:scale-100 disabled:cursor-default whitespace-nowrap min-w-[100px] flex items-center justify-center gap-1.5"
        suppressHydrationWarning
      >
        {status === 'idle' && 'Subscribe'}
        {status === 'loading' && (
          <>
            <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
            </svg>
            Sending
          </>
        )}
        {status === 'success' && 'Sent! ✓'}
      </button>
    </form>
  );
}
