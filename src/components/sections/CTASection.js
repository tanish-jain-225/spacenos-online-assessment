'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

import Image from 'next/image';

const QUICK_LINKS = [
  { label: 'Life Reading', href: '/kundli-predictions' },
  { label: 'Birth Chart', href: '/kundli' },
  { label: 'Daily Companion', href: '/app' },
  { label: 'Compatibility', href: '/compatibility' },
  { label: 'Panchang', href: '/panchang' },
  { label: 'Audit Our Math', href: '/audit-math' },
];

export default function CTASection() {
  return (
    <section
      className="section-padding bg-primary-800 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-7 overflow-hidden"
            aria-hidden="true"
          >
            <Image
              src="/icons/logo.png"
              alt=""
              width={56}
              height={56}
              className="object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          <h2
            id="cta-heading"
            className="font-heading text-h1 font-semibold text-white tracking-tight mb-5 max-w-2xl mx-auto"
          >
            Your chart is already waiting for you.
          </h2>
          <p className="text-body-lg text-white/70 max-w-lg mx-auto mb-10">
            Enter your birth details once. Read your life, time your
            decisions and return whenever you have a new question.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              href="#birth-chart"
              className="border-transparent shadow-xl hover:bg-gray-50"
            >
              Get My Free Reading
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#services"
              className="border-white/30 text-white/90 hover:border-white hover:bg-white/10 hover:text-white"
            >
              Explore All Tools
            </Button>
          </div>


          {/* Quick links */}
          <div className="flex flex-wrap gap-2 justify-center">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#birth-chart');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-xs text-white/50 hover:text-white/90 border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
