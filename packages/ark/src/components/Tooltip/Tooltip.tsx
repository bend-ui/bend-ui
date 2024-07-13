import { Tooltip as TooltipPrimitive } from '@ark-ui/react';
import { tooltip } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';

const { withRootProvider, withContext } = createStyleContext(tooltip);

const Root = withRootProvider<TooltipPrimitive.RootProps>(
  TooltipPrimitive.Root,
);

const Arrow = withContext<HTMLDivElement, TooltipPrimitive.ArrowProps>(
  TooltipPrimitive.Arrow,
  'arrow',
);

const ArrowTip = withContext<HTMLDivElement, TooltipPrimitive.ArrowTipProps>(
  TooltipPrimitive.ArrowTip,
  'arrowTip',
);

const Trigger = withContext<HTMLButtonElement, TooltipPrimitive.TriggerProps>(
  TooltipPrimitive.Trigger,
  'trigger',
);

const Positioner = TooltipPrimitive.Positioner;

const Content = withContext<HTMLDivElement, TooltipPrimitive.ContentProps>(
  TooltipPrimitive.Content,
  'content',
);

export type TooltipProps = TooltipPrimitive.RootProps;

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
  Arrow,
  ArrowTip,
  Trigger,
  Positioner,
  Content,
});
