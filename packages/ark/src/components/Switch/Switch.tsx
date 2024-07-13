import { forwardRef } from 'react';
import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { switchRecipe } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { SwitchProps } from './Switch.types';

const { withProvider, withContext } = createStyleContext(switchRecipe);

const Root = withProvider<HTMLLabelElement, SwitchPrimitive.RootProps>(
  SwitchPrimitive.Root,
  'root',
);

const Control = withContext<HTMLDivElement, SwitchPrimitive.ControlProps>(
  SwitchPrimitive.Control,
  'control',
);

const Thumb = withContext<HTMLSpanElement, SwitchPrimitive.ThumbProps>(
  SwitchPrimitive.Thumb,
  'thumb',
);

const Label = withContext<HTMLSpanElement, SwitchPrimitive.LabelProps>(
  SwitchPrimitive.Label,
  'label',
);

const HiddenInput = SwitchPrimitive.HiddenInput;

const Component = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { label, ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      <Control>
        <Thumb />
      </Control>
      <Label>{label}</Label>
      <HiddenInput />
    </Root>
  );
});

Component.displayName = 'Switch';

export const Switch = Object.assign(Component, {
  Root,
  Control,
  Thumb,
  Label,
  HiddenInput,
});
