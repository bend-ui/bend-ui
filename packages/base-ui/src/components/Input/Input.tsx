import { forwardRef } from 'react';
import { Input as InputPrimitive } from '@base-ui-components/react/input';
import { input } from '@particles/styled-system/recipes';

const Root = InputPrimitive;

export type InputProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Input = Object.assign(Component, {});
