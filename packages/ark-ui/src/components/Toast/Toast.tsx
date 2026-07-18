import { createToaster, Toaster, Toast as ArkToast } from '@ark-ui/react';
import { toast, ToastVariantProps } from '@bend-ui/styled-system/recipes';
import { Button, DismissButton } from '..';
import { withParts, withRecipe } from '@bend-ui/core';

export type ToastRootProps = ArkToast.RootProps & ToastVariantProps;

const ToastRoot = withRecipe(ArkToast.Root, toast, 'root');
const ToastTitle = withParts(ArkToast.Title, 'title');
const ToastDescription = withParts(ArkToast.Description, 'description');

type ToastCloseTriggerProps = ArkToast.CloseTriggerProps;

const ToastCloseTrigger = (props: ToastCloseTriggerProps) => {
  return (
    <ArkToast.CloseTrigger {...props} asChild>
      <DismissButton variant="secondary" size="sm" />
    </ArkToast.CloseTrigger>
  );
};

type ToastActionTriggerProps = ArkToast.ActionTriggerProps;

const ToastActionTrigger = (props: ToastActionTriggerProps) => {
  const { children, ...rest } = props;
  return (
    <ArkToast.ActionTrigger {...rest} asChild>
      <Button variant="secondary" size="sm">
        {children}
      </Button>
    </ArkToast.ActionTrigger>
  );
};

export interface ToastProps extends ToastRootProps {
  title: string;
  description: string;
  action?: string;
}

const Component = (props: ToastProps) => {
  const { title, description, action, ...rest } = props;
  return (
    <ToastRoot {...rest}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastCloseTrigger />
      {action && <ToastActionTrigger>{action}</ToastActionTrigger>}
    </ToastRoot>
  );
};

Component.displayName = 'Toast';

export const Toast = Object.assign(Component, {
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  CloseTrigger: ToastCloseTrigger,
  ActionTrigger: ToastActionTrigger,
});

export { createToaster, Toaster };
