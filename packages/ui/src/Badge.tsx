import React from 'react';
import { cn } from './utils';

type BadgeVariant = 'default' | 'accent' | 'success' | 'blue';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-stone-100/80 text-stone-500 border-stone-200/60',
  accent: 'bg-brand-50 text-brand-600 border-brand-100/80',
  success: 'bg-emerald-50 text-emerald-600 border-emerald-100/80',
  blue: 'bg-blue-50 text-blue-600 border-blue-100/80',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
