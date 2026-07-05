import * as React from 'react';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { withParts, withRecipe } from '@bend-ui/react/factory';
import { formField } from '@bend-ui/styled-system/recipes';
import { Input } from '../Input';
import { HTMLBendUIProps } from '@bend-ui/react/factory';
import { styled } from '@bend-ui/styled-system/jsx';

export type FieldRootProps = FieldPrimitive.Root.Props;
const FieldRoot = withRecipe(FieldPrimitive.Root, formField, 'root');

export type FieldLabelProps = FieldPrimitive.Label.Props;
const FieldLabel = withParts<FieldLabelProps>(FieldPrimitive.Label, 'label');

export type FieldControlProps = FieldPrimitive.Control.Props;
const FieldControl = withParts<FieldControlProps>(
  FieldPrimitive.Control,
  'control',
  {
    render: (props) => <Input {...props} />,
  },
);

export type FieldErrorProps = FieldPrimitive.Error.Props;
const FieldError = withParts<FieldErrorProps>(FieldPrimitive.Error, 'error');

export type FieldDescriptionProps = FieldPrimitive.Description.Props;
const FieldDescription = withParts<FieldDescriptionProps>(
  FieldPrimitive.Description,
  'description',
);

export type FieldHelperProps = HTMLBendUIProps<'div'>;
const FieldHelper = withParts<FieldHelperProps>(styled('div'), 'helper');

export type FieldValidityProps = FieldPrimitive.Validity.Props;
const FieldValidity = withParts<FieldValidityProps>(
  FieldPrimitive.Validity,
  'validity',
);

const Component = () => {
  return (
    <FieldRoot>
      <FieldLabel>Name</FieldLabel>
      <FieldDescription>Visible on your profile</FieldDescription>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>
      <FieldHelper>This is a helper text</FieldHelper>
    </FieldRoot>
  );
};

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
  Helper: FieldHelper,
  Validity: FieldValidity,
});
