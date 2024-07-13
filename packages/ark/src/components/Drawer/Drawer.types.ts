import type { DrawerVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { DialogRootProps } from '@ark-ui/react';

export interface DrawerProps
  extends Assign<JsxStyleProps, DialogRootProps>,
    DrawerVariantProps {
  title?: string;
  description?: string;
}
