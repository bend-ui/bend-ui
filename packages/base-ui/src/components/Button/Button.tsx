import { Button as ButtonPrimitive } from '@base-ui/react/button';
import {
  Button as StyledButton,
  ButtonProps as StyledButtonProps,
} from '@particles/react';

// Use StyledButtonProps as the base type for the public API
// This provides all styled system props and avoids complex union types
// ButtonPrimitive.Props properties are handled via type assertion in the implementation
export type ButtonProps = StyledButtonProps;

const ButtonRoot = ButtonPrimitive;

const Component = (props: ButtonProps) => {
  return (
    <ButtonRoot
      render={(props) => <StyledButton {...props} />}
      {...(props as ButtonPrimitive.Props)}
    />
  );
};

export const Button = Object.assign(Component, {
  Root: ButtonRoot,
});
