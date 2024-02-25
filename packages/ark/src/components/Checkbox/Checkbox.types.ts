import type { CheckboxVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { CheckboxRootProps } from '@ark-ui/react';

export interface CheckboxProps
  extends Assign<JsxStyleProps, CheckboxRootProps>,
    CheckboxVariantProps {}
