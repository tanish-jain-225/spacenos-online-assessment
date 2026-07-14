'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position and determine
 * when the navbar should go from transparent to solid.
 */
export function useScrollNavbar(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
