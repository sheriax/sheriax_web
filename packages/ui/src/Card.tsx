import React from 'react';
import { cn } from './utils';

interface CardProps {
  hover?: boolean;
  bordered?: boolean;
  padded?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  hover = true,
  bordered = true,
  padded = true,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl',
        bordered && 'border border-stone-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)]',
        hover && 'hover:shadow-xl hover:shadow-stone-900/[0.04] hover:border-stone-300/60 hover:-translate-y-0.5 transition-all duration-300',
        padded && 'p-6 sm:p-8',
        className
      )}
    >
      {children}
    </div>
  );
}
