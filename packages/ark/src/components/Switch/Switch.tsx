import { forwardRef } from 'react';
import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { switchRecipe } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { SwitchProps } from './Switch.types';

const { withProvider, withContext } = createStyleContext(switchRecipe);

const Root = withProvider(SwitchPrimitive.Root, 'root');

const Control = withContext(SwitchPrimitive.Control, 'control');

const Thumb = withContext(SwitchPrimitive.Thumb, 'thumb');

const Label = withContext(SwitchPrimitive.Label, 'label');

const Component = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      <Control>
        <Thumb />
      </Control>
      <Label>{children}</Label>
    </Root>
  );
});

Component.displayName = 'Switch';

export const Switch = Object.assign(Component, {
  Root,
  Control,
  Thumb,
  Label,
});
