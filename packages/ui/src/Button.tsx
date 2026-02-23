import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  rightIcon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  rightIcon = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-[13px] gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'text-white bg-brand-600 rounded-full hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20',
    secondary: 'text-zinc-600 bg-white border border-zinc-200 rounded-full hover:border-zinc-300 hover:bg-zinc-50',
    ghost: 'text-zinc-400 hover:text-zinc-900',
  };

  const classes = cn(
    'inline-flex items-center justify-center font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {rightIcon && <ArrowRight className="w-3.5 h-3.5 opacity-60" />}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
