import { useId, type ComponentProps, type ReactElement } from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import {
  radioGroup,
  type RadioGroupVariantProps,
} from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(radioGroup);
export type RadioGroupProps<Value> = RadioGroupPrimitive.Props<Value> &
  RadioGroupVariantProps;
// The style wrapper consumes size; restore the primitive's native generic value boundary.
const RadioGroupRoot = withProvider(RadioGroupPrimitive, 'root') as <Value>(
  props: RadioGroupProps<Value>,
) => ReactElement;
const RadioRoot = withContext(RadioPrimitive.Root, 'itemControl');
const RadioIndicator = withContext(RadioPrimitive.Indicator, 'indicator');
const RadioLabel = withContext('label', 'item');
const RadioText = withContext('span', 'itemText');
export type RadioProps = ComponentProps<typeof RadioRoot>;
function Component({ children, ...props }: RadioProps) {
  const labelId = useId();
  return (
    <RadioLabel>
      <RadioRoot
        {...props}
        // An empty value prevents Field's label from overriding an explicit aria-label.
        aria-labelledby={
          props['aria-labelledby'] ?? (props['aria-label'] ? '' : labelId)
        }
      >
        <RadioIndicator />
      </RadioRoot>
      <RadioText id={labelId}>{children}</RadioText>
    </RadioLabel>
  );
}
export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
});
export const Radio = Object.assign(Component, {
  Root: RadioRoot,
  Indicator: RadioIndicator,
  Label: RadioLabel,
  Text: RadioText,
});
