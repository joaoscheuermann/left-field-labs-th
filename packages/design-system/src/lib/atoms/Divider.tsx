import React from 'react';
import clsx from 'clsx';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the divider relative to its container.
   * 'full' = 100%, 'half' = 50%, 'third' = 33%.
   * Defaults to 'full'.
   */
  size?: 'full' | 'half' | 'third';
  /**
   * The orientation of the divider.
   * Defaults to 'horizontal'.
   */
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({
  className,
  size = 'full',
  orientation = 'horizontal',
  ...props
}: DividerProps) => {
  return (
    <div
      className={clsx(
        'bg-divider rounded-full',
        orientation === 'horizontal' ? 'h-[1px]' : 'w-[1px]',
        // Horizontal widths
        orientation === 'horizontal' && size === 'full' && 'w-full',
        orientation === 'horizontal' && size === 'half' && 'w-1/2',
        orientation === 'horizontal' && size === 'third' && 'w-1/3',
        // Vertical heights
        orientation === 'vertical' && size === 'full' && 'h-full',
        orientation === 'vertical' && size === 'half' && 'h-1/2',
        orientation === 'vertical' && size === 'third' && 'h-1/3',
        className
      )}
      {...props}
    />
  );
};
