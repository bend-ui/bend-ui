import { splitCssProps } from '@bend-ui/styled-system/jsx';
import type { Props, Recipe } from './types';

type ExtractPropsResult<P extends Props> = {
  cssProp: unknown;
  styleProps: Record<string, unknown>;
  variantProps: P;
  localProps: P;
};

export const extractProps = <P extends Props, R extends Recipe<P>>(
  props: P,
  recipe: R,
): ExtractPropsResult<P> => {
  type CssResult = ReturnType<typeof splitCssProps<P>>;
  const [cssProps, otherProps] = splitCssProps(props) as CssResult;
  const { css: cssProp, ...styleProps } = cssProps;
  const [variantProps, localProps] = recipe.splitVariantProps(otherProps as P);

  return { cssProp, styleProps, variantProps, localProps } as ExtractPropsResult<P>;
};
