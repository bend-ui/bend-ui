import { forwardRef } from 'react';
import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import {
  dialog,
  backdrop,
  DialogVariantProps,
} from '@particles/styled-system/recipes';
import { DismissButton } from '@particles/react';

type DialogRootProps = React.ComponentPropsWithoutRef<typeof ArkDialog.Root>;

const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>((props, ref) => {
  return <ArkDialog.Root {...props} />;
});

type DialogTriggerProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.Trigger
>;

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  (props, ref) => {
    return <ArkDialog.Trigger {...props} ref={ref} />;
  },
);

type DialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.Backdrop
>;

const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  (props, ref) => {
    const classes = backdrop();
    return <ArkDialog.Backdrop {...props} ref={ref} className={classes} />;
  },
);

type DialogPositionerProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.Positioner
> &
  DialogVariantProps;

const DialogPositioner = forwardRef<HTMLDivElement, DialogPositionerProps>(
  (props, ref) => {
    const [variantProps, rest] = dialog.splitVariantProps(props);
    const classes = dialog(variantProps);
    return <ArkDialog.Positioner {...rest} ref={ref} className={classes} />;
  },
);

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.Content
>;

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (props, ref) => {
    return <ArkDialog.Content {...props} ref={ref} />;
  },
);

type DialogTitleProps = React.ComponentPropsWithoutRef<typeof ArkDialog.Title>;

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    return <ArkDialog.Title {...props} ref={ref} />;
  },
);

type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.Description
>;

const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  (props, ref) => {
    return <ArkDialog.Description {...props} ref={ref} />;
  },
);

type DialogCloseTriggerProps = React.ComponentPropsWithoutRef<
  typeof ArkDialog.CloseTrigger
>;

const DialogCloseTrigger = forwardRef<
  HTMLButtonElement,
  DialogCloseTriggerProps
>((props, ref) => {
  return (
    <ArkDialog.CloseTrigger {...props} ref={ref} asChild>
      <DismissButton variant="outline" size="sm" />
    </ArkDialog.CloseTrigger>
  );
});

interface DialogProps extends ArkDialog.RootProps, DialogVariantProps {
  children: React.ReactNode;
  title: string;
  description: string;
  closeTrigger: string;
}

const Component = (props: DialogProps) => {
  const [variantProps, otherProps] = dialog.splitVariantProps(props);
  const { title, description, closeTrigger, children, ...rest } = otherProps;
  return (
    <DialogRoot {...rest}>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner {...variantProps}>
          <DialogContent>
            {!!title && <DialogTitle>{title}</DialogTitle>}
            {!!description && (
              <DialogDescription>{description}</DialogDescription>
            )}
            {!!closeTrigger && (
              <DialogCloseTrigger>{closeTrigger}</DialogCloseTrigger>
            )}
            {children}
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};

export const Dialog = Object.assign(Component, {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Backdrop: DialogBackdrop,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  CloseTrigger: DialogCloseTrigger,
});
