import React from 'react';
import { cn } from './utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'center' | 'left';
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {label && (
        <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">
          {label}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-[2.5rem] font-display text-zinc-900 tracking-[-0.03em]">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-3 text-base text-zinc-500',
          align === 'center' && 'max-w-lg mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
