import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://rahunow.com'),
  title: {
    default: 'RahuNow — Modern Vedic Astrology & AI Birth Chart Reading',
    template: '%s | RahuNow',
  },
  description:
    'Discover your Vedic birth chart with AI-powered insights. Free, private, and computed live — love, career, marriage timing in plain words. No sign-up required.',
  keywords: [
    'vedic astrology',
    'birth chart',
    'kundli online',
    'AI astrologer',
    'free astrology',
    'horoscope',
    'panchang',
    'jyotish',
    'marriage compatibility',
    'dasha predictions',
  ],
  authors: [{ name: 'RahuNow', url: 'https://rahunow.com' }],
  creator: 'RahuNow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rahunow.com/',
    siteName: 'RahuNow',
    title: 'RahuNow — Modern Vedic Astrology & AI Birth Chart Reading',
    description:
      'Discover your Vedic birth chart with AI-powered insights. Free, private, no sign-up.',
    images: [
      {
        url: '/icons/logo.png',
        width: 1200,
        height: 630,
        alt: 'RahuNow — Modern Vedic Astrology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RahuNow — Modern Vedic Astrology & AI Birth Chart Reading',
    description:
      'Discover your Vedic birth chart with AI-powered insights. Free, private, no sign-up.',
    images: ['/icons/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/logo.png',
  },
};

export const viewport = {
  themeColor: '#3730A3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://rahunow.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://rahunow.com/#org',
                  name: 'RahuNow',
                  url: 'https://rahunow.com/',
                  description:
                    'Free AI-assisted Vedic astrology — birth chart reading, daily timing, compatibility, and more.',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://rahunow.com/#website',
                  name: 'RahuNow',
                  url: 'https://rahunow.com/',
                  publisher: { '@id': 'https://rahunow.com/#org' },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
