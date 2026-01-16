import React from 'react';
import clsx from 'clsx';
import { Search as SearchIcon } from '@org/icons';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional wrapper class name
   */
  wrapperClassName?: string;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    { className, wrapperClassName, placeholder = 'Placeholder', ...props },
    ref
  ) => {
    return (
      <div
        className={clsx(
          'relative flex flex-grow items-center w-full h-[40px] px-3 rounded-full transition-colors',
          'bg-primary-400 text-white',
          'focus-within:ring-2 focus-within:ring-white/50',
          'gap-2',
          wrapperClassName
        )}
      >
        <SearchIcon className="w-5 h-5 shrink-0 opacity-80" />
        <input
          ref={ref}
          type="text"
          className={clsx(
            'w-full bg-transparent border-none outline-none text-white placeholder-primary-100 text-sm font-medium',
            className
          )}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default Search;

Search.displayName = 'Search';
