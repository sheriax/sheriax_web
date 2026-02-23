import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'accent' | 'success' | 'blue';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border';
  
  const variantClasses = {
    default: 'bg-surface text-primary border-border',
    accent: 'bg-accent-light text-accent border-accent/20',
    success: 'bg-success/10 text-success border-success/20',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
