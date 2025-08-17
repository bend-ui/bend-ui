import { forwardRef } from 'react';
import { Toast as ToastPrimitives } from 'radix-ui';
import { TbX } from 'react-icons/tb';
import { cx } from '@particles/styled-system/css';
import { toast } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ElementRef, ReactElement } from 'react';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>((props, ref) => {
  const { className, ...rest } = props;
  const classes = toast();

  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cx(classes, className)}
      {...rest}
    />
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Root>;

const Root = forwardRef<ElementRef<typeof ToastPrimitives.Root>, ToastProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const classes = toast();
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={cx(classes, className)}
        {...rest}
      />
    );
  },
);

Root.displayName = ToastPrimitives.Root.displayName;

const Action = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <ToastPrimitives.Action ref={ref} className={cx(className)} {...rest} />
  );
});

Action.displayName = ToastPrimitives.Action.displayName;

const Close = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cx(className)}
      toast-close=""
      {...rest}
    >
      <TbX />
    </ToastPrimitives.Close>
  );
});

Close.displayName = ToastPrimitives.Close.displayName;

const Title = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ToastPrimitives.Title ref={ref} className={cx(className)} {...rest} />
  );
});

Title.displayName = ToastPrimitives.Title.displayName;

const Description = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cx(className)}
      {...rest}
    />
  );
});

Description.displayName = ToastPrimitives.Description.displayName;

export type ToastActionElement = ReactElement<typeof Action>;

export { ToastProvider, ToastViewport };

export const Toast = Object.assign(Root, {
  Root,
  Title,
  Description,
  Close,
  Action,
});

export default Toast;
