import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { ToastRootProps } from '@ark-ui/react';
import type { ToastImplPrivateProps } from '@radix-ui/react-toast';

export interface ToastProps
  extends Assign<JsxStyleProps, ToastRootProps>,
    ToastImplPrivateProps {
  title: string;
  description: string;
}
