import { Tooltip as TooltipPrimitive } from '@ark-ui/react';
import { tooltip } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { ComponentPropsWithoutRef } from 'react';

const { withProvider, withContext } = createStyleContext(tooltip);

export const Root = withProvider(TooltipPrimitive.Root, 'root');

export const Trigger = withContext(TooltipPrimitive.Trigger, 'trigger');

export const Positioner = withContext(TooltipPrimitive.Positioner);

export const Content = withContext(TooltipPrimitive.Content, 'content');

export interface TooltipProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive> {}

const Component = (props: TooltipProps) => (
  <Root {...props}>
    <Trigger>Hover Me</Trigger>
    <Positioner>
      <Content>I am a tooltip!</Content>
    </Positioner>
  </Root>
);

export const Tooltip = Object.assign(Component, {
  Root,
  Trigger,
  Positioner,
  Content,
});
