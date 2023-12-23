import {
  Button as ButtonPrimitive,
  forwardRef,
  twButtonStyles,
  useId,
} from '@particles/primitives';
import { TbLoader } from 'react-icons/tb';
import { isValidElement } from 'react';
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
      ...twButtonStyles.root,
      'font-semibold',
      'border',
      'rounded-lg',
      'disabled:opacity-50',
      'disabled:pointer-events-none',
      'focus:outline-none',
      'focus-visible:ring',
      'focus-visible:ring-indigo-300',
      'shadow-sm',
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
      isRounded: {
        true: ['rounded-full'],
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
  /** The palette to apply to the Button */
  palette?: 'primary' | 'secondary' | 'danger';
  /** The size to apply to the Button */
  size?: 'sm' | 'md';
  /** This will make the Button rounded */
  isRounded?: boolean;
  /** Icon to place at the start of the Button */
  icon?: ReactNode;
  /** Icon to place at the end of the Button */
  iconEnd?: ReactNode;
  /** A11y label when only an icon is used */
  label?: ReactNode;
  /** Loading state */
  isLoading?: boolean;
  loadingLabel?: string;
  classNames?: {
    root: string;
  };
}

export const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    children,
    id,
    palette,
    size,
    isRounded,
    icon,
    iconEnd,
    label,
    isLoading,
    loadingLabel,
    disabled,
    className,
    classNames,
    ...rest
  } = props;

  const { classes, cn } = useStyles(
    { palette, size, isRounded },
    { classNames },
  );

  if (isValidElement(icon) && !children && !label) {
    console.warn('Your button is not accessible, provide a label');
  }

  const uuid = useId(id);

  return (
    <ButtonPrimitive.Root
      ref={ref}
      aria-labelledby={label ? `button-label-${uuid}` : undefined}
      className={cn(classes.root, className)}
      disabled={disabled || isLoading}
      id={uuid}
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
          {icon}
          {children && <span className="px-2">{children}</span>}
          {iconEnd}
        </>
      )}

      {label && (
        <span className="sr-only" id={`button-label-${uuid}`}>
          {label}
        </span>
      )}
    </ButtonPrimitive.Root>
  );
});

export default Button;
