import { cn } from '@/utils/cn';

/**
 * Small eyebrow label above section headings.
 * Example: "■ Why Choose Us"
 */
export default function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-label font-semibold uppercase tracking-widest text-primary-700',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-none" aria-hidden="true" />
      {children}
    </p>
  );
}
