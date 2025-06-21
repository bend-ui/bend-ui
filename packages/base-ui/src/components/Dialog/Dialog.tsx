import { forwardRef } from 'react';
import { Dialog as DialogPrimitive } from '@base-ui-components/react/dialog';
import { dialog, DialogVariantProps } from '@particles/styled-system/recipes';

export interface DialogRootProps
  extends DialogPrimitive.Root.Props,
    DialogVariantProps {}

const DialogRoot = (props: DialogRootProps) => {
  return <DialogPrimitive.Root {...props} />;
};

export type DialogTriggerProps = DialogPrimitive.Trigger.Props;

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  (props, ref) => {
    return <DialogPrimitive.Trigger {...props} ref={ref} data-part="trigger" />;
  },
);

export type DialogPortalProps = DialogPrimitive.Portal.Props;

const DialogPortal = (props: DialogPortalProps) => {
  return <DialogPrimitive.Portal {...props} data-part="portal" />;
};

export type DialogBackdropProps = DialogPrimitive.Backdrop.Props;

const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  (props, ref) => {
    return (
      <DialogPrimitive.Backdrop {...props} ref={ref} data-part="backdrop" />
    );
  },
);

export type DialogPopupProps = DialogPrimitive.Popup.Props;

const DialogPopup = forwardRef<HTMLDivElement, DialogPopupProps>(
  (props, ref) => {
    return <DialogPrimitive.Popup {...props} ref={ref} data-part="popup" />;
  },
);

export type DialogTitleProps = DialogPrimitive.Title.Props;

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    return <DialogPrimitive.Title {...props} ref={ref} data-part="title" />;
  },
);

export type DialogDescriptionProps = DialogPrimitive.Description.Props;

const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  (props, ref) => {
    return (
      <DialogPrimitive.Description
        {...props}
        ref={ref}
        data-part="description"
      />
    );
  },
);

export type DialogCloseProps = DialogPrimitive.Close.Props;

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  (props, ref) => {
    return <DialogPrimitive.Close {...props} ref={ref} data-part="close" />;
  },
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
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});
