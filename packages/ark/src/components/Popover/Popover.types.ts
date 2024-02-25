import type { PopoverVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { PopoverRootProps } from '@ark-ui/react';

export interface PopoverProps
  extends Assign<JsxStyleProps, PopoverRootProps>,
    PopoverVariantProps {}
