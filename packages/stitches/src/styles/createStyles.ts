import { css, CSS } from './';

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  name?: string;
  theme?: any;
}

export const createStyles = <Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((params: Params) => Record<Key, CSS>)
    | Record<Key, CSS>
) => {
  const getCssObject =
    typeof getCssObjectOrCssObject === 'function'
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  const useStyles = (params: Params, options?: UseStylesOptions<Key>) => {
    const cssObject = getCssObject(params);

    const themeStyles = options?.theme?.components?.[options.name];

    const classes = Object.fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = css(
          cssObject[key],
          themeStyles?.[key] || {}
        )(params);
        return [key, mergedStyles.toString()];
      })
    ) as Record<Key, string>;

    return {
      styles: classes,
    };
  };

  return useStyles;
};
