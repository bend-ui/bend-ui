import { Fieldset as FieldsetPrimitive } from '@ark-ui/react';

export const Fieldset = Object.assign(FieldsetPrimitive.Root, {
  Root: FieldsetPrimitive.Root,
  Legend: FieldsetPrimitive.Legend,
  HelperText: FieldsetPrimitive.HelperText,
  ErrorText: FieldsetPrimitive.ErrorText,
});
