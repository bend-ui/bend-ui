import { alertDialog, overlay } from '@particles/styled-system/recipes';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui-components/react/alert-dialog';
import { withParts, withRecipe } from '../../utils/with-recipe';

export interface AlertDialogRootProps extends AlertDialogPrimitive.Root.Props {
  children?: React.ReactNode;
}
const AlertDialogRoot = AlertDialogPrimitive.Root;

export interface AlertDialogTriggerProps
  extends AlertDialogPrimitive.Trigger.Props {
  children?: React.ReactNode;
}
const AlertDialogTrigger = withParts<AlertDialogTriggerProps>(
  AlertDialogPrimitive.Trigger,
  'trigger',
);

export interface AlertDialogPortalProps
  extends AlertDialogPrimitive.Portal.Props {
  children?: React.ReactNode;
}
const AlertDialogPortal = AlertDialogPrimitive.Portal;

export interface AlertDialogBackdropProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Backdrop> {
  children?: React.ReactNode;
}
const AlertDialogBackdrop = withRecipe<AlertDialogBackdropProps>(
  AlertDialogPrimitive.Backdrop,
  overlay,
  'root',
);

export interface AlertDialogPopupProps
  extends AlertDialogPrimitive.Popup.Props {
  children?: React.ReactNode;
}
const AlertDialogPopup = withRecipe<AlertDialogPopupProps>(
  AlertDialogPrimitive.Popup,
  alertDialog,
  'content',
);

export interface AlertDialogTitleProps
  extends AlertDialogPrimitive.Title.Props {
  children?: React.ReactNode;
}
const AlertDialogTitle = withParts<AlertDialogTitleProps>(
  AlertDialogPrimitive.Title,
  'title',
);

export interface AlertDialogDescriptionProps
  extends AlertDialogPrimitive.Description.Props {
  children?: React.ReactNode;
}
const AlertDialogDescription = withParts<AlertDialogDescriptionProps>(
  AlertDialogPrimitive.Description,
  'description',
);

export interface AlertDialogCloseProps
  extends AlertDialogPrimitive.Close.Props {
  children?: React.ReactNode;
}
const AlertDialogClose = withParts<AlertDialogCloseProps>(
  AlertDialogPrimitive.Close,
  'close',
);

export interface AlertDialogProps extends AlertDialogRootProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const Component = (props: AlertDialogProps) => {
  return <AlertDialogRoot {...props} />;
};

export const AlertDialog = Object.assign(Component, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Backdrop: AlertDialogBackdrop,
  Popup: AlertDialogPopup,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Close: AlertDialogClose,
});
