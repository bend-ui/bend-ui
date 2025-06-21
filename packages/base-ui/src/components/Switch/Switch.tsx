import * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch';

const SwitchRoot = SwitchPrimitive.Root;
const SwitchThumb = SwitchPrimitive.Thumb;

const Component = () => {
  return (
    <SwitchRoot defaultChecked>
      <SwitchThumb />
    </SwitchRoot>
  );
};

export const Switch = Object.assign(Component, {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});
