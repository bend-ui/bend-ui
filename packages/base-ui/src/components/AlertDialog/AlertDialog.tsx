import { alertDialog } from '@bend-ui/styled-system/recipes';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import { withParts } from '@bend-ui/core';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { Button } from '../Button';

export interface AlertDialogRootProps extends AlertDialogPrimitive.Root.Props {
  children?: React.ReactNode;
}
const { withRootProvider, withContext } = createStyleContext(alertDialog);
const AlertDialogRoot = withRootProvider(AlertDialogPrimitive.Root);

export interface AlertDialogTriggerProps
  extends AlertDialogPrimitive.Trigger.Props {
  children?: React.ReactNode;
}
const AlertDialogTrigger = withParts<AlertDialogTriggerProps>(
  AlertDialogPrimitive.Trigger,
  'trigger',
  {
    render: (props) => <Button {...props} />,
  },
);

export interface AlertDialogPortalProps
  extends AlertDialogPrimitive.Portal.Props {
  children?: React.ReactNode;
}
const AlertDialogPortal = AlertDialogPrimitive.Portal;

export interface AlertDialogBackdropProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Backdrop
> {
  children?: React.ReactNode;
}
const AlertDialogBackdrop = withContext(
  AlertDialogPrimitive.Backdrop,
  'overlay',
);

export interface AlertDialogPopupProps
  extends AlertDialogPrimitive.Popup.Props {
  children?: React.ReactNode;
}
const AlertDialogPopup = withContext(AlertDialogPrimitive.Popup, 'content');

export interface AlertDialogTitleProps
  extends AlertDialogPrimitive.Title.Props {
  children?: React.ReactNode;
}
const AlertDialogTitle = withContext(AlertDialogPrimitive.Title, 'title');

export interface AlertDialogDescriptionProps
  extends AlertDialogPrimitive.Description.Props {
  children?: React.ReactNode;
}
const AlertDialogDescription = withContext(
  AlertDialogPrimitive.Description,
  'description',
);

export interface AlertDialogCloseProps
  extends AlertDialogPrimitive.Close.Props {
  children?: React.ReactNode;
}
const AlertDialogClose = withContext(AlertDialogPrimitive.Close, 'close');

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
