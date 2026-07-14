/**
 * Utility to merge class names conditionally.
 * Lightweight alternative to clsx.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a number with commas for display
 */
export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num.toString();
}
