import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import {
  dialog,
  DialogVariantProps,
  backdrop,
} from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/react';
import { Button, ButtonProps, HTMLBendUIProps } from '@bend-ui/react';
import { Assign } from '@bend-ui/styled-system/types';

export interface DialogRootProps
  extends DialogPrimitive.Root.Props,
    DialogVariantProps {}

const DialogRoot = (props: DialogRootProps) => {
  return <DialogPrimitive.Root {...props} />;
};

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

const DialogPositioner = withRecipe<DialogPositionerProps>(
  'div',
  dialog,
  'positioner',
);

export type DialogPopupProps = DialogPrimitive.Popup.Props;

const DialogPopup = withParts<DialogPopupProps>(
  DialogPrimitive.Popup,
  'content',
);

export type DialogTitleProps = DialogPrimitive.Title.Props;

const DialogTitle = withParts<DialogTitleProps>(DialogPrimitive.Title, 'title');

export type DialogDescriptionProps = DialogPrimitive.Description.Props;

const DialogDescription = withParts<DialogDescriptionProps>(
  DialogPrimitive.Description,
  'description',
);

export type DialogCloseProps = DialogPrimitive.Close.Props;

const DialogClose = withParts<DialogCloseProps>(
  DialogPrimitive.Close,
  'close-trigger',
);

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
