import { splitCssProps } from '@particles/styled-system/jsx';
import type { Props, Recipe } from './types';

export const extractProps = <P extends Props, R extends Recipe<P>>(
  props: P,
  recipe: R,
) => {
  type CssResult = ReturnType<typeof splitCssProps<P>>;
  const [cssProps, otherProps] = splitCssProps(props) as CssResult;
  const { css: cssProp, ...styleProps } = cssProps;
  const [variantProps, localProps] = recipe.splitVariantProps(otherProps as P);

  return { cssProp, styleProps, variantProps, localProps };
};
