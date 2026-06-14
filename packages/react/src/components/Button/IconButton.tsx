import { ReactNode } from 'react';
import { Button } from './Button';
import type { ButtonProps } from './Button';
import { visuallyHidden } from '@bend-ui/styled-system/patterns';

export interface IconButtonProps extends Omit<ButtonProps, 'icon' | 'iconEnd'> {
  /** The icon to display inside the button */
  icon: ReactNode;
  /** The content to display inside the button for accessibility purposes, will be hidden */
  children: ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, children, ...rest } = props;
  return (
    <Button.Root {...rest} aspectRatio="square">
      <Button.Icon>{icon}</Button.Icon>
      <Button.Label className={visuallyHidden()}>{children}</Button.Label>
    </Button.Root>
  );
};
