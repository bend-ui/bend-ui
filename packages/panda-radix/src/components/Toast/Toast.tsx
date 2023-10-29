import { forwardRef } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { TbX } from 'react-icons/tb';
import { cx } from '@particles/panda-system/css';
import { createComponent } from '@particles/primitives';
import type { ComponentPropsWithoutRef, ElementRef, ReactElement } from 'react';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cx(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Root>;

const Root = forwardRef<ElementRef<typeof ToastPrimitives.Root>, ToastProps>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Root ref={ref} className={cx(className)} {...props} />
  ),
);
Root.displayName = ToastPrimitives.Root.displayName;

const Action = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cx(className)} {...props} />
));
Action.displayName = ToastPrimitives.Action.displayName;

const Close = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cx(className)}
    toast-close=""
    {...props}
  >
    <TbX />
  </ToastPrimitives.Close>
));
Close.displayName = ToastPrimitives.Close.displayName;

const Title = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cx(className)} {...props} />
));
Title.displayName = ToastPrimitives.Title.displayName;

const Description = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cx(className)} {...props} />
));
Description.displayName = ToastPrimitives.Description.displayName;

export type ToastActionElement = ReactElement<typeof Action>;

export { ToastProvider, ToastViewport };

export default createComponent(Root, {
  Root,
  Title,
  Description,
  Close,
  Action,
});
