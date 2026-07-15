'use client';

import { Twitter, Instagram, Youtube } from 'lucide-react';
import Container from '@/components/ui/Container';
import NewsletterForm from '@/components/ui/NewsletterForm';
import Image from 'next/image';

const mapPathToSection = (path) => {
  if (path === '/app') return '#ai-assistant';
  if (path === '/panchang') return '#services';
  if (path === '/horoscope' || path === '/transit-news') return '#today';
  if (path === '/knowledge' || path === '/about') return '#how-it-works';
  if (path === '/astrology-answers') return '#faq';
  return '#birth-chart';
};

const TOOL_LINKS = [
  { label: 'Life Reading', href: '/kundli-predictions' },
  { label: 'Birth Chart', href: '/kundli' },
  { label: 'Daily Companion', href: '/app' },
  { label: 'Panchang', href: '/panchang' },
  { label: 'Compatibility', href: '/compatibility' },
  { label: 'Numerology', href: '/numerology' },
];

const EXPLORE_LINKS = [
  { label: 'Horoscope', href: '/horoscope' },
  { label: 'Transit News', href: '/transit-news' },
  { label: 'Knowledge Hub', href: '/knowledge' },
  { label: 'Astrology Q&A', href: '/astrology-answers' },
  { label: 'Astrocartography', href: '/astrocartography' },
  { label: 'Audit Our Math', href: '/audit-math' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'System Status', href: '/status' },
];

const SOCIALS = [
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com/rahunow' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/rahunow' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/@rahunow' },
];

function FooterColumn({ heading, links }) {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    const sectionId = mapPathToSection(path);
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <h3 className="text-label font-semibold uppercase tracking-widest text-ink-light mb-5">
        {heading}
      </h3>
      <ul className="space-y-3 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-150 font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-border" role="contentinfo">
      <Container className="py-16 lg:py-20">
        {/* ── Top Grid ── */}
        <div className="flex flex-wrap -mx-5 -my-5">
          {/* Brand Column */}
          <div className="w-full lg:w-2/5 p-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="inline-flex items-center gap-2.5 mb-6"
              aria-label="RahuNow"
            >
              <Image
                src="/icons/logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="font-heading font-bold text-xl text-ink tracking-tight">RahuNow</span>
            </a>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm mb-8">
              Real Vedic astrology in plain words. Your exact birth sky read,
              timed, and explained — with the classical source behind every
              answer. Free. Private. On your device.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-ink mb-3">Weekly cosmic insights</p>
              <NewsletterForm />
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RahuNow on ${label}`}
                  className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center text-ink-muted hover:text-primary-700 hover:border-primary-200 transition-all duration-150"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="w-1/2 md:w-1/4 lg:w-1/5 p-5">
            <FooterColumn heading="Tools" links={TOOL_LINKS} />
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-1/5 p-5">
            <FooterColumn heading="Explore" links={EXPLORE_LINKS} />
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-1/5 p-5">
            <FooterColumn heading="Company" links={COMPANY_LINKS} />
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-ink-light">
            <p>© {year} RahuNow · Lahiri Ayanāṁśa · Made in India</p>
            <p className="mt-1 max-w-xl leading-relaxed">
              For research, education & self-reflection only. Not a substitute
              for medical, legal, or financial advice.
            </p>
          </div>
          <p className="text-xs text-ink-light flex-none">v2.0</p>
        </div>
      </Container>
    </footer>
  );
}
