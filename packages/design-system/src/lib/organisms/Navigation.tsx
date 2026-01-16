import React from 'react';
import clsx from 'clsx';

// --- Types ---

export interface NavigationRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface NavigationItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface NavigationActionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  children: React.ReactNode;
}

export const Root = ({
  className,
  children,
  ...props
}: NavigationRootProps) => {
  return (
    <nav
      className={clsx(
        'relative bg-[#1E1E1E]',
        'flex items-center justify-between',
        'w-full min-h-[64px]',
        'rounded-[12px] px-[24px]',
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export const Item = ({
  active,
  disabled,
  className,
  children,
  onClick,
  ...props
}: NavigationItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center h-full w-[48px] py-2',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        'gap-1',
        className
      )}
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
    >
      <div className="h-[4px]"></div>
      <div
        className={clsx(
          'flex items-center justify-center transition-colors duration-200',
          active ? 'text-primary' : 'text-gray-400'
        )}
      >
        {children}
      </div>

      <div
        className={clsx(
          'left-1/2 -translate-x-1/2 h-[4px] w-[4px] rounded-full transition-colors duration-200',
          active && !disabled ? 'bg-primary' : 'bg-transparent'
        )}
      />
    </div>
  );
};

export const ActionItem = ({
  disabled,
  className,
  children,
  onClick,
  ...props
}: NavigationActionItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center h-full w-[48px]',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-center rounded-[16px] w-[56px] h-[56px] transition-all shadow-lg',
          'bg-primary'
        )}
      >
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};
