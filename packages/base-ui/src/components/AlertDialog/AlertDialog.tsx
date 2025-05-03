import { alertDialog, overlay } from '@particles/styled-system/recipes';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui-components/react/alert-dialog';
import { withParts, withRecipe } from '../../utils/with-recipe';

export interface AlertDialogRootProps extends AlertDialogPrimitive.Root.Props {
  children?: React.ReactNode;
}
const Root = AlertDialogPrimitive.Root;

export interface AlertDialogTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger> {
  children?: React.ReactNode;
}
const Trigger = withParts<AlertDialogTriggerProps>(
  AlertDialogPrimitive.Trigger,
  'trigger',
);

export interface AlertDialogPortalProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Portal> {
  children?: React.ReactNode;
}
const Portal = AlertDialogPrimitive.Portal;

export interface AlertDialogBackdropProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Backdrop> {
  children?: React.ReactNode;
}
const Backdrop = withRecipe<AlertDialogBackdropProps>(
  AlertDialogPrimitive.Backdrop,
  overlay,
  'root',
);

export interface AlertDialogPopupProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Popup> {
  children?: React.ReactNode;
}
const Popup = withRecipe<AlertDialogPopupProps>(
  AlertDialogPrimitive.Popup,
  alertDialog,
  'content',
);

export interface AlertDialogTitleProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
  children?: React.ReactNode;
}
const Title = withParts<AlertDialogTitleProps>(
  AlertDialogPrimitive.Title,
  'title',
);

export interface AlertDialogDescriptionProps
  extends React.ComponentPropsWithoutRef<
    typeof AlertDialogPrimitive.Description
  > {
  children?: React.ReactNode;
}
const Description = withParts<AlertDialogDescriptionProps>(
  AlertDialogPrimitive.Description,
  'description',
);

export interface AlertDialogCloseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Close> {
  children?: React.ReactNode;
}
const Close = withParts<AlertDialogCloseProps>(
  AlertDialogPrimitive.Close,
  'close',
);

export interface AlertDialogProps extends AlertDialogRootProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const Component = (props: AlertDialogProps) => {
  return <Root {...props} />;
};

export const AlertDialog = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
});
