import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { switchRecipe } from '@particles/styled-system/recipes';
import type { SwitchProps } from './Switch.types';
import { createRecipeContext } from '@particles/react';

const { withProvider, withPart } = createRecipeContext(switchRecipe);

const Root = withProvider(SwitchPrimitive.Root, 'root');

const Control = withPart(SwitchPrimitive.Control, 'control');

const Thumb = withPart(SwitchPrimitive.Thumb, 'thumb');

const Label = withPart(SwitchPrimitive.Label, 'label');

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

Component.displayName = 'Switch';

export const Switch = Object.assign(Component, {
  Root,
  Control,
  Thumb,
  Label,
  HiddenInput,
});
