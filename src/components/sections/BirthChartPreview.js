'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

// Simplified planet/house summary for preview
const PLANET_SUMMARY = [
  { name: 'Sun', sign: 'Gemini', house: '10th', strength: 78, color: '#D97706' },
  { name: 'Moon', sign: 'Aries', house: '8th', strength: 62, color: '#6B7280' },
  { name: 'Mars', sign: 'Aries', house: '8th', strength: 85, color: '#DC2626' },
  { name: 'Jupiter', sign: 'Cancer', house: '11th', strength: 91, color: '#D97706' },
  { name: 'Saturn', sign: 'Pisces', house: '7th', strength: 44, color: '#4B5563' },
  { name: 'Venus', sign: 'Leo', house: '12th', strength: 58, color: '#DB2777' },
];

// South-Indian style chart grid data (12 houses)
const CHART_CELLS = [
  { house: 12, label: '12' },
  { house: 1,  label: '1' },
  { house: 2,  label: '2' },
  { house: 3,  label: '3' },
  { house: 11, label: '11' },
  null, // center block placeholder
  { house: 4,  label: '4' },
  { house: 10, label: '10' },
  null, // center block placeholder
  { house: 5,  label: '5' },
  { house: 9,  label: '9' },
  { house: 8,  label: '8' },
  { house: 7,  label: '7' },
  { house: 6,  label: '6' },
];

function ChartCell({ cell }) {
  const isHighlighted = cell?.house === 1;
  if (!cell) return <div className="w-1/4 h-full" />; // empty gap
  return (
    <div
      className={`w-1/4 h-full border border-primary-100 p-1.5 flex flex-col items-start ${
        isHighlighted ? 'bg-primary-50' : 'bg-white'
      }`}
      aria-label={`House ${cell.house}`}
    >
      <span className="text-[9px] font-semibold text-primary-400 leading-none">{cell.label}</span>
      {isHighlighted && (
        <span className="text-[9px] text-primary-700 font-bold mt-0.5">Asc</span>
      )}
    </div>
  );
}

function ChartGrid() {
  const row1 = [CHART_CELLS[0], CHART_CELLS[1], CHART_CELLS[2], CHART_CELLS[3]];
  const row2 = [CHART_CELLS[4], null, null, CHART_CELLS[6]];
  const row3 = [CHART_CELLS[7], null, null, CHART_CELLS[9]];
  const row4 = [CHART_CELLS[10], CHART_CELLS[11], CHART_CELLS[12], CHART_CELLS[13]];

  return (
    <div className="relative w-full aspect-square max-w-xs mx-auto border border-primary-200 rounded-lg overflow-hidden flex flex-col">
      {/* Row 1 */}
      <div className="flex flex-row h-1/4 w-full">
        {row1.map((cell, i) => <ChartCell key={i} cell={cell} />)}
      </div>
      {/* Row 2 */}
      <div className="flex flex-row h-1/4 w-full">
        <ChartCell cell={row2[0]} />
        <div className="w-1/2 h-full" />
        <ChartCell cell={row2[3]} />
      </div>
      {/* Row 3 */}
      <div className="flex flex-row h-1/4 w-full">
        <ChartCell cell={row3[0]} />
        <div className="w-1/2 h-full" />
        <ChartCell cell={row3[3]} />
      </div>
      {/* Row 4 */}
      <div className="flex flex-row h-1/4 w-full">
        {row4.map((cell, i) => <ChartCell key={i} cell={cell} />)}
      </div>

      {/* Absolute center block */}
      <div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-50 flex items-center justify-center border border-primary-100"
        aria-hidden="true"
      >
        <div className="text-center">
          <p className="font-heading font-bold text-primary-800 text-sm">Birth</p>
          <p className="font-heading font-bold text-primary-800 text-sm">Chart</p>
        </div>
      </div>
    </div>
  );
}

export default function BirthChartPreview() {
  const [activeTab, setActiveTab] = useState('chart');

  return (
    <section
      id="chart-preview"
      className="section-padding bg-background"
      aria-labelledby="chart-preview-heading"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-1/2"
          >
            <SectionLabel className="mb-4">Birth Chart</SectionLabel>
            <Heading level="h2" id="chart-preview-heading" className="mb-4">
              Your chart is more than your Sun sign
            </Heading>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              A Vedic birth chart places all 9 classical planets in the 12
              houses of your life — career, family, marriage, wealth. Each
              position follows classical rules from Brihat Parashara Hora
              Shastra.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                {
                  title: 'Twelve distinct areas',
                  desc: 'Each house represents specific aspects of life. Career is analyzed through the 10th house, finances via the 2nd.',
                },
                {
                  title: 'Planetary strengths (Shadbala)',
                  desc: 'Planets are not just present — they are strong or weak based on direction, time and active aspects.',
                },
                {
                  title: 'Ashtakavarga score maps',
                  desc: 'Numeric points computed for each sign showing the capacity of transiting planets to deliver results.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-none mt-0.5 text-xs font-bold text-primary-700"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-0.5">{item.title}</p>
                    <p className="text-sm text-ink-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md" href="#birth-chart">
                Generate My Chart
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="md" href="/kundli">
                <Download className="w-4 h-4" aria-hidden="true" />
                Download PDF
              </Button>
            </div>
          </motion.div>

          {/* Right: Chart Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white border border-border rounded-3xl shadow-card overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div>
                  <p className="font-heading font-semibold text-sm text-ink">Sample Reading</p>
                  <p className="text-xs text-ink-muted mt-0.5">Arjun K. · 15 Mar 1990 · Mumbai</p>
                </div>
                <div className="flex rounded-lg overflow-hidden border border-border text-xs font-semibold">
                  {['chart', 'planets'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 capitalize transition-colors ${
                        activeTab === tab
                          ? 'bg-primary-800 text-white'
                          : 'bg-white text-ink-muted hover:text-ink'
                      }`}
                      aria-pressed={activeTab === tab}
                      suppressHydrationWarning
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {activeTab === 'chart' ? (
                  <ChartGrid />
                ) : (
                  <div className="space-y-3">
                    {PLANET_SUMMARY.map((planet) => (
                      <div key={planet.name} className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-ink w-16 flex-none">{planet.name}</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${planet.strength}%`, backgroundColor: planet.color }}
                          />
                        </div>
                        <div className="flex items-center gap-1.5 w-28 flex-none">
                          <span className="text-xs text-ink-muted">{planet.sign}</span>
                          <span className="text-xs text-ink-light">·</span>
                          <span className="text-xs text-ink-muted">{planet.house}</span>
                        </div>
                        <span className="text-xs font-semibold text-ink w-10 text-right flex-none">{planet.strength}</span>
                      </div>
                    ))}
                    <p className="text-xs text-ink-light pt-2">Shadbala strength scores · Higher is stronger</p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-5 flex items-center justify-between">
                <p className="text-xs text-ink-muted">Sidereal · Lahiri · 9 Planets</p>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  ✓ Ready in 6ms
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
