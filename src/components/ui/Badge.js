import { cn } from '@/utils/cn';

const VARIANTS = {
  default: 'bg-primary-50 text-primary-700 border border-primary-100',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  warning: 'bg-amber-50 text-amber-700 border border-amber-100',
  new: 'bg-violet-50 text-violet-700 border border-violet-100',
  live: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  neutral: 'bg-gray-100 text-gray-600 border border-gray-200',
};

export default function Badge({ children, variant = 'default', className, dot }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
        VARIANTS[variant] ?? VARIANTS.default,
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full flex-none animate-pulse-dot',
            variant === 'live' ? 'bg-emerald-500' : 'bg-current opacity-60'
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
