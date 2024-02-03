/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  type ComponentType,
  createContext,
  forwardRef,
  useContext,
} from 'react';

type AnyProps = Record<string, unknown>;

interface AnyRecipe {
  (props?: AnyProps): Record<string, string>;
  splitVariantProps: (props: AnyProps) => any;
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<Record<string, string> | null>(null);
  const useStyleContext = () => useContext(StyleContext);

  const withProvider = <T extends object>(
    Component: ComponentType<T>,
    slot?: string,
  ) => {
    const Comp = forwardRef((props: T & Parameters<R>[0], ref) => {
      if (!recipe) return null;

      const [variantProps, rest] = recipe.splitVariantProps(props);
      const classes = recipe(variantProps);

      return (
        <StyleContext.Provider value={classes}>
          <Component ref={ref} className={classes?.[slot ?? '']} {...rest} />
        </StyleContext.Provider>
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  const withContext = <T extends object>(
    Component: ComponentType<T>,
    part?: string,
  ) => {
    if (!part) return Component;

    const Comp = forwardRef((props: T, ref) => {
      const classes = useStyleContext();
      return (
        <Component ref={ref} className={classes?.[part ?? '']} {...props} />
      );
    });

    Comp.displayName = Component.displayName || Component.name;

    return Comp;
  };

  return {
    withProvider,
    withContext,
    useStyleContext,
  };
};
