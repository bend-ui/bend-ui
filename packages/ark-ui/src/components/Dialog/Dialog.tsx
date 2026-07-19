import { Dialog as ArkDialog } from '@ark-ui/react';
import {
  dialog,
  backdrop,
  DialogVariantProps,
} from '@bend-ui/styled-system/recipes';
import { withRecipe } from '../../utils';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withRootProvider, withContext } = createStyleContext(dialog);

export type DialogRootProps = ArkDialog.RootProps & DialogVariantProps;
const DialogRoot = withRootProvider(ArkDialog.Root);

export type DialogTriggerProps = ArkDialog.TriggerProps;
const DialogTrigger = ArkDialog.Trigger;

export type DialogBackdropProps = ArkDialog.BackdropProps;
const DialogBackdrop = withRecipe<DialogBackdropProps>(
  ArkDialog.Backdrop,
  backdrop,
  'backdrop',
);

export type DialogPositionerProps = ArkDialog.PositionerProps;
const DialogPositioner = withContext(ArkDialog.Positioner, 'positioner');

export type DialogContentProps = ArkDialog.ContentProps;
const DialogContent = withContext(ArkDialog.Content, 'content');

export type DialogTitleProps = ArkDialog.TitleProps;
const DialogTitle = withContext(ArkDialog.Title, 'title');

export type DialogDescriptionProps = ArkDialog.DescriptionProps;
const DialogDescription = withContext(ArkDialog.Description, 'description');

export type DialogCloseTriggerProps = ArkDialog.CloseTriggerProps;
const DialogCloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger');

export type DialogPopupProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  closeTrigger?: string;
};

const DialogPopup = (props: DialogPopupProps) => {
  const { children, title, description, closeTrigger } = props;
  return (
    <>
      <DialogBackdrop />
      <DialogPositioner>
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
    </>
  );
};

interface DialogProps extends DialogRootProps {
  children?: React.ReactNode;
}

const Component = (props: DialogProps) => {
  const { children, ...rest } = props;
  return <DialogRoot {...rest}>{children}</DialogRoot>;
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
  Popup: DialogPopup,
});
