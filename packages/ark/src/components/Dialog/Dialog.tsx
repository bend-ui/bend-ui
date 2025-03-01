import { Dialog as DialogPrimitive, Portal } from '@ark-ui/react';

const Component = (props: DialogPrimitive.RootProps) => (
  <DialogPrimitive.Root {...props}>
    <DialogPrimitive.Trigger>Open Dialog</DialogPrimitive.Trigger>
    <Portal>
      <DialogPrimitive.Backdrop />
      <DialogPrimitive.Positioner>
        <DialogPrimitive.Content>
          <DialogPrimitive.Title>Dialog Title</DialogPrimitive.Title>
          <DialogPrimitive.Description>
            Dialog Description
          </DialogPrimitive.Description>
          <DialogPrimitive.CloseTrigger>Close</DialogPrimitive.CloseTrigger>
        </DialogPrimitive.Content>
      </DialogPrimitive.Positioner>
    </Portal>
  </DialogPrimitive.Root>
);

export const Dialog = Object.assign(Component, {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Backdrop: DialogPrimitive.Backdrop,
  Positioner: DialogPrimitive.Positioner,
  Content: DialogPrimitive.Content,
  Title: DialogPrimitive.Title,
  Description: DialogPrimitive.Description,
  CloseTrigger: DialogPrimitive.CloseTrigger,
});
