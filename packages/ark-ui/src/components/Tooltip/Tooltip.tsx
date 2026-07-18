import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { withRecipe, withParts } from '@bend-ui/internal';
import { tooltip, TooltipVariantProps } from '@bend-ui/styled-system/recipes';

const TooltipRoot = ArkTooltip.Root;
const TooltipTrigger = ArkTooltip.Trigger;

export type TooltipPositionerProps = ArkTooltip.PositionerProps &
  TooltipVariantProps;

const TooltipPositioner = withRecipe(
  ArkTooltip.Positioner,
  tooltip,
  'positioner',
);

const TooltipContent = withParts(ArkTooltip.Content, 'content');
const TooltipArrow = withParts(ArkTooltip.Arrow, 'arrow');
const TooltipArrowTip = withParts(ArkTooltip.ArrowTip, 'arrowTip');

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
