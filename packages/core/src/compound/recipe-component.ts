import type { ElementType, JSX } from 'react';
import type {
  Assign,
  AsProps,
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
  UnstyledProps,
} from '@bend-ui/styled-system/types';

/** Named form of Panda's slot component props for portable declarations.
 * Runtime composition stays in Panda's native createSlotRecipeContext.
 */
export interface SlotRecipeComponent<
  T extends ElementType,
  Variants extends object = object,
> {
  (
    props: JsxHTMLProps<
      ComponentProps<T> & UnstyledProps & AsProps,
      Assign<Variants, JsxStyleProps>
    >,
  ): JSX.Element;
  displayName?: string;
}
