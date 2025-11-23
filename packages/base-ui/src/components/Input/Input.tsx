import { Input as InputPrimitive } from '@base-ui-components/react/input';
import {
  Input as StyledInput,
  InputProps as StyledInputProps,
} from '@particles/react';

const InputRoot = InputPrimitive;

export type InputProps = InputPrimitive.Props & StyledInputProps;

const Component = (props: InputProps) => {
  return (
    <InputRoot render={(props) => <StyledInput {...props} />} {...props} />
  );
};

export const Input = Object.assign(Component, {
  Root: InputRoot,
});
