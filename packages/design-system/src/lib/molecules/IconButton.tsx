import React from 'react';
import clsx from 'clsx';
import { ButtonVariant, ButtonSize } from './Button';

// --- Types ---

export type { ButtonVariant, ButtonSize };

// --- Wrapper ---

export interface IconButtonWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
}

export const Wrapper = React.forwardRef<
  HTMLButtonElement,
  IconButtonWrapperProps
>(
  (
    {
      variant = 'primary',
      size = 'lg',
      outline = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const sizeStyles = {
      lg: 'p-[16px]',
      md: 'p-[12px]',
      sm: 'p-[8px]',
    };

    const getVariantStyles = () => {
      const variants = {
        primary: {
          solid:
            'bg-primary text-primary-content hover:bg-primary/90 active:bg-primary/80 focus:ring-primary disabled:bg-gray-300 disabled:text-gray-500',
          outline:
            'border-[1.5px] border-primary text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10 focus:ring-primary disabled:border-gray-300 disabled:text-gray-400',
        },
        secondary: {
          solid:
            'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400 disabled:bg-gray-100 disabled:text-gray-400',
          outline:
            'border-[1.5px] border-gray-400 text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-400',
        },
        destructive: {
          solid:
            'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500',
          outline:
            'border-[1.5px] border-red-500 text-red-500 bg-transparent hover:bg-red-50 active:bg-red-100 focus:ring-red-500',
        },
        white: {
          solid:
            'bg-white text-primary hover:bg-neutral-100 active:bg-neutral-200 focus:ring-white disabled:bg-neutral-300 disabled:text-neutral-500',
          outline:
            'border-[1.5px] border-white text-white bg-transparent hover:bg-white/10 active:bg-white/20 focus:ring-white disabled:border-neutral-500 disabled:text-neutral-500',
        },
        ghost: {
          solid:
            'bg-transparent text-inherit hover:bg-neutral-500/10 active:bg-neutral-500/20 focus:ring-neutral-500 disabled:opacity-50',
          outline:
            'bg-transparent border-[1.5px] border-transparent text-inherit hover:bg-neutral-500/10 active:bg-neutral-500/20 focus:ring-neutral-500 disabled:opacity-50',
        },
      };

      return variants[variant][outline ? 'outline' : 'solid'];
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          sizeStyles[size],
          getVariantStyles(),
          disabled && 'cursor-not-allowed opacity-60',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Wrapper.displayName = 'IconButton.Wrapper';
