import { forwardRef } from 'react';
import { Dialog as DialogPrimitive } from '@base-ui-components/react/dialog';
import { dialog, DialogVariantProps } from '@particles/styled-system/recipes';

export interface DialogRootProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
    DialogVariantProps {}

const Root = forwardRef<HTMLDivElement, DialogRootProps>((props, ref) => {
  return <DialogPrimitive.Root {...props} ref={ref} />;
});

export type DialogTriggerProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

const Trigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  (props, ref) => {
    return <DialogPrimitive.Trigger {...props} ref={ref} data-part="trigger" />;
  },
);

export type DialogPortalProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Portal
>;

const Portal = forwardRef<HTMLDivElement, DialogPortalProps>((props, ref) => {
  const classes = dialog();

  return (
    <DialogPrimitive.Portal
      {...props}
      ref={ref}
      data-part="portal"
      className={classes}
    />
  );
});

export type DialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Backdrop
>;

const Backdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  (props, ref) => {
    return (
      <DialogPrimitive.Backdrop {...props} ref={ref} data-part="backdrop" />
    );
  },
);

export type DialogPopupProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Popup
>;

const Popup = forwardRef<HTMLDivElement, DialogPopupProps>((props, ref) => {
  return <DialogPrimitive.Popup {...props} ref={ref} data-part="popup" />;
});

export type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

const Title = forwardRef<HTMLHeadingElement, DialogTitleProps>((props, ref) => {
  return <DialogPrimitive.Title {...props} ref={ref} data-part="title" />;
});

export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

const Description = forwardRef<HTMLDivElement, DialogDescriptionProps>(
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

export type DialogCloseProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Close
>;

const Close = forwardRef<HTMLButtonElement, DialogCloseProps>((props, ref) => {
  return <DialogPrimitive.Close {...props} ref={ref} data-part="close" />;
});

export interface DialogProps extends DialogRootProps {
  title?: string;
  description?: string;
}

const Component = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Dialog = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
});
