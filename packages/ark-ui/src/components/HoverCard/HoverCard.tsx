import { HoverCard as HoverCardPrimitive, Portal } from '@ark-ui/react';

const Component = (props: HoverCardPrimitive.RootProps) => (
  <HoverCardPrimitive.Root {...props}>
    <HoverCardPrimitive.Trigger>Hover me</HoverCardPrimitive.Trigger>
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content>
          <HoverCardPrimitive.Arrow>
            <HoverCardPrimitive.ArrowTip />
          </HoverCardPrimitive.Arrow>
          Content
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Positioner>
    </Portal>
  </HoverCardPrimitive.Root>
);

export const HoverCard = Object.assign(Component, {
  Root: HoverCardPrimitive.Root,
  Trigger: HoverCardPrimitive.Trigger,
  Positioner: HoverCardPrimitive.Positioner,
  Content: HoverCardPrimitive.Content,
  Arrow: HoverCardPrimitive.Arrow,
  ArrowTip: HoverCardPrimitive.ArrowTip,
});
