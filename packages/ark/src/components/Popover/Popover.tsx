import { Popover as ArkPopover } from '@ark-ui/react';
import { popover } from '@particles/styled-system/recipes';
import type { PopoverVariantProps } from '@particles/styled-system/recipes';
import { withRecipe, withParts } from '@particles/react';
import { Button } from '@particles/react';

const PopoverRoot = ArkPopover.Root;
const PopoverAnchor = ArkPopover.Anchor;
const PopoverTrigger = ArkPopover.Trigger;
const PopoverIndicator = ArkPopover.Indicator;
const PopoverArrow = ArkPopover.Arrow;
const PopoverArrowTip = ArkPopover.ArrowTip;
const PopoverCloseTrigger = ArkPopover.CloseTrigger;

const PopoverPositioner = withRecipe(
  ArkPopover.Positioner,
  popover,
  'positioner',
);

const PopoverContent = withParts(ArkPopover.Content, 'content');
const PopoverTitle = withParts(ArkPopover.Title, 'title');
const PopoverDescription = withParts(ArkPopover.Description, 'description');

export interface PopoverProps
  extends ArkPopover.RootProps,
    PopoverVariantProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  showArrow?: boolean;
}

const Component = (props: PopoverProps) => {
  const {
    trigger,
    title,
    description,
    children,
    showCloseButton = false,
    showArrow = false,
    size,
    ...rest
  } = props;

  return (
    <PopoverRoot {...rest}>
      <PopoverTrigger asChild>
        <Button>{trigger}</Button>
      </PopoverTrigger>
      <PopoverPositioner size={size}>
        <PopoverContent>
          {showArrow && (
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
          )}
          {!!title && <PopoverTitle>{title}</PopoverTitle>}
          {!!description && (
            <PopoverDescription>{description}</PopoverDescription>
          )}
          {children}
          {showCloseButton && (
            <PopoverCloseTrigger asChild>
              <Button variant="secondary" size="sm">
                ×
              </Button>
            </PopoverCloseTrigger>
          )}
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
};

Component.displayName = 'Popover';

export const Popover = Object.assign(Component, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Trigger: PopoverTrigger,
  Indicator: PopoverIndicator,
  Positioner: PopoverPositioner,
  Content: PopoverContent,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
});
