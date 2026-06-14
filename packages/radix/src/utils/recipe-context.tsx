import { cx } from '@bend-ui/styled-system/css';
import { forwardRef } from 'react';
import type {
  ComponentProps,
  ElementType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
} from 'react';
import type {
  SystemStyleObject,
  RecipeVariantFn,
} from '@bend-ui/styled-system/types';

type AnyProps = Record<string, unknown>;
type Recipe = RecipeVariantFn<
  Record<string, Record<string, SystemStyleObject>>
> & {
  splitVariantProps: (props: AnyProps) => [Record<string, unknown>, AnyProps];
};

export type ComponentWithRecipe<
  T extends ElementType,
  V extends AnyProps = AnyProps,
> = ForwardRefExoticComponent<ComponentProps<T> & V>;

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
  ) => {
    const WrappedComponent = forwardRef<unknown, PropsWithoutRef<Props>>(
      (props, ref) => {
        const [variantProps, elementProps] = recipe.splitVariantProps(props);
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
            {...elementProps}
          />
        );
      },
    );

    WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
    return WrappedComponent;
  };

  /**
   * Wraps child components with data-part attributes
   */
  const withPart = <Props extends AnyProps>(
    Component: ComponentType,
    part: string,
  ) => {
    const WrappedComponent = forwardRef<unknown, PropsWithoutRef<Props>>(
      (props, ref) => {
        const { className, ...rest } = props;
        const Comp = Component as ElementType;
        return (
          <Comp
            ref={ref}
            className={className as string | undefined}
            data-part={part}
            {...rest}
          />
        );
      },
    );

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
) => {
  const { withProvider } = createRecipeContext(recipe);
  return withProvider<Props>(Component, part);
};

export const withParts = <Props extends AnyProps>(
  Component: ComponentType,
  part: string,
) => {
  const { withPart } = createRecipeContext({} as Recipe);
  return withPart<Props>(Component, part);
};
