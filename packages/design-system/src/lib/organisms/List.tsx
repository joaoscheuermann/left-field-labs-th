import React from 'react';
import clsx from 'clsx';

// List.Root
export const Root = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul
      className={clsx('flex flex-col gap-2 p-0 m-0 list-none', className)}
      {...props}
    >
      {children}
    </ul>
  );
};

// List.Item
export const Item = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li
      className={clsx(
        'flex items-center p-4 gap-4 bg-neutral-50 rounded-2xl w-full',
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

// List.Leading
export const Leading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('flex-shrink-0', className)} {...props}>
      {children}
    </div>
  );
};

// List.Body
export const Body = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('flex-1 min-w-0', className)} {...props}>
      {children}
    </div>
  );
};

// List.Trailing
export const Trailing = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('flex-shrink-0', className)} {...props}>
      {children}
    </div>
  );
};
