import { forwardRef } from 'react';
import { Field as FieldPrimitive } from '@base-ui-components/react/field';
import { field } from '@particles/styled-system/recipes';

const Root = FieldPrimitive.Root;
const Label = FieldPrimitive.Label;
const Control = FieldPrimitive.Control;
const Description = FieldPrimitive.Description;
const Error = FieldPrimitive.Error;
const Validity = FieldPrimitive.Validity;

export type FieldProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, FieldProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Field = Object.assign(Component, {
  Root,
  Label,
  Control,
  Description,
  Error,
  Validity,
});
