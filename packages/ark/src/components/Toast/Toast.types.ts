import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { ToastRootProps } from '@ark-ui/react';

export interface ToastProps extends Assign<JsxStyleProps, ToastRootProps> {
  title: string;
  description: string;
}
