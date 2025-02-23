import { forwardRef } from 'react';
import { NumberField as NumberFieldPrimitive } from '@base-ui-components/react/number-field';
import { numberField } from '@particles/styled-system/recipes';

const Root = NumberFieldPrimitive.Root;
const ScrubArea = NumberFieldPrimitive.ScrubArea;
const ScrubAreaCursor = NumberFieldPrimitive.ScrubAreaCursor;
const Group = NumberFieldPrimitive.Group;
const Decrement = NumberFieldPrimitive.Decrement;
const Input = NumberFieldPrimitive.Input;
const Increment = NumberFieldPrimitive.Increment;

export type NumberFieldProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, NumberFieldProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const NumberField = Object.assign(Component, {
  Root,
  ScrubArea,
  ScrubAreaCursor,
  Group,
  Decrement,
  Input,
  Increment,
});
