import { visuallyHidden } from '@bend-ui/styled-system/patterns';
import type { ReactNode } from 'react';
import { Button, type ButtonProps } from '../Button';

export interface IconButtonProps extends Omit<ButtonProps, 'icon' | 'iconEnd'> {
  icon: ReactNode;
  children: ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, children, isDisabled, isLoading, disabled, ...rest } = props;
  const actuallyDisabled = disabled || isDisabled;
  return (
    <Button.Root
      data-disabled={actuallyDisabled || undefined}
      aria-disabled={actuallyDisabled || undefined}
      aria-busy={isLoading || undefined}
      disabled={actuallyDisabled}
      {...rest}
      aspectRatio="square"
    >
      {isLoading && <Button.Spinner data-loading="" aria-hidden="true" />}
      <Button.Icon aria-hidden="true">{icon}</Button.Icon>
      <Button.Label className={visuallyHidden()}>{children}</Button.Label>
    </Button.Root>
  );
};
