import { forwardRef } from 'react';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui-components/react/alert-dialog';

const Root = AlertDialogPrimitive.Root;
const Trigger = AlertDialogPrimitive.Trigger;
const Portal = AlertDialogPrimitive.Portal;
const Backdrop = AlertDialogPrimitive.Backdrop;
const Popup = AlertDialogPrimitive.Popup;
const Title = AlertDialogPrimitive.Title;
const Description = AlertDialogPrimitive.Description;
const Close = AlertDialogPrimitive.Close;

export type AlertDialogProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
>;

const Component = forwardRef<HTMLDivElement, AlertDialogProps>((props, ref) => {
  return <Root {...props} />;
});

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
