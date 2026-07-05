import { ToggleGroup as ToggleGroupPrimitive } from '@ark-ui/react';
import { withRecipe, withParts } from '@bend-ui/react/factory';
import { toggleGroup } from '@bend-ui/styled-system/recipes';

const ToggleGroupRoot = withRecipe(
  ToggleGroupPrimitive.Root,
  toggleGroup,
  'root',
);
const ToggleGroupItem = withParts(ToggleGroupPrimitive.Item, 'item');

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
