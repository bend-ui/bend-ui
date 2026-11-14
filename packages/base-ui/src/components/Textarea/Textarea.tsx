import type { ComponentProps } from 'react';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import {
  textarea,
  type TextareaVariantProps,
} from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(textarea);
const TextareaRoot = withProvider('div', 'root');
const StyledControl = withContext(FieldPrimitive.Control, 'field');
export type TextareaFieldProps = ComponentProps<'textarea'> &
  Pick<FieldPrimitive.Control.Props, 'onValueChange'>;
function TextareaField(props: TextareaFieldProps) {
  const {
    value,
    defaultValue,
    disabled,
    name,
    id,
    onValueChange,
    ...nativeProps
  } = props;
  return (
    <StyledControl
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      id={id}
      onValueChange={onValueChange}
      render={<textarea {...nativeProps} />}
    />
  );
}
export type TextareaProps = TextareaFieldProps & TextareaVariantProps;
function Component({ size, variant, ...props }: TextareaProps) {
  return (
    <TextareaRoot size={size} variant={variant}>
      <TextareaField {...props} />
    </TextareaRoot>
  );
}
export const Textarea = Object.assign(Component, {
  Root: TextareaRoot,
  Field: TextareaField,
});
