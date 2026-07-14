import { cn } from '@/utils/cn';

export default function Container({ children, className, wide = false, ...props }) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-10',
        wide ? 'max-w-[1280px]' : 'max-w-[1200px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
