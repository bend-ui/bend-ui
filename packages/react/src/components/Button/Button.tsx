'use client';

import { ReactNode } from 'react';
import { button, ButtonVariantProps } from '@particles/styled-system/recipes';
import { HTMLParticlesProps, particles } from '../factory';
import { Assign } from '@particles/styled-system/types';
import { withParts, withRecipe } from '../../utils';

const Root = withRecipe(particles.button, button, 'root');

const Icon = withParts(particles.div, 'icon');

const Label = withParts(particles.span, 'label');

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

const Component = (props: ButtonProps) => {
  const {
    className,
    children,
    icon,
    iconEnd,
    isDisabled,
    isLoading,
    isFull,
    disabled,
    ...rest
  } = props;

  return (
    <Root
      data-disabled={disabled || isDisabled}
      aria-disabled={disabled || isDisabled}
      aria-busy={isLoading}
      disabled={disabled}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      {children && <Label>{children}</Label>}
      {iconEnd && <Icon>{iconEnd}</Icon>}
    </Root>
  );
};

Component.displayName = 'Button';

export const Button = Object.assign(Component, {
  Root,
  Icon,
  Label,
});
