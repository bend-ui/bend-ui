'use client';
import React from 'react';
import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import { withParts } from '@bend-ui/core';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { toast } from '@bend-ui/styled-system/recipes';

const ToastProvider: React.ComponentType<ToastPrimitive.Provider.Props> =
  ToastPrimitive.Provider;
const ToastPortal: React.ComponentType<ToastPrimitive.Portal.Props> =
  ToastPrimitive.Portal;
const { withProvider, withContext } = createSlotRecipeContext(toast);
const ToastViewport = withProvider(ToastPrimitive.Viewport, 'viewport');
const ToastRoot = withProvider(ToastPrimitive.Root, 'root');
const ToastTitle = withContext(ToastPrimitive.Title, 'title');

const ToastDescription = withContext(ToastPrimitive.Description, 'description');

const ToastAction = withParts<ToastPrimitive.Action.Props>(
  ToastPrimitive.Action,
  'action',
);

const ToastClose = withContext(ToastPrimitive.Close, 'closeTrigger');

/** Adds, updates and lists toasts rendered inside the nearest `Toast.Provider`. */
export const useToastManager = ToastPrimitive.useToastManager;

export type ToastComponent = typeof ToastRoot & {
  Provider: typeof ToastProvider;
  Portal: typeof ToastPortal;
  Viewport: typeof ToastViewport;
  Root: typeof ToastRoot;
  Title: typeof ToastTitle;
  Description: typeof ToastDescription;
  Action: typeof ToastAction;
  Close: typeof ToastClose;
};

export const Toast: ToastComponent = Object.assign(ToastRoot, {
  Provider: ToastProvider,
  Portal: ToastPortal,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
});
