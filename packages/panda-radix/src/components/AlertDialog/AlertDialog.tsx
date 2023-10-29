import { forwardRef } from 'react';
import { createComponent } from '@particles/primitives';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cx } from '@particles/panda-system/css';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from 'react';

const Root = AlertDialogPrimitive.Root;

const Trigger = AlertDialogPrimitive.Trigger;

const Portal = AlertDialogPrimitive.Portal;

const Overlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cx(className)}
    {...props}
    ref={ref}
  />
));

Overlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const Content = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <Overlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cx(className)}
      {...props}
    />
  </Portal>
));

Content.displayName = AlertDialogPrimitive.Content.displayName;

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cx(className)} {...props} />
);

Header.displayName = 'AlertDialogHeader';

const Footer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cx(className)} {...props} />
);

Footer.displayName = 'AlertDialogFooter';

const Title = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cx('text-lg font-semibold', className)}
    {...props}
  />
));

Title.displayName = AlertDialogPrimitive.Title.displayName;

const Description = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cx(className)}
    {...props}
  />
));

Description.displayName = AlertDialogPrimitive.Description.displayName;

const Action = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cx(className)} {...props} />
));

Action.displayName = AlertDialogPrimitive.Action.displayName;

const Cancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel ref={ref} className={cx(className)} {...props} />
));

Cancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export default createComponent(Root, {
  Root,
  Portal,
  Overlay,
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Action,
  Cancel,
});
