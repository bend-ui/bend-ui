import { ToggleGroup as ToggleGroupPrimitive } from '@ark-ui/react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { toggleGroup } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(toggleGroup);
const ToggleGroupRoot = withProvider(ToggleGroupPrimitive.Root, 'root');
const ToggleGroupItem = withContext(ToggleGroupPrimitive.Item, 'item');

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
