import { Popover as ArkPopover } from '@ark-ui/react';
import { popover } from '@particles/styled-system/recipes';
import type { PopoverVariantProps } from '@particles/styled-system/recipes';
import { Button } from '..';
import { forwardRef } from 'react';

const PopoverRoot = ArkPopover.Root;
const PopoverTrigger = ArkPopover.Trigger;
const PopoverIndicator = ArkPopover.Indicator;

type PopoverPositionerProps = ArkPopover.PositionerProps & PopoverVariantProps;

const PopoverPositioner = forwardRef<HTMLDivElement, PopoverPositionerProps>(
  (props, ref) => {
    const [variantProps, rest] = popover.splitVariantProps(props);
    const classes = popover(variantProps);
    return <ArkPopover.Positioner {...rest} className={classes} ref={ref} />;
  },
);

const PopoverContent = ArkPopover.Content;
const PopoverTitle = ArkPopover.Title;
const PopoverDescription = ArkPopover.Description;

export interface PopoverProps
  extends ArkPopover.RootProps,
    PopoverVariantProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Component = (props: PopoverProps) => {
  const { trigger, title, description, children, size, ...rest } = props;
  return (
    <PopoverRoot {...rest}>
      <PopoverTrigger asChild>
        <Button>{trigger}</Button>
      </PopoverTrigger>
      <PopoverPositioner size={size}>
        <PopoverContent>
          {!!title && <PopoverTitle>{title}</PopoverTitle>}
          {!!description && (
            <PopoverDescription>{description}</PopoverDescription>
          )}
          {children}
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  );
};

Component.displayName = 'Popover';

export const Popover = Object.assign(Component, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Indicator: PopoverIndicator,
  Positioner: PopoverPositioner,
  Content: PopoverContent,
  Title: PopoverTitle,
  Description: PopoverDescription,
});
