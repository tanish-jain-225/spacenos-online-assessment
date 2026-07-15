'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { NAV_LINKS } from '@/constants/navigation';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';

import Image from 'next/image';

export default function Navbar() {
  const scrolled = useScrollNavbar(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    alert('No login required! All computations and birth charts are calculated locally on your device to keep your personal data 100% private.');
  };

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-quart',
          scrolled
            ? 'bg-white/95 navbar-backdrop border-b border-border shadow-nav'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 flex-none group"
            aria-label="RahuNow — Home"
          >
            <Image
              src="/icons/logo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg object-contain"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <span className="font-heading font-bold text-xl text-ink tracking-tight">
              RahuNow
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden lg:flex items-center gap-1 list-none"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                    'text-ink-muted hover:text-ink hover:bg-gray-100',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Actions ── */}
          <div className="hidden lg:flex items-center gap-3 flex-none">
            <Button variant="ghost" size="sm" href="#login" onClick={handleLoginClick}>
              Login
            </Button>
            <Button variant="primary" size="sm" href="#birth-chart">
              Get Your Reading
            </Button>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            className={cn(
              'lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors',
              'text-ink hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            suppressHydrationWarning
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {menuOpen && (
        <div
          className="menu-overlay lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-xl flex flex-col lg:hidden',
          'transition-transform duration-300 ease-out-quart',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!menuOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <span className="font-heading font-bold text-lg text-ink">Menu</span>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
            suppressHydrationWarning
          >
            <X className="w-5 h-5 text-ink-muted" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  tabIndex={menuOpen ? 0 : -1}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    'text-ink-muted hover:text-ink hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-border flex flex-col gap-3">
          <Button
            variant="secondary"
            size="md"
            href="#login"
            className="w-full"
            onClick={handleLoginClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            Login
          </Button>
          <Button
            variant="primary"
            size="md"
            href="#birth-chart"
            className="w-full"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get Your Reading
          </Button>
        </div>
      </div>
    </>
  );
}
