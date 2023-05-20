import { Button as ButtonPrimitive, forwardRef } from '@particles/primitives';
import { TbLoader } from 'react-icons/tb';
import type { ButtonProps as ButtonPrimitiveProps } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

const tokens = {
  colors: {
    'on-primary': 'text-white',
    secondary: 'bg-white dark:bg-shark-900',
    'on-secondary': 'text-shark-900 dark:text-shark-50',
    'secondary-emphasis': 'hover:bg-shark-50 dark:hover:bg-shark-800',
  },
};

const useStyles = createStyles({
  root: {
    base: [
      'inline-flex',
      'items-center',
      'font-semibold',
      'border',
      'rounded-lg',
      'disabled:opacity-50',
      'disabled:pointer-events-none',
      'focus:outline-none',
      'focus-visible:ring',
      'focus-visible:ring-indigo-300',
      'shadow-sm',
      'whitespace-nowrap',
    ],
    variants: {
      palette: {
        primary: [
          'text-primary-fg bg-primary border-transparent',
          'hover:bg-primary-hover',
        ],
        secondary: [
          'bg-gray-50',
          tokens.colors['on-secondary'],
          'border-gray-300',
          tokens.colors['secondary-emphasis'],
        ],
        danger: [
          'text-danger-fg bg-danger border-transparent',
          'hover:bg-danger-hover',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-1'],
        medium: ['text-base', 'py-2', 'px-2'],
      },
    },
    defaultVariants: {
      palette: 'primary',
      size: 'medium',
    },
  },
});

export interface ButtonProps extends ButtonPrimitiveProps {
  // The children of the Button
  children?: ReactNode;
  palette?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium';
  // Icon to place at the start of the Button
  icon?: ReactNode;
  // Icon to place at the end of the Button
  iconEnd?: ReactNode;
  // Loading state
  isLoading?: boolean;
  loadingLabel?: string;
  classNames?: {
    root: string;
  };
}

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    children,
    palette,
    size,
    icon,
    iconEnd,
    isLoading,
    loadingLabel,
    disabled,
    className,
    classNames,
    ...rest
  } = props;

  const { classes, cn } = useStyles({ palette, size }, { classNames });

  return (
    <ButtonPrimitive.Root
      ref={ref}
      className={cn(classes.root, className)}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className="pl-1 only:px-0">
            <TbLoader className="animate-spin" />
          </span>
          <span className="px-2">{loadingLabel || children}</span>
        </>
      ) : (
        <>
          {icon && (
            <ButtonPrimitive.Icon className="pl-1 only:px-0">
              {icon}
            </ButtonPrimitive.Icon>
          )}
          {children && <span className="px-2">{children}</span>}
          {iconEnd && (
            <ButtonPrimitive.Icon className="pr-1 only:px-0">
              {iconEnd}
            </ButtonPrimitive.Icon>
          )}
        </>
      )}
    </ButtonPrimitive.Root>
  );
});

export default Button;
