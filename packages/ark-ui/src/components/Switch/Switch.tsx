import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { switchRecipe } from '@bend-ui/styled-system/recipes';
import type { SwitchProps } from './Switch.types';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(switchRecipe);

const Root = withProvider(SwitchPrimitive.Root, 'root');

const Control = withContext(SwitchPrimitive.Control, 'control');

const Thumb = withContext(SwitchPrimitive.Thumb, 'thumb');

const Label = withContext(SwitchPrimitive.Label, 'label');

const HiddenInput = SwitchPrimitive.HiddenInput;

const Component = (props: SwitchProps) => {
  const { label, ...rest } = props;
  return (
    <Root {...rest}>
      <Control>
        <Thumb />
      </Control>
      <Label>{label}</Label>
      <HiddenInput />
    </Root>
  );
};

Object.assign(Component, { displayName: 'Switch' });

export const Switch = Object.assign(Component, {
  Root,
  Control,
  Thumb,
  Label,
  HiddenInput,
});
