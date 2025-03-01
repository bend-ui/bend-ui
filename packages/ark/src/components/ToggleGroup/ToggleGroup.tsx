import { ToggleGroup as ToggleGroupPrimitive } from '@ark-ui/react';

const Component = () => {
  return (
    <ToggleGroupPrimitive.Root>
      <ToggleGroupPrimitive.Item value="a">A</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="b">B</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="c">C</ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  );
};

export const ToggleGroup = Object.assign(Component, {
  Root: ToggleGroupPrimitive.Root,
  Item: ToggleGroupPrimitive.Item,
});
