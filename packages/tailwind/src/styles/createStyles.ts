import { cva } from 'class-variance-authority';
import { cn } from './cn';
import type { CxOptions } from 'class-variance-authority';

interface ClassesObject {
  base: CxOptions;
  variants?: any;
  defaultVariants?: any;
}

interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
}

export const createStyles = <Key extends string = string>(
  cssObject: Record<Key, ClassesObject>
) => {
  const useStyles = (variants = {}, options: UseStylesOptions<Key> = {}) => {
    const classes = Object.fromEntries(
      Object.keys(cssObject).map((key) => {
        const config = cssObject[key];

        const compiledStyles = cva(config.base, {
          variants: config.variants,
          defaultVariants: config.defaultVariants,
        })(variants);

        const mergedStyles = cn(compiledStyles, options?.classNames?.[key]);

        return [key, mergedStyles];
      })
    );

    return {
      classes,
      cn,
    };
  };

  return useStyles;
};
