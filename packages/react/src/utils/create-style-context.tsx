/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  type ComponentProps,
  createContext,
  createElement,
  type ElementType,
  type JSX,
  useContext,
} from 'react';

type GenericProps = Record<string, unknown>;
interface StyleRecipe {
  (props?: GenericProps): Record<string, string>;
  splitVariantProps: (props: GenericProps) => any;
}
type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>;
type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>;
type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];
type CombineProps<T, U> = Omit<T, keyof U> & U;

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');

export interface ComponentVariants<
  T extends ElementType,
  R extends StyleRecipe,
> {
  (props: CombineProps<ComponentProps<T>, StyleVariantProps<R>>): JSX.Element;
}

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<StyleSlotRecipe<R> | null>(null);

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>,
  ): ComponentVariants<T, R> => {
    const StyledComponent = (props: ComponentProps<T>) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as StyleSlotRecipe<R>;
      return (
        <StyleContext.Provider value={slotStyles}>
          <Component
            {...otherProps}
            className={cx(slotStyles[slot ?? ''], otherProps.className)}
          />
        </StyleContext.Provider>
      );
    };
    StyledComponent.displayName = Component.toString();

    return StyledComponent as unknown as ComponentVariants<T, R>;
  };

  const withContext = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>,
  ): T => {
    if (!slot) return Component;
    const StyledComponent = (props: ComponentProps<T>) => {
      const slotStyles = useContext(StyleContext);
      const { className, ...otherProps } = props;
      return createElement(Component, {
        ...otherProps,
        className: cx(slotStyles?.[slot ?? ''], className),
      });
    };
    StyledComponent.displayName = Component.toString();

    return StyledComponent as unknown as T;
  };

  return {
    withProvider,
    withContext,
  };
};
