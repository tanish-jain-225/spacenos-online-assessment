'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/constants/faqs';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-inset rounded-sm"
        aria-expanded={isOpen}
        aria-controls={`faq-body-${faq.id}`}
        id={`faq-trigger-${faq.id}`}
        suppressHydrationWarning
      >
        <span className="text-base font-semibold text-ink group-hover:text-primary-800 transition-colors pr-4">
          {faq.question}
        </span>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-none transition-all duration-200 ${
            isOpen
              ? 'bg-primary-800 text-white'
              : 'bg-gray-100 text-ink-muted group-hover:bg-primary-100 group-hover:text-primary-700'
          }`}
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-body-${faq.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-ink-muted leading-relaxed pb-5 pr-11">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="section-padding bg-white border-y border-border"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Heading */}
          <div className="w-full lg:w-1/3">
            <SectionLabel className="mb-4">FAQ</SectionLabel>
            <Heading level="h2" id="faq-heading" className="mb-4">
              Questions we hear often
            </Heading>
            <p className="text-body-sm text-ink-muted leading-relaxed mb-6">
              Everything you need to know before trusting us with your birth
              chart. Honest answers only.
            </p>
            <Button variant="secondary" size="sm" href="/astrology-answers">
              See all questions →
            </Button>
          </div>

          {/* Right: Accordion */}
          <div
            className="w-full lg:w-2/3 bg-gray-50 border border-border rounded-2xl px-6 py-2"
            role="list"
          >
            {FAQS.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
