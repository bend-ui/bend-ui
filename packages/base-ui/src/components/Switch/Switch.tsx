import type { SlotRecipeComponent } from '@bend-ui/core';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from '@bend-ui/styled-system/recipes';
import { styled, createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(switchRecipe);
const SwitchRoot: SlotRecipeComponent<
  'label',
  (typeof switchRecipe)['__type']
> = withProvider(styled('label'), 'root');
const SwitchControl: SlotRecipeComponent<typeof SwitchPrimitive.Root> =
  withContext(SwitchPrimitive.Root, 'control');
const SwitchThumb: SlotRecipeComponent<typeof SwitchPrimitive.Thumb> =
  withContext(SwitchPrimitive.Thumb, 'thumb');
const SwitchLabel: SlotRecipeComponent<'span'> = withContext(
  styled('span'),
  'label',
);
export type SwitchProps = SwitchPrimitive.Root.Props & SwitchRecipeVariantProps;
function Component({ children, size, ...props }: SwitchProps) {
  return (
    <SwitchRoot size={size}>
      <SwitchControl {...props}>
        <SwitchThumb />
      </SwitchControl>
      {children != null && <SwitchLabel>{children}</SwitchLabel>}
    </SwitchRoot>
  );
}
export const Switch = Object.assign(Component, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
});
