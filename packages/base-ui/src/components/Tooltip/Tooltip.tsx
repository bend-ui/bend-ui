import { forwardRef } from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip';
import { tooltip } from '@particles/styled-system/recipes';

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;
const Portal = TooltipPrimitive.Portal;
const Positioner = TooltipPrimitive.Positioner;
const Popup = TooltipPrimitive.Popup;
const Arrow = TooltipPrimitive.Arrow;

export type TooltipProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Tooltip = Object.assign(Component, {
  Provider,
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Arrow,
});
