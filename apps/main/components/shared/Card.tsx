import React from 'react';

interface CardProps {
  hover?: boolean;
  bordered?: boolean;
  padded?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  hover = false,
  bordered = true,
  padded = true,
  children,
  className = '',
}: CardProps) {
  const baseClasses = 'bg-surface rounded-2xl relative overflow-hidden';
  const borderClasses = bordered ? 'border border-border' : '';
  const paddingClasses = padded ? 'p-6 sm:p-8' : '';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg hover:border-border-dark hover:-translate-y-1' : '';

  return (
    <div className={`${baseClasses} ${borderClasses} ${paddingClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
