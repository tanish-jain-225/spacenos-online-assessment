'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/constants/stats';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function StatsSection() {
  return (
    <section
      className="section-padding bg-white border-y border-border"
      aria-labelledby="stats-heading"
    >
      <Container>
        <div className="text-center mb-14">
          <SectionLabel className="justify-center mb-4">By the numbers</SectionLabel>
          <h2 id="stats-heading" className="font-heading text-h2 font-semibold tracking-tight text-ink">
            Trusted by astrology seekers worldwide
          </h2>
        </div>

        <div className="flex flex-wrap -mx-2 lg:-mx-3">
          {STATS.map((stat, i) => (
            <div key={stat.id} className="w-1/2 lg:w-1/4 p-2 lg:p-3 flex">
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8% 0px' }}
                custom={i}
                variants={CARD_VARIANTS}
                className="w-full bg-gray-50 border border-border rounded-2xl p-6 lg:p-8 text-center flex flex-col justify-center"
                aria-labelledby={`stat-${stat.id}`}
              >
                <p
                  id={`stat-${stat.id}`}
                  className="font-heading text-4xl lg:text-5xl font-bold text-primary-800 tracking-tight leading-none mb-2"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1600}
                  />
                </p>
                <p className="text-sm font-semibold text-ink mb-1">{stat.label}</p>
                <p className="text-xs text-ink-muted">{stat.description}</p>
              </motion.article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
