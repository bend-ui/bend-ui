import { forwardRef } from 'react';
import { Dialog as DialogPrimitive } from '@base-ui-components/react/dialog';
import { dialog } from '@particles/styled-system/recipes';

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Portal = DialogPrimitive.Portal;
const Backdrop = DialogPrimitive.Backdrop;
const Popup = DialogPrimitive.Popup;
const Title = DialogPrimitive.Title;
const Description = DialogPrimitive.Description;
const Close = DialogPrimitive.Close;

export type DialogProps = React.ComponentPropsWithoutRef<typeof Root>;

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
