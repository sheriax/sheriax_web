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
  const classes = cn(
    'inline-flex items-center justify-center font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
    {
      'text-white bg-stone-900 rounded-full hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/10': variant === 'primary',
      'text-stone-600 bg-white border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50': variant === 'secondary',
      'text-stone-400 hover:text-stone-900': variant === 'ghost',
    },
    {
      'px-4 py-2 text-[13px] gap-1.5': size === 'sm',
      'px-6 py-3 text-sm gap-2': size === 'md',
      'px-7 py-3.5 text-sm gap-2': size === 'lg',
    },
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
