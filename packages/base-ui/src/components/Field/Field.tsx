import * as React from 'react';
import { Field as FieldPrimitive } from '@base-ui-components/react/field';

const FieldRoot = FieldPrimitive.Root;
const FieldLabel = FieldPrimitive.Label;
const FieldControl = FieldPrimitive.Control;
const FieldError = FieldPrimitive.Error;
const FieldDescription = FieldPrimitive.Description;

const Component = () => {
  return (
    <FieldRoot>
      <FieldLabel>Name</FieldLabel>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>

      <FieldDescription>Visible on your profile</FieldDescription>
    </FieldRoot>
  );
};

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
});
