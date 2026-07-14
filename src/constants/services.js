export const SERVICES = [
  {
    id: 'birth-chart',
    icon: 'LayoutDashboard',
    title: 'Birth Chart',
    subtitle: 'Kundli Reading',
    description:
      'Your exact planetary positions at birth, computed using the classical Lahiri ayanamsa. Understand your strengths, challenges, and karmic patterns.',
    href: '/kundli',
    tag: 'Free',
    color: 'indigo',
  },
  {
    id: 'daily-horoscope',
    icon: 'Sun',
    title: 'Daily Horoscope',
    subtitle: 'Personalized Timing',
    description:
      'Not generic sign-based forecasts. Your real transits for today — which planets activate your chart and what that means for love, work, and decisions.',
    href: '/horoscope',
    tag: 'Daily',
    color: 'amber',
  },
  {
    id: 'compatibility',
    icon: 'Heart',
    title: 'Compatibility',
    subtitle: 'Kundli Matching',
    description:
      'Classical Ashtakoot matching + modern chart synastry. Understand compatibility beyond surface-level Sun sign comparisons.',
    href: '/compatibility',
    tag: 'Popular',
    color: 'rose',
  },
  {
    id: 'panchang',
    icon: 'Calendar',
    title: 'Panchang',
    subtitle: 'Vedic Calendar',
    description:
      'Tithi, Nakshatra, Yoga, Karana, and Rahu Kalam — the five classical elements of a Vedic day. Know the quality of time before you act.',
    href: '/panchang',
    tag: 'Free',
    color: 'emerald',
  },
  {
    id: 'numerology',
    icon: 'Hash',
    title: 'Numerology',
    subtitle: 'Name & Birth Numbers',
    description:
      'Vedic numerology aligned with your Jyotish chart. Life Path, Expression, and Soul Urge numbers connected to your planetary periods.',
    href: '/numerology',
    tag: 'New',
    color: 'violet',
  },
  {
    id: 'remedies',
    icon: 'Gem',
    title: 'Remedies',
    subtitle: 'Jyotish Upaya',
    description:
      'Classical Vedic remedies — mantras, gemstones, and timing strategies — personalized to your chart\'s specific challenges and opportunities.',
    href: '/remedies',
    tag: 'Premium',
    color: 'orange',
  },
];

export const SERVICE_COLORS = {
  indigo: {
    bg: 'bg-primary-50',
    icon: 'text-primary-700',
    border: 'border-primary-100',
    tag: 'bg-primary-100 text-primary-700',
  },
  amber: {
    bg: 'bg-accent-50',
    icon: 'text-accent-700',
    border: 'border-amber-100',
    tag: 'bg-amber-100 text-amber-700',
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'text-rose-600',
    border: 'border-rose-100',
    tag: 'bg-rose-100 text-rose-700',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    border: 'border-emerald-100',
    tag: 'bg-emerald-100 text-emerald-700',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'text-violet-600',
    border: 'border-violet-100',
    tag: 'bg-violet-100 text-violet-700',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-100',
    tag: 'bg-orange-100 text-orange-700',
  },
};
