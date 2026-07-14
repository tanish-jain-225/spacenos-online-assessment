'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1800,
  className,
}) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef(null);
  const startRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    startRef.current = null;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setDisplayValue(Math.round(easedProgress * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, value, duration]);

  // Format the display value
  const formatted =
    value >= 1000000
      ? (displayValue / 1000000).toFixed(displayValue < value ? 1 : 1) + 'M'
      : value >= 100000
      ? (displayValue / 1000).toFixed(0) + 'K'
      : displayValue.toLocaleString();

  return (
    <span ref={ref} className={cn('tabular-nums', className)} aria-label={`${value}${suffix}`}>
      {formatted}{suffix}
    </span>
  );
}
