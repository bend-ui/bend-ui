import * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { switchRecipe } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { HTMLParticlesProps } from '@particles/react';

const SwitchRoot = withRecipe<SwitchPrimitive.Root.Props>(
  SwitchPrimitive.Root,
  switchRecipe,
  'root',
);

export type SwitchControlProps = HTMLParticlesProps<'div'>;

const SwitchControl = withParts<SwitchControlProps>(styled('div'), 'control');

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
