import type { SlotRecipeComponent } from '@bend-ui/core';
import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { tooltip, TooltipVariantProps } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(tooltip);

const TooltipRoot: SlotRecipeComponent<
  typeof ArkTooltip.Root,
  (typeof tooltip)['__type']
> = withProvider(ArkTooltip.Root, 'root');
const TooltipTrigger: SlotRecipeComponent<typeof ArkTooltip.Trigger> =
  withContext(ArkTooltip.Trigger, 'trigger');

export type TooltipPositionerProps = ArkTooltip.PositionerProps &
  TooltipVariantProps;

const TooltipPositioner = ArkTooltip.Positioner;

const TooltipContent: SlotRecipeComponent<typeof ArkTooltip.Content> =
  withContext(ArkTooltip.Content, 'content');
const TooltipArrow: SlotRecipeComponent<typeof ArkTooltip.Arrow> = withContext(
  ArkTooltip.Arrow,
  'arrow',
);
const TooltipArrowTip: SlotRecipeComponent<typeof ArkTooltip.ArrowTip> =
  withContext(ArkTooltip.ArrowTip, 'arrowTip');

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
