'use client';

import { useState } from 'react';
import { ArrowRight, ChevronRight, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const TRUST_BADGES = [
  { icon: Shield, label: 'Private & Secure' },
  { icon: Zap, label: 'Instant Results' },
  { icon: Star, label: 'Free Forever' },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const FADE_RIGHT = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    date: false,
    place: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: !formData.name.trim(),
      date: !formData.date,
      place: !formData.place.trim(),
    };
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.date || newErrors.place) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        date: '',
        time: '',
        place: '',
      });
      setErrors({
        name: false,
        date: false,
        place: false,
      });
      // Reset back to idle after a few seconds
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      {/* Gradient fade over grid */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Copy ── */}
          <div className="flex flex-col w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={FADE_UP}
            >
              <Badge variant="default" dot className="mb-6">
                Modern Vedic Astrology · Computed Live
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={FADE_UP}
              className="font-heading text-h1 font-semibold tracking-tight text-ink leading-tight mb-6"
            >
              Understand your destiny. Timing your decisions.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={FADE_UP}
              className="text-body-lg text-ink-muted leading-relaxed mb-8 max-w-xl"
            >
              Get a comprehensive, personalized analysis of your{' '}
              <strong className="font-semibold text-ink">
                love, career, and timing
              </strong>
              . Free, private, and computed on your device in seconds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={FADE_UP}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                href="#birth-chart"
                className="group"
              >
                Read My Chart
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                Explore Tools
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={FADE_UP}
              className="flex flex-wrap items-center gap-5"
            >
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Icon className="w-4 h-4 text-primary-700" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Birth Chart Form Card ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_RIGHT}
            className="relative w-full lg:w-1/2"
          >
            <div
              id="birth-chart"
              className="bg-white rounded-3xl border border-border shadow-xl p-5 sm:p-8 scroll-mt-24"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading font-semibold text-lg text-ink">
                    Generate Your Birth Chart
                  </h2>
                  <p className="text-sm text-ink-muted mt-0.5">
                    Free · Private · Takes 10 seconds
                  </p>
                </div>
                <Badge variant="live" dot>Live</Badge>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="hero-name"
                    className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="hero-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: false });
                    }}
                    className={`w-full h-11 px-4 rounded-xl border bg-gray-50 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:ring-2 focus:border-transparent focus:bg-white transition-all ${
                      errors.name
                        ? 'border-rose-300 focus:ring-rose-500'
                        : 'border-border focus:ring-primary-800'
                    }`}
                    autoComplete="name"
                    suppressHydrationWarning
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">Please enter your name</p>
                  )}
                </div>

                {/* Date + Time */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="hero-date"
                      className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5"
                    >
                      Date of Birth <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="hero-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: false });
                      }}
                      className={`w-full h-11 px-4 rounded-xl border bg-gray-50 text-sm text-ink focus:outline-none focus:ring-2 focus:border-transparent focus:bg-white transition-all ${
                        errors.date
                          ? 'border-rose-300 focus:ring-rose-500'
                          : 'border-border focus:ring-primary-800'
                      }`}
                      required
                      autoComplete="off"
                      suppressHydrationWarning
                    />
                    {errors.date && (
                      <p className="text-xs text-rose-500 mt-1">Date is required</p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="hero-time"
                      className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5"
                    >
                      Time of Birth
                    </label>
                    <input
                      id="hero-time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-gray-50 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent focus:bg-white transition-all"
                      autoComplete="off"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                {/* Place */}
                <div>
                  <label
                    htmlFor="hero-place"
                    className="block text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1.5"
                  >
                    Place of Birth <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="hero-place"
                    name="place"
                    type="text"
                    placeholder="e.g. Mumbai, India"
                    value={formData.place}
                    onChange={(e) => {
                      setFormData({ ...formData, place: e.target.value });
                      if (errors.place) setErrors({ ...errors, place: false });
                    }}
                    className={`w-full h-11 px-4 rounded-xl border bg-gray-50 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:ring-2 focus:border-transparent focus:bg-white transition-all ${
                      errors.place
                        ? 'border-rose-300 focus:ring-rose-500'
                        : 'border-border focus:ring-primary-800'
                    }`}
                    autoComplete="off"
                    suppressHydrationWarning
                  />
                  {errors.place && (
                    <p className="text-xs text-rose-500 mt-1">Please enter your birth place</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant={success ? 'success' : 'primary'}
                  size="lg"
                  disabled={loading || success}
                  className={`w-full mt-2 transition-all duration-300 ${
                    loading || success ? 'disabled:opacity-100 disabled:pointer-events-none' : ''
                  }`}
                >
                  {loading && (
                    <>
                      <svg className="animate-spin w-4 h-4 text-white animate-spin-slow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                      </svg>
                      Casting your chart…
                    </>
                  )}
                  {success && 'Done! Chart Cast Successfully ✓'}
                  {!loading && !success && (
                    <>
                      Generate Free Reading
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {/* Assurances */}
                <div className="text-center space-y-1 text-xs text-ink-light pt-1">
                  <p>No account required · Data stays on your device · Free forever</p>
                  <p className="text-ink-muted font-medium">1.2M+ charts generated · Sidereal · Lahiri Ayanāṁśa</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
