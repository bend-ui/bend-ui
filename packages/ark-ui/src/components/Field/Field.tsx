'use client';
import { Field as ArkField } from '@ark-ui/react';
import type { HTMLStyledProps } from '@bend-ui/styled-system/types';
import { withParts, withRecipe } from '@bend-ui/internal';
import type { InputProps } from '../Input';
import {
  formField,
  type FormFieldVariantProps,
} from '@bend-ui/styled-system/recipes';

export type FieldRootProps = ArkField.RootProps & FormFieldVariantProps;

const FieldRoot = withRecipe<FieldRootProps>(ArkField.Root, formField, 'root');

const FieldLabel = ArkField.Label;

export type FieldInputProps = ArkField.InputProps & InputProps;

const FieldInput = withParts<FieldInputProps>(ArkField.Input, 'input');

export type FieldTextareaProps = ArkField.TextareaProps &
  HTMLStyledProps<'textarea'>;

const FieldTextarea = withParts<FieldTextareaProps>(
  ArkField.Textarea,
  'textarea',
);

const FieldHelperText = withParts<ArkField.HelperTextProps>(
  ArkField.HelperText,
  'helper',
);

const FieldErrorText = withParts<ArkField.ErrorTextProps>(
  ArkField.ErrorText,
  'error',
);

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

Component.displayName = 'Field';

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Input: FieldInput,
  Textarea: FieldTextarea,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
});
