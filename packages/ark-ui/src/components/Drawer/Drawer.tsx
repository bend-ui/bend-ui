import { Dialog as ArkDialog, Portal as ArkPortal } from '@ark-ui/react';
import { backdrop, drawer } from '@bend-ui/styled-system/recipes';
import { DismissButton } from '../Button';
import { withRecipe } from '@bend-ui/core';
import type {
  BackdropVariantProps,
  DrawerVariantProps,
} from '@bend-ui/styled-system/recipes';
import { Button } from '..';
import { HTMLBendUIProps, bend } from '@bend-ui/core';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(drawer);

type DrawerRootProps = ArkDialog.RootProps;

const DrawerRoot = ArkDialog.Root;

const DrawerTrigger = ArkDialog.Trigger;
Object.assign(DrawerTrigger, { displayName: 'DrawerTrigger' });

type DrawerCloseTriggerProps = ArkDialog.CloseTriggerProps;

const DrawerCloseTriggerBase = (props: DrawerCloseTriggerProps) => {
  return (
    <ArkDialog.CloseTrigger {...props} asChild>
      <DismissButton variant="secondary" size="sm" />
    </ArkDialog.CloseTrigger>
  );
};
const DrawerCloseTrigger = withContext(DrawerCloseTriggerBase, 'closeTrigger');
Object.assign(DrawerCloseTrigger, { displayName: 'DrawerCloseTrigger' });

const DrawerPortal = ArkPortal;

export type DrawerBackdropProps = ArkDialog.BackdropProps &
  BackdropVariantProps;

const DrawerBackdrop = withRecipe<DrawerBackdropProps>(
  ArkDialog.Backdrop,
  backdrop,
  'backdrop',
);
Object.assign(DrawerBackdrop, { displayName: 'DrawerBackdrop' });

export type DrawerPositionerProps = ArkDialog.PositionerProps &
  DrawerVariantProps;

const DrawerPositioner = withProvider(ArkDialog.Positioner, 'root');
Object.assign(DrawerPositioner, { displayName: 'DrawerPositioner' });

const DrawerContent = withContext(ArkDialog.Content, 'content');
Object.assign(DrawerContent, { displayName: 'DrawerContent' });

const DrawerTitle = withContext(ArkDialog.Title, 'title');
Object.assign(DrawerTitle, { displayName: 'DrawerTitle' });

const DrawerDescription = withContext(ArkDialog.Description, 'description');
Object.assign(DrawerDescription, { displayName: 'DrawerDescription' });

export type DrawerFooterProps = HTMLBendUIProps<'div'>;

const DrawerFooter = withContext(bend.div, 'footer');
Object.assign(DrawerFooter, { displayName: 'DrawerFooter' });

export interface DrawerProps extends DrawerRootProps, DrawerVariantProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

const Component = (props: DrawerProps) => {
  const { children, title, description, trigger, placement, ...rest } = props;
  return (
    <DrawerRoot {...rest}>
      <DrawerTrigger asChild>
        <Button>{trigger}</Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerPositioner placement={placement}>
          <DrawerContent>
            {!!title && <DrawerTitle>{title}</DrawerTitle>}
            {!!description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
            {children}
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerPositioner>
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
  Positioner: DrawerPositioner,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
  CloseTrigger: DrawerCloseTrigger,
});
