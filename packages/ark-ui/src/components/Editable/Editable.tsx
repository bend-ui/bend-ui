import { Editable as EditablePrimitive } from '@ark-ui/react';

const Component = () => {
  return (
    <EditablePrimitive.Root placeholder="Placeholder">
      <EditablePrimitive.Label>Label</EditablePrimitive.Label>
      <EditablePrimitive.Area>
        <EditablePrimitive.Input />
        <EditablePrimitive.Preview />
      </EditablePrimitive.Area>
    </EditablePrimitive.Root>
  );
};

export const Editable = Object.assign(Component, {
  Root: EditablePrimitive.Root,
  Label: EditablePrimitive.Label,
  Area: EditablePrimitive.Area,
  Input: EditablePrimitive.Input,
  Preview: EditablePrimitive.Preview,
});
