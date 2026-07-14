import { cn } from '@/utils/cn';

export default function Card({ children, className, hover = false, padding = 'md', ...props }) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white border border-border rounded-2xl shadow-card',
        hover && 'card-lift cursor-pointer',
        paddings[padding] ?? paddings.md,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
