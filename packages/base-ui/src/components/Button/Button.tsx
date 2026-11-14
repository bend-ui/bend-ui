import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { button } from '@bend-ui/styled-system/recipes';
import type { ButtonVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentProps, ReactNode } from 'react';

const { withProvider, withContext } = createSlotRecipeContext(button);

const ButtonRoot = withProvider(ButtonPrimitive, 'root');
const ButtonLabel = withContext('span', 'label');
const ButtonIcon = withContext('span', 'icon');
const ButtonSpinner = withContext('span', 'spinner');

export interface ButtonProps
  extends ComponentProps<typeof ButtonRoot>, ButtonVariantProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  iconEnd?: ReactNode;
}

const Component = (props: ButtonProps) => {
  const { children, icon, iconEnd, isDisabled, isLoading, disabled, ...rest } =
    props;
  const actuallyDisabled = disabled || isDisabled;

  return (
    <ButtonRoot
      data-disabled={actuallyDisabled || undefined}
      aria-disabled={actuallyDisabled || undefined}
      aria-busy={isLoading || undefined}
      disabled={actuallyDisabled}
      {...rest}
    >
      {isLoading && <ButtonSpinner data-loading="" aria-hidden="true" />}
      {icon != null && icon !== false && (
        <ButtonIcon aria-hidden="true">{icon}</ButtonIcon>
      )}
      {children != null && <ButtonLabel>{children}</ButtonLabel>}
      {iconEnd != null && iconEnd !== false && (
        <ButtonIcon aria-hidden="true">{iconEnd}</ButtonIcon>
      )}
    </ButtonRoot>
  );
};

Object.assign(Component, { displayName: 'Button' });

export const Button = Object.assign(Component, {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
});
