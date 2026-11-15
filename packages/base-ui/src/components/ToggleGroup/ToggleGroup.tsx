import { Toggle } from '../Toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { toggleGroup } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(toggleGroup);

const ToggleGroupRoot = withProvider(ToggleGroupPrimitive, 'root');
const ToggleGroupItem = withContext(Toggle.Root, 'item');

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
});
