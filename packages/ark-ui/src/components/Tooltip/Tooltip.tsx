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

export interface TooltipProps extends ArkTooltip.RootProps {
  /** Content of the trigger button that opens the tooltip. */
  trigger: React.ReactNode;
  /** Tooltip content. */
  children: React.ReactNode;
}

const Component = (props: TooltipProps) => {
  const { trigger, children, ...rest } = props;
  return (
    <TooltipRoot {...rest}>
      <TooltipTrigger>{trigger}</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>{children}</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
};

export const Tooltip = Object.assign(Component, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Trigger: TooltipTrigger,
  Positioner: TooltipPositioner,
  Content: TooltipContent,
});
