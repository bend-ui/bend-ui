import { Button as ButtonPrimitive } from '@base-ui/react/button';
import {
  Button as StyledButton,
  ButtonProps as StyledButtonProps,
} from '@bend-ui/react';
import { Assign } from '@bend-ui/styled-system/types';

const ButtonRoot = ButtonPrimitive;

export interface ButtonProps
  extends Assign<StyledButtonProps, ButtonPrimitive.Props> {
  /**
   * The content of the button.
   */
  children?: React.ReactNode;
}

const Component = (props: ButtonProps) => {
  return <ButtonRoot render={<StyledButton />} {...props} />;
};

Component.displayName = 'Button';

export const Button = Object.assign(Component, {
  Root: ButtonRoot,
});
