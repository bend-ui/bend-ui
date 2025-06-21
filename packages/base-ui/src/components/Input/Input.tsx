import { forwardRef } from 'react';
import { Input as InputPrimitive } from '@base-ui-components/react/input';

const InputRoot = InputPrimitive;

export type InputProps = React.ComponentPropsWithoutRef<typeof InputRoot>;

const Component = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputRoot ref={ref} {...props} />;
});

export const Input = Object.assign(Component, {
  Root: InputRoot,
});
