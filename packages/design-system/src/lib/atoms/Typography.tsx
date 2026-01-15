import React from 'react';
import clsx from 'clsx';

export type TypographyVariant =
  | 'title'
  | 'headline'
  | 'subhead'
  | 'body'
  | 'label'
  | 'caption';

export type TypographySize = 'xl' | 'lg' | 'md' | 'sm';

export type TypographyWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'xbold';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  as?: React.ElementType;
}

export const Typography = ({
  variant = 'body',
  size = 'md',
  weight = 'regular',
  italic = false,
  underline = false,
  strikethrough = false,
  as: Component = 'p',
  className,
  children,
  ...props
}: TypographyProps) => {
  const getVariantClass = () => {
    if (variant === 'caption') {
      return 'text-caption';
    }
    // Handle cases where specific sizes aren't strictly validated but we generate the class
    // Ideally we'd enforce size availability per variant via types, but this is flexible.
    return `text-${variant}-${size}`;
  };

  const weightClasses = {
    regular: 'font-regular',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    xbold: 'font-xbold',
  };

  return (
    <Component
      className={clsx(
        'font-sans text-gray-900', // Default font family and color
        getVariantClass(),
        weightClasses[weight],
        italic && 'italic',
        underline && 'underline',
        strikethrough && 'line-through',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
