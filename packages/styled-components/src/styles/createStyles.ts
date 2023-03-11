import { useTheme, useThemeStyles } from '../theme';
import { isFunction } from '../utils';
import type { CSSObject } from 'system-props';

interface UseStylesOptions {
  overrides?: any;
  name?: string;
}

export const createStyles = <Key extends string>(
  getCssObjectOrCssObject:
    | ((params) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) => {
  const useStyles = (params = {}, options: UseStylesOptions = {}) => {
    const { overrides } = options;
    const theme = useTheme();
    const themeStyles = useThemeStyles()[options?.name];

    const getCssObject = isFunction(getCssObjectOrCssObject)
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

    const cssObject = getCssObject(params);

    const styles = Object.keys(cssObject).reduce((acc, key) => {
      acc[key] = {
        ...cssObject[key],
        ...overrides?.[key],
        ...themeStyles?.[key],
      };

      return acc;
    }, {});

    return {
      styles: styles as Record<Key, any>,
      theme,
    };
  };

  return useStyles;
};
