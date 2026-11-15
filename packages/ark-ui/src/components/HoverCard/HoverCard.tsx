import { HoverCard as HoverCardPrimitive, Portal } from '@ark-ui/react';

export interface HoverCardProps extends HoverCardPrimitive.RootProps {
  /** Content of the element that opens the hover card. */
  trigger: React.ReactNode;
  /** Hover card content. */
  children: React.ReactNode;
}

const Component = (props: HoverCardProps) => {
  const { trigger, children, ...rest } = props;
  return (
    <HoverCardPrimitive.Root {...rest}>
      <HoverCardPrimitive.Trigger>{trigger}</HoverCardPrimitive.Trigger>
      <Portal>
        <HoverCardPrimitive.Positioner>
          <HoverCardPrimitive.Content>
            <HoverCardPrimitive.Arrow>
              <HoverCardPrimitive.ArrowTip />
            </HoverCardPrimitive.Arrow>
            {children}
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Positioner>
      </Portal>
    </HoverCardPrimitive.Root>
  );
};

export const HoverCard = Object.assign(Component, {
  Root: HoverCardPrimitive.Root,
  Trigger: HoverCardPrimitive.Trigger,
  Positioner: HoverCardPrimitive.Positioner,
  Content: HoverCardPrimitive.Content,
  Arrow: HoverCardPrimitive.Arrow,
  ArrowTip: HoverCardPrimitive.ArrowTip,
});
