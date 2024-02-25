import type { AvatarVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { AvatarRootProps } from '@ark-ui/react';

export interface AvatarProps
  extends Assign<JsxStyleProps, AvatarRootProps>,
    AvatarVariantProps {
  fallback?: string;
  src?: string;
}
