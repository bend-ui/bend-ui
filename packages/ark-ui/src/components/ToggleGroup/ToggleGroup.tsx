import type { SlotRecipeComponent } from '@bend-ui/core';
import { ToggleGroup as ToggleGroupPrimitive } from '@ark-ui/react';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { toggleGroup } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(toggleGroup);
const ToggleGroupRoot: SlotRecipeComponent<
  typeof ToggleGroupPrimitive.Root,
  (typeof toggleGroup)['__type']
> = withProvider(ToggleGroupPrimitive.Root, 'root');
const ToggleGroupItem: SlotRecipeComponent<typeof ToggleGroupPrimitive.Item> =
  withContext(ToggleGroupPrimitive.Item, 'item');

const Component = () => {
  return (
    <ToggleGroupRoot>
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const ToggleGroup = Object.assign(Component, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
});
