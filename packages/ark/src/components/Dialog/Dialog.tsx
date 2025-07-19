import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import {
  dialog,
  backdrop,
  DialogVariantProps,
} from '@particles/styled-system/recipes';
import { withRecipe, withParts } from '../../utils';
import { Button } from '@particles/react';

export type DialogRootProps = ArkDialog.RootProps;
const DialogRoot = ArkDialog.Root;

export type DialogTriggerProps = ArkDialog.TriggerProps;
const DialogTrigger = ArkDialog.Trigger;

export type DialogBackdropProps = ArkDialog.BackdropProps;
const DialogBackdrop = withRecipe<DialogBackdropProps>(
  ArkDialog.Backdrop,
  backdrop,
  'backdrop',
);

export type DialogPositionerProps = ArkDialog.PositionerProps;
const DialogPositioner = withRecipe<DialogPositionerProps>(
  ArkDialog.Positioner,
  dialog,
  'positioner',
);

export type DialogContentProps = ArkDialog.ContentProps;
const DialogContent = withParts<DialogContentProps>(
  ArkDialog.Content,
  'content',
);

export type DialogTitleProps = ArkDialog.TitleProps;
const DialogTitle = withParts<DialogTitleProps>(ArkDialog.Title, 'title');

export type DialogDescriptionProps = ArkDialog.DescriptionProps;
const DialogDescription = withParts<DialogDescriptionProps>(
  ArkDialog.Description,
  'description',
);

export type DialogCloseTriggerProps = ArkDialog.CloseTriggerProps;
const DialogCloseTrigger = withParts<DialogCloseTriggerProps>(
  ArkDialog.CloseTrigger,
  'closeTrigger',
);

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
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
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
