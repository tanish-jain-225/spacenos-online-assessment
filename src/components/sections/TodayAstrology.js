'use client';

import { motion } from 'framer-motion';
import { Star, Clock, Palette, Moon, Sun, AlertCircle } from 'lucide-react';
import { TODAYS_DATA } from '@/constants/horoscope';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';
import { cn } from '@/utils/cn';

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

function DashCard({ icon: Icon, iconColor, iconBg, label, children, className, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      custom={index}
      variants={FADE_IN}
      className={cn('bg-white border border-border rounded-2xl p-5 shadow-card flex flex-col gap-3', className)}
    >
      <div className="flex items-center gap-2.5">
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-none', iconBg)}>
          <Icon className={cn('w-4 h-4', iconColor)} aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">{label}</span>
      </div>
      {children}
    </motion.div>
  );
}

export default function TodayAstrology() {
  const d = TODAYS_DATA;

  return (
    <section
      id="today"
      className="section-padding bg-white border-y border-border"
      aria-labelledby="today-heading"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:w-72 flex-none">
            <SectionLabel className="mb-4">Today's Astrology</SectionLabel>
            <Heading level="h2" id="today-heading" className="mb-4">
              What the sky says today
            </Heading>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              {d.date}
            </p>
            <p className="text-body-sm text-ink-muted leading-relaxed">
              Live planetary positions computed for your timezone. Enter your
              birth details for personalized timing.
            </p>
            <a
              href="#birth-chart"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#birth-chart');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              Get my personal forecast →
            </a>
          </div>

          {/* Right: Dashboard Cards */}
          <div className="flex-1 flex flex-wrap -mx-2">
            {/* Today's Horoscope */}
            <div className="w-full md:w-2/3 p-2 flex">
              <DashCard
                icon={Sun}
                iconColor="text-amber-600"
                iconBg="bg-amber-50"
                label="Today's Forecast"
                index={0}
                className="w-full h-full"
              >
                <p className="text-sm text-ink leading-relaxed">{d.horoscope.summary}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={d.horoscope.score}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`Energy score: ${d.horoscope.score} out of 100`}
                  >
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all"
                      style={{ width: `${d.horoscope.score}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-xs font-semibold text-amber-600">{d.horoscope.score}/100</span>
                </div>
              </DashCard>
            </div>

            {/* Lucky Number */}
            <div className="w-1/2 md:w-1/3 p-2 flex">
              <DashCard
                icon={Star}
                iconColor="text-violet-600"
                iconBg="bg-violet-50"
                label="Lucky Number"
                index={1}
                className="w-full h-full"
              >
                <p
                  className="font-heading text-5xl font-bold text-primary-800 leading-none"
                  aria-label={`Lucky number: ${d.luckyNumber}`}
                >
                  {d.luckyNumber}
                </p>
              </DashCard>
            </div>

            {/* Lucky Color */}
            <div className="w-1/2 md:w-1/3 p-2 flex">
              <DashCard
                icon={Palette}
                iconColor="text-indigo-600"
                iconBg="bg-indigo-50"
                label="Lucky Color"
                index={2}
                className="w-full h-full"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl shadow-inner flex-none"
                    style={{ backgroundColor: d.luckyColor.hex }}
                    aria-hidden="true"
                  />
                  <span className="text-base font-semibold text-ink">{d.luckyColor.name}</span>
                </div>
              </DashCard>
            </div>

            {/* Moon Phase */}
            <div className="w-1/2 md:w-1/3 p-2 flex">
              <DashCard
                icon={Moon}
                iconColor="text-slate-600"
                iconBg="bg-slate-50"
                label="Moon Phase"
                index={3}
                className="w-full h-full"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{d.moonPhase.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{d.moonPhase.name}</p>
                    <p className="text-xs text-ink-muted">{d.moonPhase.percent}% illuminated</p>
                  </div>
                </div>
              </DashCard>
            </div>

            {/* Rahu Kalam */}
            <div className="w-1/2 md:w-1/3 p-2 flex">
              <DashCard
                icon={AlertCircle}
                iconColor="text-rose-600"
                iconBg="bg-rose-50"
                label="Rahu Kalam"
                index={4}
                className="w-full h-full"
              >
                <p className="text-base font-semibold text-ink">
                  {d.rahuKalam.start} – {d.rahuKalam.end}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">{d.rahuKalam.note}</p>
              </DashCard>
            </div>

            {/* Muhurat */}
            <div className="w-full md:w-1/3 p-2 flex">
              <DashCard
                icon={Clock}
                iconColor="text-emerald-600"
                iconBg="bg-emerald-50"
                label="Best Muhurat"
                index={5}
                className="w-full h-full"
              >
                <div>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
                    {d.muhurat.name}
                  </p>
                  <p className="text-sm font-semibold text-ink">{d.muhurat.time}</p>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">{d.muhurat.note}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full w-fit">
                  ✓ {d.muhurat.quality}
                </span>
              </DashCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
