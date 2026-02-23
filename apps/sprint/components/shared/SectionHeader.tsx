import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col space-y-4 mb-12 ${alignClasses} ${className}`}>
      {label && (
        <span className="text-sm font-semibold tracking-wider text-accent uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
