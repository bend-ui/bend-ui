'use client';
import { Field as ArkField } from '@ark-ui/react';
import {
  Input,
  Textarea,
  type InputProps,
  type TextareaProps,
} from '@particles/react';
import {
  formField,
  type FormFieldVariantProps,
} from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

export type FieldRootProps = ArkField.RootProps & FormFieldVariantProps;

const FieldRoot = forwardRef<HTMLDivElement, FieldRootProps>((props, ref) => {
  const [variantProps, rest] = formField.splitVariantProps(props);
  const classes = formField(variantProps);
  return <ArkField.Root ref={ref} {...rest} className={classes} />;
});

const FieldLabel = ArkField.Label;

type FieldInputProps = ArkField.InputProps & InputProps;

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (props, ref) => {
    return (
      <ArkField.Input ref={ref} {...props} asChild>
        <Input />
      </ArkField.Input>
    );
  },
);

type FieldTextareaProps = ArkField.TextareaProps & TextareaProps;

const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextareaProps>(
  (props, ref) => {
    return (
      <ArkField.Textarea ref={ref} {...props} asChild>
        <Textarea />
      </ArkField.Textarea>
    );
  },
);

const FieldHelperText = ArkField.HelperText;

const FieldErrorText = ArkField.ErrorText;

export interface FieldProps extends FieldRootProps {
  label?: string;
  helperText?: string;
  errorText?: string;
}

const Component = forwardRef<HTMLDivElement, FieldProps>((props, ref) => {
  const { children, label, helperText, errorText, ...rest } = props;
  return (
    <FieldRoot ref={ref} {...rest}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {helperText && <FieldHelperText>{helperText}</FieldHelperText>}
      {errorText && <FieldErrorText>{errorText}</FieldErrorText>}
    </FieldRoot>
  );
});

Component.displayName = 'Field';

export const Field = Object.assign(Component, {
  Root: FieldRoot,
  Label: FieldLabel,
  Input: FieldInput,
  Textarea: FieldTextarea,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
});
