import { Editable as EditablePrimitive } from '@ark-ui/react';

export const Editable = Object.assign(EditablePrimitive.Root, {
  Root: EditablePrimitive.Root,
  Label: EditablePrimitive.Label,
  Area: EditablePrimitive.Area,
  Input: EditablePrimitive.Input,
  Preview: EditablePrimitive.Preview,
});
