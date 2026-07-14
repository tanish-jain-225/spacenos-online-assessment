'use client';

import { motion } from 'framer-motion';
import { FileText, Cpu, BrainCircuit, FileDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';

const STEPS = [
  {
    number: '01',
    icon: FileText,
    title: 'Enter Your Birth Details',
    description:
      'Date, time, and place of birth — once. No account, no email. The only input the engine ever needs to build your complete chart.',
    detail: 'Date · Time · City',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Generate Your Chart',
    description:
      'The engine reconstructs every planet\'s exact position at your birth minute using real astronomy — computed on your device in milliseconds.',
    detail: '9 Planets · 12 Houses · Dashas',
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'AI Interprets Your Reading',
    description:
      'Ask Guruji reads your chart and translates 200+ classical rules into plain language — love, career, timing, and what to do next.',
    detail: '200+ Classical Rules · Timed Guidance',
  },
  {
    number: '04',
    icon: FileDown,
    title: 'Download & Return',
    description:
      'Save your reading as a PDF, share with family, or come back for your next question. Your chart is always here, ready for any question.',
    detail: 'PDF Export · Offline Ready',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-white border-y border-border"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center mb-4">How It Works</SectionLabel>
          <Heading level="h2" id="how-it-works-heading" className="mb-4">
            Your reading, in four steps
          </Heading>
          <p className="text-body text-ink-muted leading-relaxed">
            From entering your birth details to downloading your full Vedic
            reading — the whole process takes under a minute.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="absolute top-10 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-border hidden lg:block"
            aria-hidden="true"
          />

          <div className="flex flex-wrap -mx-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="w-full sm:w-1/2 lg:w-1/4 p-4 flex">
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5% 0px' }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="w-full relative flex flex-col items-start"
                    aria-labelledby={`step-${step.number}`}
                  >
                    {/* Step Number + Icon */}
                    <div className="relative mb-5">
                      <div className="w-20 h-20 rounded-2xl bg-primary-50 border-2 border-primary-100 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-700" aria-hidden="true" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
                        Step {step.number}
                      </p>
                      <h3
                        id={`step-${step.number}`}
                        className="font-heading font-semibold text-base text-ink mb-2 leading-snug"
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed mb-3 flex-1">
                        {step.description}
                      </p>
                      <span className="inline-flex text-xs font-medium text-ink-light bg-gray-100 px-2.5 py-1 rounded-full w-fit">
                        {step.detail}
                      </span>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
