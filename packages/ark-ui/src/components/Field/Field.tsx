'use client';
import type { SlotRecipeComponent } from '@bend-ui/core';
import { Field as ArkField } from '@ark-ui/react';
import type { HTMLStyledProps } from '@bend-ui/styled-system/types';
import { withParts } from '@bend-ui/core';
import type { InputProps } from '../Input';
import {
  formField,
  type FormFieldVariantProps,
} from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(formField);

export type FieldRootProps = ArkField.RootProps & FormFieldVariantProps;

const FieldRoot: SlotRecipeComponent<
  typeof ArkField.Root,
  (typeof formField)['__type']
> = withProvider(ArkField.Root, 'root');

const FieldLabel: SlotRecipeComponent<typeof ArkField.Label> = withContext(
  ArkField.Label,
  'label',
);

export type FieldInputProps = ArkField.InputProps & InputProps;

const FieldInput = withParts<FieldInputProps>(ArkField.Input, 'input');

export type FieldTextareaProps = ArkField.TextareaProps &
  HTMLStyledProps<'textarea'>;

const FieldTextarea = withParts<FieldTextareaProps>(
  ArkField.Textarea,
  'textarea',
);

const FieldHelperText: SlotRecipeComponent<typeof ArkField.HelperText> =
  withContext(ArkField.HelperText, 'helper');

const FieldErrorText: SlotRecipeComponent<typeof ArkField.ErrorText> =
  withContext(ArkField.ErrorText, 'error');

export interface FieldProps extends FieldRootProps {
  label?: string;
  helperText?: string;
  errorText?: string;
}

const Component = (props: FieldProps) => {
  const { children, label, helperText, errorText, ...rest } = props;
  return (
    <FieldRoot {...rest}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {helperText && <FieldHelperText>{helperText}</FieldHelperText>}
      {errorText && <FieldErrorText>{errorText}</FieldErrorText>}
    </FieldRoot>
  );
};

Object.assign(Component, { displayName: 'Field' });

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Input: FieldInput,
  Textarea: FieldTextarea,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
});
