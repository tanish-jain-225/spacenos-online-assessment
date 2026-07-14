import { cn } from '@/utils/cn';

const LEVELS = {
  display: 'font-heading text-display font-semibold tracking-tight text-ink',
  h1: 'font-heading text-h1 font-semibold tracking-tight text-ink',
  h2: 'font-heading text-h2 font-semibold tracking-tight text-ink',
  h3: 'font-heading text-h3 font-semibold text-ink',
  h4: 'font-heading text-xl font-semibold text-ink',
};

export default function Heading({
  level = 'h2',
  as,
  children,
  className,
  ...props
}) {
  const Tag = as ?? level;
  return (
    <Tag className={cn(LEVELS[level] ?? LEVELS.h2, className)} {...props}>
      {children}
    </Tag>
  );
}
