'use client';

import { motion } from 'framer-motion';
import {
  UserCheck, Zap, Target, BrainCircuit, ShieldCheck, Lock
} from 'lucide-react';
import { FEATURES } from '@/constants/features';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';

const ICON_MAP = {
  UserCheck, Zap, Target, BrainCircuit, ShieldCheck, Lock,
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WhyChooseSection() {
  return (
    <section
      className="section-padding bg-background"
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center mb-4">Why RahuNow</SectionLabel>
          <Heading level="h2" id="why-choose-heading" className="mb-4">
            Built differently from other astrology apps
          </Heading>
          <p className="text-body text-ink-muted leading-relaxed">
            Most astrology apps serve generic forecasts. We compute your exact
            chart on your device using classical Vedic rules — and show you the
            reasoning behind every answer.
          </p>
        </div>

        <div className="flex flex-wrap -mx-2.5">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] ?? UserCheck;
            return (
              <div key={feature.id} className="w-full sm:w-1/2 lg:w-1/3 p-2.5 flex">
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-5% 0px' }}
                  custom={i}
                  variants={CARD_VARIANTS}
                  className="w-full flex flex-col bg-white border border-border rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ease-out-quart"
                  aria-labelledby={`feature-${feature.id}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 flex-none">
                    <Icon className="w-5 h-5 text-primary-700" aria-hidden="true" />
                  </div>
                  <h3
                    id={`feature-${feature.id}`}
                    className="font-heading font-semibold text-base text-ink mb-2"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </motion.article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
