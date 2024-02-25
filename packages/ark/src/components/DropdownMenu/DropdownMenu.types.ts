import type { DropdownMenuVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { MenuRootProps } from '@ark-ui/react';

export interface DropdownMenuProps
  extends Assign<JsxStyleProps, MenuRootProps>,
    DropdownMenuVariantProps {}
