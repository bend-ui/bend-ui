import { Dialog } from '@base-ui/react';
import { bend, withParts, withRecipe } from '@bend-ui/core';
import { drawer } from '@bend-ui/styled-system/recipes';

const DrawerRoot = Dialog.Root;

const DrawerTrigger = Dialog.Trigger;

const DrawerPortal = Dialog.Portal;

const DrawerBackdrop = Dialog.Backdrop;

const DrawerPopup = withRecipe<Dialog.Popup.Props>(
  Dialog.Popup,
  drawer,
  'root',
);

const DrawerTitle = withParts(Dialog.Title, 'title');

const DrawerDescription = withParts(Dialog.Description, 'description');

const DrawerContent = withParts(bend.div, 'content');

const DrawerClose = withParts(Dialog.Close, 'close');

export interface DrawerProps {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

const Component = (props: DrawerProps) => {
  const { children, trigger, title, description, ...rest } = props;
  return (
    <DrawerRoot {...rest}>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerContent>
            {!!title && <DrawerTitle>{title}</DrawerTitle>}
            {!!description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
            {children}
            <DrawerClose>Close</DrawerClose>
          </DrawerContent>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  );
};

Component.displayName = 'Drawer';

export const Drawer = Object.assign(Component, {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Backdrop: DrawerBackdrop,
  Popup: DrawerPopup,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Content: DrawerContent,
  Close: DrawerClose,
});
