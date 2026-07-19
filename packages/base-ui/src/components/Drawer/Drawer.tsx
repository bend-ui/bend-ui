import { Dialog } from '@base-ui/react/dialog';
import { bend } from '@bend-ui/core';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { drawer } from '@bend-ui/styled-system/recipes';

const { withRootProvider, withContext } = createStyleContext(drawer);

const DrawerRoot = withRootProvider(Dialog.Root);

const DrawerTrigger = Dialog.Trigger;

const DrawerPortal = Dialog.Portal;

const DrawerBackdrop = Dialog.Backdrop;

const DrawerPopup = withContext(Dialog.Popup, 'root');

const DrawerTitle = withContext(Dialog.Title, 'title');

const DrawerDescription = withContext(Dialog.Description, 'description');

const DrawerContent = withContext(bend.div, 'content');

const DrawerClose = withContext(Dialog.Close, 'closeTrigger');

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
