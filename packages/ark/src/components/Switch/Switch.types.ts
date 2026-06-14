import type { SwitchRecipeVariantProps } from '@bend-ui/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@bend-ui/styled-system/types';
import type { SwitchRootProps } from '@ark-ui/react';

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}
