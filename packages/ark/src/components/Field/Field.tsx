'use client';
import { Field } from '@ark-ui/react';
import {
  formField,
  type FormFieldVariantProps,
} from '@particles/styled-system/recipes';
import { Input, Textarea } from '@particles/react';
import { forwardRef } from 'react';
import type {
  ComponentProps,
  HTMLStyledProps,
} from '@particles/styled-system/types';
import { createStyleContext } from '../../utils/create-style-context';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(formField);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, Field.RootProviderBaseProps>,
    FormFieldVariantProps
  >
>(Field.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, Field.RootBaseProps>,
    FormFieldVariantProps
  >
>(Field.Root, 'root');

const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, Field.ErrorTextBaseProps>
>(Field.ErrorText, 'error');

const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, Field.HelperTextBaseProps>
>(Field.HelperText, 'helper');

const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, Field.LabelBaseProps>
>(Field.Label, 'label');

export type FieldInputProps = ComponentProps<typeof Input>;
const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (props, ref) => (
    <Field.Input ref={ref} {...props} asChild>
      <Input />
    </Field.Input>
  ),
);
FieldInput.displayName = 'Field.Input';

export type FieldTextareaProps = ComponentProps<typeof Textarea>;
const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextareaProps>(
  (props, ref) => (
    <Field.Textarea asChild {...props} ref={ref}>
      <Textarea />
    </Field.Textarea>
  ),
);
FieldTextarea.displayName = 'Field.Textarea';
export { FieldContext as Context } from '@ark-ui/react';

export interface FieldProps extends RootProps {
  label?: string;
  helperText?: string;
  errorText?: string;
}

const Component = forwardRef<HTMLDivElement, FieldProps>((props, ref) => {
  const { children, label, helperText, errorText, ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      {label && <Label>{label}</Label>}
      {children}
      {helperText && <HelperText>{helperText}</HelperText>}
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Root>
  );
});

Component.displayName = 'Field';

export default Object.assign(Component, {
  Root,
  Label,
  Input: FieldInput,
  Textarea: FieldTextarea,
  HelperText,
  ErrorText,
});
