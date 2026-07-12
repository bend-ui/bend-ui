import { visuallyHidden } from '@bend-ui/styled-system/patterns';
import type { ReactNode } from 'react';
import { Button, type ButtonProps } from '../Button';

export interface IconButtonProps extends Omit<ButtonProps, 'icon' | 'iconEnd'> {
  icon: ReactNode;
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
