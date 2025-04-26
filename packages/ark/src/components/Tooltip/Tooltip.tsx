import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { tooltip, TooltipVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

const TooltipRoot = ArkTooltip.Root;
const TooltipTrigger = ArkTooltip.Trigger;

type TooltipPositionerProps = ArkTooltip.PositionerProps & TooltipVariantProps;

const TooltipPositioner = forwardRef<HTMLDivElement, TooltipPositionerProps>(
  (props, ref) => {
    const [variantProps, rest] = tooltip.splitVariantProps(props);
    const classes = tooltip(variantProps);
    return <ArkTooltip.Positioner ref={ref} {...rest} className={classes} />;
  },
);

const TooltipContent = ArkTooltip.Content;
const TooltipArrow = ArkTooltip.Arrow;
const TooltipArrowTip = ArkTooltip.ArrowTip;

export type TooltipProps = ArkTooltip.RootProps;

const Component = (props: TooltipProps) => (
  <TooltipRoot {...props}>
    <TooltipTrigger>Hover Me</TooltipTrigger>
    <TooltipPositioner>
      <TooltipContent>I am a tooltip!</TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
);

export const Tooltip = Object.assign(Component, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Trigger: TooltipTrigger,
  Positioner: TooltipPositioner,
  Content: TooltipContent,
});
