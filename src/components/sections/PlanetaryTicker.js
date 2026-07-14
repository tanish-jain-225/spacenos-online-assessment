import { PLANETS_TODAY } from '@/constants/horoscope';

export default function PlanetaryTicker() {
  return (
    <div
      className="ticker-wrapper border-y border-border bg-gray-50 overflow-hidden"
      role="marquee"
      aria-label="Current planetary positions"
    >
      <div className="ticker-track flex animate-ticker whitespace-nowrap">
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink-muted border-r border-border">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot flex-none"
                aria-hidden="true"
              />
              Sky Now
            </span>

            {PLANETS_TODAY.map((planet) => (
              <span
                key={`${copy}-${planet.name}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border-r border-border text-xs font-medium text-ink-muted"
              >
                <span
                  className={`text-sm leading-none ${planet.color}`}
                  aria-hidden="true"
                >
                  {planet.glyph}
                </span>
                <span className="text-ink font-semibold">{planet.name}</span>
                <span>{planet.position}</span>
                <span className="text-ink-light">{planet.sign}</span>
                {planet.retrograde && (
                  <span
                    className="text-rose-500 font-bold text-xs"
                    title="Retrograde"
                    aria-label="retrograde"
                  >
                    ℞
                  </span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
