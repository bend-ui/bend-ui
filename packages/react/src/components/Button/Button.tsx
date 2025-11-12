'use client';

import { forwardRef, ReactNode } from 'react';
import { button, ButtonVariantProps } from '@particles/styled-system/recipes';
import { cx } from '@particles/styled-system/css';
import { HTMLParticlesProps, particles } from '../factory';
import { Assign } from '@particles/styled-system/types';

export interface ButtonProps
  extends Assign<HTMLParticlesProps<'button'>, ButtonVariantProps> {
  /** Disable the button */
  isDisabled?: boolean;
  /** Set the button in a loading state */
  isLoading?: boolean;
  /** The icon to display at the start of the button */
  icon?: ReactNode;
  /** The icon to display at the end of the button */
  iconEnd?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [variantProps, restProps] = button.splitVariantProps(props);
    const {
      className,
      children,
      icon,
      iconEnd,
      isDisabled,
      isLoading,
      ...rest
    } = restProps;

    const classes = button(variantProps);

    return (
      <particles.button
        ref={ref}
        className={cx(classes.root, className)}
        data-disabled={restProps.disabled || isDisabled}
        aria-disabled={restProps.disabled || isDisabled}
        aria-busy={isLoading}
        {...rest}
      >
        {icon}
        {!!children && <span className={classes.label}>{children}</span>}
        {iconEnd}
      </particles.button>
    );
  },
);

Button.displayName = 'Button';
