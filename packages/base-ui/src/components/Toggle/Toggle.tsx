import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { withRecipe } from '@bend-ui/core';
import { toggle } from '@bend-ui/styled-system/recipes';

export type ToggleProps = TogglePrimitive.Props;

const ToggleRoot = withRecipe<ToggleProps>(TogglePrimitive, toggle, 'root');

export const Toggle = Object.assign(ToggleRoot, {
  Root: ToggleRoot,
});
