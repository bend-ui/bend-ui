'use client';
import React from 'react';
import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import { withParts, withRecipe } from '@bend-ui/core';
import { toast } from '@bend-ui/styled-system/recipes';

const ToastProvider: React.ComponentType<ToastPrimitive.Provider.Props> =
  ToastPrimitive.Provider;
const ToastPortal: React.ComponentType<ToastPrimitive.Portal.Props> =
  ToastPrimitive.Portal;
const ToastViewport: React.ComponentType<ToastPrimitive.Viewport.Props> =
  ToastPrimitive.Viewport;
const ToastRoot = withRecipe<ToastPrimitive.Root.Props>(
  ToastPrimitive.Root,
  toast,
  'root',
);
const ToastTitle = withParts<ToastPrimitive.Title.Props>(
  ToastPrimitive.Title,
  'title',
);

const ToastDescription = withParts<ToastPrimitive.Description.Props>(
  ToastPrimitive.Description,
  'description',
);

const ToastAction = withParts<ToastPrimitive.Action.Props>(
  ToastPrimitive.Action,
  'action',
);

const ToastClose = withParts<ToastPrimitive.Close.Props>(
  ToastPrimitive.Close,
  'close',
);

const Component = () => {
  return (
    <ToastProvider>
      <ToastButton />
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
};

function ToastButton() {
  const toastManager = ToastPrimitive.useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: 'This is a toast notification.',
    });
  }

  return (
    <button type="button" onClick={createToast}>
      Create toast
    </button>
  );
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager();
  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastTitle />
      <ToastDescription />
      <ToastClose aria-label="Close">
        <XIcon />
      </ToastClose>
    </ToastRoot>
  ));
}

function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export interface ToastComponent extends React.FC {
  Provider: typeof ToastProvider;
  Portal: typeof ToastPortal;
  Viewport: typeof ToastViewport;
  Root: typeof ToastRoot;
  Title: typeof ToastTitle;
  Description: typeof ToastDescription;
  Action: typeof ToastAction;
  Close: typeof ToastClose;
}

export const Toast: ToastComponent = Object.assign(Component, {
  Provider: ToastProvider,
  Portal: ToastPortal,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
});
