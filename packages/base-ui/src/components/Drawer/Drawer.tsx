import type { ComponentProps, ReactNode } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { bend } from '@bend-ui/core';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { drawer } from '@bend-ui/styled-system/recipes';

const { withRootProvider, withContext } = createSlotRecipeContext(drawer);

const DrawerRoot = withRootProvider(Dialog.Root);

const DrawerTrigger = Dialog.Trigger;

const DrawerPortal = Dialog.Portal;

const DrawerBackdrop = Dialog.Backdrop;

const DrawerPopup = withContext(Dialog.Popup, 'root');

const DrawerTitle = withContext(Dialog.Title, 'title');

const DrawerDescription = withContext(Dialog.Description, 'description');

const DrawerContent = withContext(bend.div, 'content');

const DrawerClose = withContext(Dialog.Close, 'closeTrigger');

export interface DrawerProps
  extends Omit<ComponentProps<typeof DrawerRoot>, 'children'> {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  /** Content of the close button; the button is omitted when not provided. */
  closeLabel?: ReactNode;
  children?: ReactNode;
}

const Component = (props: DrawerProps) => {
  const { children, trigger, title, description, closeLabel, ...rest } =
    props;
  return (
    <DrawerRoot {...rest}>
      {trigger != null && <DrawerTrigger>{trigger}</DrawerTrigger>}
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPopup>
          <DrawerContent>
            {title != null && <DrawerTitle>{title}</DrawerTitle>}
            {description != null && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
            {children}
            {closeLabel != null && <DrawerClose>{closeLabel}</DrawerClose>}
          </DrawerContent>
        </DrawerPopup>
      </DrawerPortal>
    </DrawerRoot>
  );
};

Object.assign(Component, { displayName: 'Drawer' });

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
