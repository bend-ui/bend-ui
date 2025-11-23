import { cx } from '@particles/styled-system/css';
import type { ComponentProps, ElementType, ReactElement } from 'react';
import type {
  SystemStyleObject,
  RecipeVariantFn,
} from '@particles/styled-system/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;
type Recipe = RecipeVariantFn<
  Record<string, Record<string, SystemStyleObject>>
> & {
  splitVariantProps: (props: AnyProps) => [Record<string, unknown>, AnyProps];
};

export type ComponentWithRecipe<
  T extends ElementType,
  V extends AnyProps = AnyProps,
> = (props: ComponentProps<T> & V) => ReactElement;

type ComponentType = ElementType & {
  displayName?: string;
  name?: string;
};

/**
 * Creates a recipe wrapper that handles both the root component with recipe styles
 * and child components with data-part attributes
 */
export const createRecipeContext = (recipe: Recipe) => {
  /**
   * Wraps the root component with recipe styles
   */
  const withProvider = <Props extends AnyProps>(
    Component: ComponentType,
    part: string,
    defaultProps?: Partial<Props>,
  ) => {
    const WrappedComponent = (props: Props) => {
      const { ref, ...rest } = props;
      const [variantProps, elementProps] = recipe.splitVariantProps(rest);
      // @ts-expect-error Recipe accepts any variant props
      const recipeClass = recipe(variantProps);
      const classes = cx(
        recipeClass as string | undefined,
        elementProps.className as string | undefined,
      );

      const Comp = Component as ElementType;
      return (
        <Comp
          ref={ref}
          className={classes}
          data-part={part}
          {...defaultProps}
          {...elementProps}
        />
      );
    };

    WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
    return WrappedComponent;
  };

  /**
   * Wraps child components with data-part attributes
   */
  const withPart = <Props extends AnyProps>(
    Component: ComponentType,
    part: string,
    defaultProps?: Partial<Props>,
  ) => {
    const WrappedComponent = (props: Props) => {
      const { ref, className, ...rest } = props;
      const Comp = Component as ElementType;
      return (
        <Comp
          ref={ref}
          className={className as string | undefined}
          data-part={part}
          {...defaultProps}
          {...rest}
        />
      );
    };

    WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
    return WrappedComponent;
  };

  return { withProvider, withPart };
};

// Maintain backwards compatibility
export const withRecipe = <Props extends AnyProps>(
  Component: ComponentType,
  recipe: Recipe,
  part: string,
  defaultProps?: Partial<Props>,
) => {
  const { withProvider } = createRecipeContext(recipe);
  return withProvider<Props>(Component, part, defaultProps);
};

export const withParts = <Props extends AnyProps>(
  Component: ComponentType,
  part: string,
  defaultProps?: Partial<Props>,
) => {
  const { withPart } = createRecipeContext({} as Recipe);
  return withPart<Props>(Component, part, defaultProps);
};
