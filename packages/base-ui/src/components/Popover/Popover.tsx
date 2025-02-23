import { Popover as PopoverPrimitive } from '@base-ui-components/react/popover';
import { popover } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;
const Portal = PopoverPrimitive.Portal;
const Positioner = PopoverPrimitive.Positioner;
const Popup = PopoverPrimitive.Popup;
const Arrow = PopoverPrimitive.Arrow;
const Title = PopoverPrimitive.Title;
const Description = PopoverPrimitive.Description;

export type PopoverProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
>;

const Component = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return (
    <Root {...props}>
      <Trigger ref={ref}>Trigger</Trigger>
      <Portal>
        <Positioner sideOffset={8}>
          <Popup>
            <Arrow />
            <Title>Notifications</Title>
            <Description>You are all caught up. Good job!</Description>
          </Popup>
        </Positioner>
      </Portal>
    </Root>
  );
});

export const Popover = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Arrow,
  Title,
  Description,
});
