import type { SelectVariantProps } from '@particles/styled-system/recipes';
import type { Assign, JsxStyleProps } from '@particles/styled-system/types';
import type { CollectionItem, SelectRootProps } from '@ark-ui/react';

export interface SelectProps<T extends CollectionItem>
  extends Assign<JsxStyleProps, SelectRootProps<T>>,
    SelectVariantProps {
      options: T[];
    }
