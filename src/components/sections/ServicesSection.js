'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard, Sun, Heart, Calendar, Hash, Gem, ArrowRight
} from 'lucide-react';
import { SERVICES, SERVICE_COLORS } from '@/constants/services';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';
import { cn } from '@/utils/cn';

const ICON_MAP = {
  LayoutDashboard, Sun, Heart, Calendar, Hash, Gem,
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ServiceCard({ service, index }) {
  const colors = SERVICE_COLORS[service.color] ?? SERVICE_COLORS.indigo;
  const Icon = ICON_MAP[service.icon] ?? LayoutDashboard;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      custom={index}
      variants={CARD_VARIANTS}
      className="group w-full bg-white border border-border rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ease-out-quart flex flex-col"
      aria-labelledby={`service-${service.id}`}
    >
      {/* Icon + Tag */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={cn(
            'w-11 h-11 rounded-xl flex items-center justify-center flex-none',
            colors.bg, colors.border, 'border'
          )}
          aria-hidden="true"
        >
          <Icon className={cn('w-5 h-5', colors.icon)} />
        </div>
        <span
          className={cn(
            'text-xs font-semibold px-2.5 py-1 rounded-full',
            colors.tag
          )}
        >
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <h3
        id={`service-${service.id}`}
        className="font-heading font-semibold text-base text-ink mb-1"
      >
        {service.title}
      </h3>
      <p className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-3">
        {service.subtitle}
      </p>
      <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-5">
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={service.href}
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#birth-chart');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150',
          colors.icon,
          'hover:gap-2.5'
        )}
        aria-label={`Learn more about ${service.title}`}
      >
        Explore
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-background"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <SectionLabel className="mb-4">What we offer</SectionLabel>
          <Heading level="h2" id="services-heading" className="mb-4">
            Everything you need to understand your chart
          </Heading>
          <p className="text-body text-ink-muted leading-relaxed">
            Six tools, each answering a different question about your life —
            all grounded in classical Vedic astrology and computed from your
            exact birth details.
          </p>
        </div>

        <div className="flex flex-wrap -mx-2.5">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="w-full sm:w-1/2 lg:w-1/3 p-2.5 flex">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
