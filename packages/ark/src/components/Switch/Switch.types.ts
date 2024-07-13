import type { SwitchRecipeVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { SwitchRootProps } from '@ark-ui/react';

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}
