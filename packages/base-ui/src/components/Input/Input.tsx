import { forwardRef } from 'react';
import { Input as InputPrimitive } from '@base-ui-components/react/input';
import {
  Input as StyledInput,
  InputProps as StyledInputProps,
} from '@particles/react';

const InputRoot = InputPrimitive;

export type InputProps = InputPrimitive.Props & StyledInputProps;

const Component = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputRoot
      ref={ref}
      render={(props) => <StyledInput {...props} />}
      {...props}
    />
  );
});

export const Input = Object.assign(Component, {
  Root: InputRoot,
});
