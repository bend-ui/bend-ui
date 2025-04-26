import { createToaster, Toaster, Toast as ArkToast } from '@ark-ui/react';
import { toast, ToastVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { XIcon } from 'lucide-react';
import { Button, DismissButton } from '..';
import type { ElementRef } from 'react';

export type ToastRootProps = ArkToast.RootProps & ToastVariantProps;

const ToastRoot = forwardRef<ElementRef<typeof ArkToast.Root>, ToastRootProps>(
  (props, ref) => {
    const [variantProps, rest] = toast.splitVariantProps(props);
    const classes = toast(variantProps);

    return <ArkToast.Root ref={ref} {...rest} className={classes} />;
  },
);
const ToastTitle = ArkToast.Title;
const ToastDescription = ArkToast.Description;

type ToastCloseTriggerProps = ArkToast.CloseTriggerProps;

const ToastCloseTrigger = forwardRef<
  ElementRef<typeof ArkToast.CloseTrigger>,
  ToastCloseTriggerProps
>((props, ref) => {
  return (
    <ArkToast.CloseTrigger ref={ref} {...props} asChild>
      <DismissButton variant="outline" size="sm" />
    </ArkToast.CloseTrigger>
  );
});

type ToastActionTriggerProps = ArkToast.ActionTriggerProps;

const ToastActionTrigger = forwardRef<
  ElementRef<typeof ArkToast.ActionTrigger>,
  ToastActionTriggerProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ArkToast.ActionTrigger ref={ref} {...rest} asChild>
      <Button variant="outline" size="sm">
        {children}
      </Button>
    </ArkToast.ActionTrigger>
  );
});

export interface ToastProps extends ToastRootProps {
  title: string;
  description: string;
  action?: string;
}

const Component = forwardRef<ElementRef<typeof ToastRoot>, ToastProps>(
  (props, ref) => {
    const { title, description, action, ...rest } = props;
    return (
      <ToastRoot ref={ref} {...rest}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastCloseTrigger />
        {action && <ToastActionTrigger>{action}</ToastActionTrigger>}
      </ToastRoot>
    );
  },
);

Component.displayName = 'Toast';

export const Toast = Object.assign(Component, {
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  CloseTrigger: ToastCloseTrigger,
  ActionTrigger: ToastActionTrigger,
});

export { createToaster, Toaster };
