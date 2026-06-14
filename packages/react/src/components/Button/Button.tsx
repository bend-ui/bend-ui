'use client';

import { ReactNode } from 'react';
import { button, ButtonVariantProps } from '@bend-ui/styled-system/recipes';
import { HTMLBendUIProps, bend } from '../factory';
import { Assign } from '@bend-ui/styled-system/types';
import { withParts, withRecipe } from '../../utils';

const Root = withRecipe(bend.button, button, 'root');

const Icon = withParts(bend.div, 'icon');

const Label = withParts(bend.span, 'label');

export interface ButtonProps
  extends Assign<HTMLBendUIProps<'button'>, ButtonVariantProps> {
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
