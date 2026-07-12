import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { button } from '@bend-ui/styled-system/recipes';
import type { ButtonVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentProps, ReactNode } from 'react';

const { withProvider, withContext } = createStyleContext(button);

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
  const {
    children,
    icon,
    iconEnd,
    isDisabled,
    isLoading,
    disabled,
    ...rest
  } = props;
  const actuallyDisabled = disabled || isDisabled;

  return (
    <ButtonRoot
      data-disabled={actuallyDisabled || undefined}
      aria-disabled={actuallyDisabled || undefined}
      aria-busy={isLoading || undefined}
      disabled={actuallyDisabled}
      {...rest}
    >
      {isLoading && <ButtonSpinner data-loading="" />}
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {children && <ButtonLabel>{children}</ButtonLabel>}
      {iconEnd && <ButtonIcon>{iconEnd}</ButtonIcon>}
    </ButtonRoot>
  );
};

Component.displayName = 'Button';

export const Button = Object.assign(Component, {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
});
