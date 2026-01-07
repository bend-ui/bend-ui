import * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { withParts, withRecipe } from '@particles/react';
import { switchRecipe } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { HTMLParticlesProps } from '@particles/react';

export type SwitchRootProps = HTMLParticlesProps<'div'>;

const SwitchRoot = withRecipe<SwitchRootProps>(
  styled('div'),
  switchRecipe,
  'root',
);

const SwitchControl = withParts<SwitchPrimitive.Root.Props>(
  SwitchPrimitive.Root,
  'control',
);

const SwitchThumb = withParts<SwitchPrimitive.Thumb.Props>(
  SwitchPrimitive.Thumb,
  'thumb',
);

export type SwitchLabelProps = HTMLParticlesProps<'span'>;

const SwitchLabel = withParts<SwitchLabelProps>(styled('span'), 'label');

const Component = () => {
  return (
    <SwitchRoot defaultChecked>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
  );
};

export const Switch = Object.assign(Component, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
});
