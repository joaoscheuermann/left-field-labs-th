import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

// --- Types ---

interface DialogContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface DialogProps {
  children: React.ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// --- Context ---

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a Dialog.Root');
  }
  return context;
};

// --- Hook ---

export const useDialog = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle, setOpen: setIsOpen };
};

// --- Components ---

export const Root = ({
  children,
  isOpen: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const open = useCallback(() => handleOpenChange(true), [handleOpenChange]);
  const close = useCallback(() => handleOpenChange(false), [handleOpenChange]);
  const toggle = useCallback(
    () => handleOpenChange(!isOpen),
    [isOpen, handleOpenChange]
  );

  return (
    <DialogContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </DialogContext.Provider>
  );
};

export const Trigger = ({
  children,
  className,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) => {
  const { open } = useDialogContext();

  // If asChild is true, we would ideally clone the child.
  // For simplicity, we'll wrap in a div or just attach props if we were using a library like Radix.
  // Here, we'll default to a simple div wrapper that acts as a button, or user can pass a button.
  // To keep it semantic, let's render a generic element but handle the click.

  return (
    <div
      onClick={(e) => {
        props.onClick?.(e);
        open();
      }}
      className={clsx('inline-block cursor-pointer', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useDialogContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(children, document.body);
};

export const Overlay = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { close } = useDialogContext();

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] transition-opacity',
        className
      )}
      onClick={(e) => {
        props.onClick?.(e);
        close();
      }}
      {...props}
    />
  );
};

export const Content = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
      <div
        className={clsx(
          'relative z-50 w-full max-w-lg p-6 bg-neutral-900 text-white rounded-xl shadow-lg pointer-events-auto flex flex-col gap-4',
          'animate-in fade-in zoom-in-95 duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export const Header = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx('flex flex-col gap-1 sm:text-left relative', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const Title = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={clsx(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const Description = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={clsx('text-sm text-neutral-500', className)} {...props}>
      {children}
    </p>
  );
};

export const Close = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { close } = useDialogContext();
  return (
    <button
      type="button"
      className={clsx('opacity-70 hover:opacity-100', className)}
      onClick={(e) => {
        props.onClick?.(e);
        close();
      }}
      {...props}
    >
      {children || <span className="sr-only">Close</span>}
    </button>
  );
};
