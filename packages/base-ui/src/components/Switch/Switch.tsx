import * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { switchRecipe } from '@bend-ui/styled-system/recipes';
import { styled, createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(switchRecipe);

const SwitchRoot = withProvider(styled('label'), 'root');

const SwitchControl = withContext(SwitchPrimitive.Root, 'control');

const SwitchThumb = withContext(SwitchPrimitive.Thumb, 'thumb');

const SwitchLabel = withContext(styled('span'), 'label');

const Component = () => {
  return (
    <SwitchRoot>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
  );
};

Component.displayName = 'Switch';

export const Switch = Object.assign(Component, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
});
