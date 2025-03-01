import { Fieldset as FieldsetPrimitive } from '@ark-ui/react';

const Component = (props: FieldsetPrimitive.RootProps) => {
  return (
    <FieldsetPrimitive.Root {...props}>
      <FieldsetPrimitive.Legend>Legend</FieldsetPrimitive.Legend>
      <FieldsetPrimitive.HelperText>Helper text</FieldsetPrimitive.HelperText>
      <FieldsetPrimitive.ErrorText>Error text</FieldsetPrimitive.ErrorText>
    </FieldsetPrimitive.Root>
  );
};

export const Fieldset = Object.assign(Component, {
  Root: FieldsetPrimitive.Root,
  Legend: FieldsetPrimitive.Legend,
  HelperText: FieldsetPrimitive.HelperText,
  ErrorText: FieldsetPrimitive.ErrorText,
});
