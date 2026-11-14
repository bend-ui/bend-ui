import * as React from 'react';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { withParts } from '@bend-ui/core';
import { formField } from '@bend-ui/styled-system/recipes';
import { Input, type InputProps } from '../Input';
import { HTMLBendUIProps } from '@bend-ui/core';
import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';

export type FieldRootProps = FieldPrimitive.Root.Props;
const { withProvider, withContext } = createSlotRecipeContext(formField);

const FieldRoot = withProvider(FieldPrimitive.Root, 'root', {
  defaultProps: { 'data-part': 'root' },
});

export type FieldLabelProps = FieldPrimitive.Label.Props;
const FieldLabel = withContext(FieldPrimitive.Label, 'label', {
  defaultProps: { 'data-part': 'label' },
});

export type FieldControlProps = InputProps;
const FieldControl = (props: FieldControlProps) => <Input {...props} />;

export type FieldErrorProps = FieldPrimitive.Error.Props;
const FieldError = withContext(FieldPrimitive.Error, 'error', {
  defaultProps: { 'data-part': 'error' },
});

export type FieldDescriptionProps = FieldPrimitive.Description.Props;
const FieldDescription = withContext(
  FieldPrimitive.Description,
  'description',
  {
    defaultProps: { 'data-part': 'description' },
  },
);

export type FieldHelperProps = HTMLBendUIProps<'div'>;
const FieldHelper = withContext(styled('div'), 'helper', {
  defaultProps: { 'data-part': 'helper' },
});

export type FieldValidityProps = FieldPrimitive.Validity.Props;
const FieldValidity = withParts<FieldValidityProps>(
  FieldPrimitive.Validity,
  'validity',
);

const Component = (props: FieldRootProps) => <FieldRoot {...props} />;

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
  Helper: FieldHelper,
  Validity: FieldValidity,
});
