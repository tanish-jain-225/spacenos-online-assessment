'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/testimonials';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-background"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel className="justify-center mb-4">User Stories</SectionLabel>
          <Heading level="h2" id="testimonials-heading" className="mb-4">
            A question asked. An answer that helped.
          </Heading>
        </div>

        <div className="flex flex-wrap -mx-2.5">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className="w-full sm:w-1/2 lg:w-1/3 p-2.5 flex">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="w-full flex flex-col bg-white border border-border rounded-2xl p-6 shadow-card"
                aria-labelledby={`testimonial-${t.id}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 text-accent fill-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p
                    id={`testimonial-${t.id}`}
                    className="text-sm text-ink leading-relaxed mb-6"
                  >
                    "{t.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-none text-sm font-bold text-primary-700"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink leading-tight">{t.name}</p>
                    <p className="text-xs text-ink-muted">
                      {t.location} · {t.service}
                    </p>
                  </div>
                </footer>
              </motion.article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
