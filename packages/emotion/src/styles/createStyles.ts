import { useTheme } from '@emotion/react';
import deepmerge from 'deepmerge';

import createEmotion from '@emotion/css/create-instance';
import { css, CSSObject } from './system';

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css: cssClass,
  sheet,
  cache,
} = createEmotion({
  key: 'ds',
});

type UseStylesOptions = {
  /** The name of the component */
  name: string;
  unstyled?: boolean;
};

export const createStyles = <
  Key extends string = string,
  Params = Record<string, unknown>
>(
  cssObjectOrFn:
    | ((params: Params) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) => {
  const getCssObject =
    typeof cssObjectOrFn === 'function' ? cssObjectOrFn : () => cssObjectOrFn;

  const useStyles = (params?: Params, options?: UseStylesOptions) => {
    const theme = useTheme();
    const cssObject = getCssObject({ theme, ...params });

    const componentThemeStyles = theme.components?.[options?.name]?.['styles'];
    if (options?.name)
      console.log(`Theme styles for ${options?.name}: ${componentThemeStyles}`);

    const classes = Object.fromEntries(
      Object.keys(cssObject).map((key) => {
        const { variants = {}, ...baseStyles } = cssObject[key];

        const variantsStyles = Object.keys(variants).reduce(
          (acc, key) => deepmerge(acc, variants?.[key]?.[params?.[key]] || {}),
          {}
        );

        const compiledStyles = css({ ...baseStyles, ...variantsStyles })();
        return [
          key,
          cssClass(compiledStyles, { label: `${options?.name}-${key}` }),
        ];
      })
    ) as Record<Key, string>;

    return { styles: classes };
  };

  return useStyles;
};
