import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { tooltip, TooltipVariantProps } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(tooltip);

const TooltipRoot = withProvider(ArkTooltip.Root, 'root');
const TooltipTrigger = withContext(ArkTooltip.Trigger, 'trigger');

export type TooltipPositionerProps = ArkTooltip.PositionerProps &
  TooltipVariantProps;

const TooltipPositioner = ArkTooltip.Positioner;

const TooltipContent = withContext(ArkTooltip.Content, 'content');
const TooltipArrow = withContext(ArkTooltip.Arrow, 'arrow');
const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip');

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
