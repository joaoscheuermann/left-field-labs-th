import React from 'react';
import clsx from 'clsx';
import { Box } from '../atoms/Box';

// --- Types ---

export interface PageRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  sticky?: boolean;
}

export interface PageBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface PageNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  sticky?: boolean;
}

export const Root = ({ className, children, ...props }: PageRootProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 h-screen w-screen bg-black text-white overflow-hidden overflow-y-scroll p-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Header = ({
  className,
  sticky = false,
  children,
  ...props
}: PageHeaderProps) => {
  return (
    <header
      className={clsx(
        'flex flex-grow items-center justify-between shrink-0 gap-6',
        sticky && 'sticky top-0',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

export const Body = ({ className, children, ...props }: PageBodyProps) => {
  return (
    <main className={clsx('flex-1 w-full', className)} {...props}>
      {children}
    </main>
  );
};

export const Navigation = ({
  className,
  sticky = true,
  children,
  ...props
}: PageNavigationProps) => {
  return (
    <Box
      className={clsx('w-full', sticky && 'sticky bottom-0', className)}
      {...props}
    >
      {children}
    </Box>
  );
};
