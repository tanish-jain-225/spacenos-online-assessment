// Today's static astrology data (in production would be computed live)
export const TODAYS_DATA = {
  date: 'Monday, July 14, 2026',
  horoscope: {
    sign: 'Aries',
    summary: 'Mars in your sign amplifies drive. A window for decisive action opens mid-afternoon. Avoid impulsive financial commitments.',
    score: 78,
  },
  luckyNumber: 7,
  luckyColor: {
    name: 'Indigo',
    hex: '#4338CA',
  },
  moonPhase: {
    name: 'Waxing Crescent',
    emoji: '🌒',
    percent: 34,
  },
  rahuKalam: {
    start: '07:30 AM',
    end: '09:00 AM',
    note: 'Avoid starting new ventures during this window',
  },
  muhurat: {
    name: 'Abhijit Muhurat',
    time: '11:48 AM – 12:36 PM',
    quality: 'Excellent',
    note: 'Favorable for contracts, decisions and new beginnings',
  },
};

export const PLANETS_TODAY = [
  { name: 'Sun', glyph: '☉', position: '22°48′', sign: 'Gemini', color: 'text-amber-600' },
  { name: 'Moon', glyph: '☽', position: '10°44′', sign: 'Aries', color: 'text-slate-500' },
  { name: 'Mars', glyph: '♂', position: '21°28′', sign: 'Aries', color: 'text-red-600' },
  { name: 'Mercury', glyph: '☿', position: '26°11′', sign: 'Gemini', color: 'text-emerald-600' },
  { name: 'Jupiter', glyph: '♃', position: '07°25′', sign: 'Cancer', color: 'text-amber-500' },
  { name: 'Venus', glyph: '♀', position: '05°14′', sign: 'Leo', color: 'text-rose-500' },
  { name: 'Saturn', glyph: '♄', position: '19°58′', sign: 'Pisces', color: 'text-slate-600', retrograde: true },
  { name: 'Rahu', glyph: '☊', position: '07°55′', sign: 'Aquarius', color: 'text-violet-600', retrograde: true },
  { name: 'Ketu', glyph: '☋', position: '07°55′', sign: 'Leo', color: 'text-stone-500', retrograde: true },
];
