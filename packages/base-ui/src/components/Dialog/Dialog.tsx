import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import {
  dialog,
  DialogVariantProps,
  backdrop,
} from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/core';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { Button, type ButtonProps } from '../Button';
import type { HTMLBendUIProps } from '@bend-ui/core';
import { Assign } from '@bend-ui/styled-system/types';

export interface DialogRootProps
  extends DialogPrimitive.Root.Props, DialogVariantProps {}

const { withRootProvider, withContext } = createStyleContext(dialog);
const DialogRoot = withRootProvider(DialogPrimitive.Root);

export type DialogTriggerProps = Assign<
  ButtonProps,
  DialogPrimitive.Trigger.Props
>;

const DialogTrigger = withParts<DialogTriggerProps>(
  DialogPrimitive.Trigger,
  'trigger',
  {
    render: (props) => <Button {...props} />,
  },
);

export type DialogPortalProps = DialogPrimitive.Portal.Props;

const DialogPortal = DialogPrimitive.Portal;

export type DialogBackdropProps = DialogPrimitive.Backdrop.Props;

const DialogBackdrop = withRecipe<DialogBackdropProps>(
  DialogPrimitive.Backdrop,
  backdrop,
  'backdrop',
);

export type DialogPositionerProps = HTMLBendUIProps<'div'>;

const DialogPositioner = withContext('div', 'positioner');

export type DialogPopupProps = DialogPrimitive.Popup.Props;

const DialogPopup = withContext(DialogPrimitive.Popup, 'content');

export type DialogTitleProps = DialogPrimitive.Title.Props;

const DialogTitle = withContext(DialogPrimitive.Title, 'title');

export type DialogDescriptionProps = DialogPrimitive.Description.Props;

const DialogDescription = withContext(
  DialogPrimitive.Description,
  'description',
);

export type DialogCloseProps = DialogPrimitive.Close.Props;

const DialogClose = withContext(DialogPrimitive.Close, 'closeTrigger');

export interface DialogProps extends DialogRootProps {
  title?: string;
  description?: string;
}

const Component = (props: DialogProps) => {
  return <DialogRoot {...props} />;
};

export const Dialog = Object.assign(Component, {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Positioner: DialogPositioner,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});
