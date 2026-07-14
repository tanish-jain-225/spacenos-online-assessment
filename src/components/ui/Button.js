'use client';

import { cn } from '@/utils/cn';

const VARIANTS = {
  primary:
    'bg-primary-800 text-white hover:bg-primary-700 shadow-btn hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2',
  secondary:
    'bg-white text-primary-800 border border-border hover:border-primary-300 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-ink-muted border border-border hover:border-primary-300 hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-primary-800',
  accent:
    'bg-accent text-white hover:bg-accent-700 shadow-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  success:
    'bg-emerald-600 text-white border-transparent shadow-btn cursor-default',
};

const SIZES = {
  sm: 'py-1.5 px-3.5 text-xs font-medium rounded-lg',
  md: 'py-2.5 px-5 text-sm font-semibold rounded-xl',
  lg: 'py-3.5 px-6 text-base font-semibold rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  disabled,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out-quart whitespace-nowrap select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className
  );

  const handleClick = (e) => {
    if (href) {
      e.preventDefault();
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Fallback scroll to birth chart form for other page routes
        const target = document.querySelector('#birth-chart');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        suppressHydrationWarning
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={classes}
      onClick={props.onClick}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
}
