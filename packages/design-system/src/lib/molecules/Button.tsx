import React from 'react';
import clsx from 'clsx';

// --- Types ---

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'white';

export type ButtonSize = 'lg' | 'md' | 'sm';

// --- Wrapper ---

export interface ButtonWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  fullWidth?: boolean;
}

export const Wrapper = React.forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  (
    {
      variant = 'primary',
      size = 'lg',
      outline = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // We can be more specific with the padding if we strictly follow the 46px from the image for LG.
    // The image says: Padding Left/Right 46px.
    const strictSizeStyles = {
      lg: 'py-[16px] px-[46px] text-label-lg',
      md: 'py-[12px] px-[32px] text-label-md',
      sm: 'py-[8px] px-[24px] text-label-sm',
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
      };

      return variants[variant][outline ? 'outline' : 'solid'];
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          strictSizeStyles[size],
          getVariantStyles(),
          fullWidth && 'w-full',
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
Wrapper.displayName = 'Button.Wrapper';

// --- Label ---

export interface ButtonLabelProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Label = ({ className, children, ...props }: ButtonLabelProps) => {
  return (
    <span
      className={clsx('font-sans font-medium leading-none', className)}
      {...props}
    >
      {children}
    </span>
  );
};

// --- Icon ---

export interface ButtonIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Icon = ({ className, children, ...props }: ButtonIconProps) => {
  return (
    <span
      className={clsx('flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </span>
  );
};
