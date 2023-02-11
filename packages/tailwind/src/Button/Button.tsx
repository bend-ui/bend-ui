import { ReactNode } from 'react';
import { cva, type VariantProps } from 'cva';
import { twMerge } from 'tailwind-merge';
import {
  Button as ButtonPrimitive,
  ButtonProps as ButtonPrimitiveProps,
  forwardRef,
} from '@particles/primitives';
import { TbLoader } from 'react-icons/tb';

const tokens = {
  colors: {
    primary: 'bg-indigo-500',
    'on-primary': 'text-white',
    secondary: 'bg-slate-700 dark:bg-slate-50',
    'on-secondary': 'text-white dark:text-slate-900',
    'secondary-emphasis': 'hover:bg-slate-900 dark:hover:bg-slate-200',
  },
};

const buttonStyles = cva(
  [
    'font-semibold',
    'border',
    'rounded-md',
    'flex',
    'items-center',
    'disabled:opacity-50',
    'disabled:pointer-events-none',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-slate-400',
    'focus:ring-offset-2',
    'dark:focus:ring-slate-400',
  ],
  {
    variants: {
      palette: {
        primary: [
          'bg-primary',
          tokens.colors['on-primary'],
          'border-transparent',
          'hover:bg-indigo-600',
        ],
        secondary: [
          'bg-neutral',
          tokens.colors['on-secondary'],
          'border-slate-300',
          tokens.colors['secondary-emphasis'],
        ],
        danger: [
          'bg-red-500',
          'text-white',
          'border-transparent',
          'hover:bg-red-600',
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
  }
);

export interface ButtonProps
  extends ButtonPrimitiveProps,
    VariantProps<typeof buttonStyles> {
  // The children of the Button
  children?: ReactNode;
  // Icon to place at the start of the Button
  icon?: ReactNode;
  // Icon to place at the end of the Button
  iconEnd?: ReactNode;
  // Loading state
  isLoading?: boolean;
  loadingLabel?: string;
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
    ...rest
  } = props;
  return (
    <ButtonPrimitive
      ref={ref}
      className={twMerge(buttonStyles({ palette, size }))}
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
    </ButtonPrimitive>
  );
});

export default Button;
