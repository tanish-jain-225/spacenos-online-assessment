/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#3730A3',
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        accent: {
          DEFAULT: '#D97706',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(48px, 7vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['clamp(36px, 5vw, 56px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h2': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h3': ['clamp(20px, 2.5vw, 26px)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.06em' }],
        'label': ['11px', { lineHeight: '1.5', letterSpacing: '0.10em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.10)',
        'nav': '0 1px 0 rgba(0,0,0,0.06)',
        'input': '0 0 0 3px rgba(55,48,163,0.12)',
        'btn': '0 2px 8px rgba(55,48,163,0.30)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'ticker': 'ticker 50s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'counter': 'counter 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
      },
      keyframes: {
        ticker: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        counter: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'container': '1200px',
        'content': '800px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
