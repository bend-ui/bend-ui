'use client';

import { cx } from '@bend-ui/styled-system/css';
import { styled } from '@bend-ui/styled-system/jsx';
import type {
  HTMLStyledProps,
  JsxStyleProps,
  RecipeVariantFn,
  SystemStyleObject,
} from '@bend-ui/styled-system/types';
import type {
  ComponentProps,
  ElementType,
  JSX,
  ReactElement,
  ReactNode,
} from 'react';

type AnyProps = object;
type Recipe = RecipeVariantFn<
  Record<string, Record<string, SystemStyleObject>>
> & {
  splitVariantProps: (props: AnyProps) => [Record<string, unknown>, AnyProps];
};

type ComponentType = ElementType & {
  displayName?: string;
  name?: string;
};

export type ComponentWithRecipe<
  T extends ElementType,
  V extends AnyProps = AnyProps,
> = (props: ComponentProps<T> & V) => ReactElement;

export interface PolymorphicProps {
  asChild?: boolean;
}

export type HTMLBendUIProps<T extends keyof JSX.IntrinsicElements> =
  HTMLStyledProps<T> & PolymorphicProps & { children?: ReactNode };

export const bend = styled as {
  [E in keyof JSX.IntrinsicElements]: (
    props: HTMLBendUIProps<E>,
  ) => ReactElement | null;
} & ((component: ElementType) => ElementType);

export const createRecipeContext = (recipe: Recipe) => {
  const withProvider = <Props extends AnyProps>(
    Component: ComponentType,
    part: string,
    defaultProps?: Partial<Props>,
  ) => {
    const StyledComponent = styled(Component);
    const WrappedComponent = (props: Props) => {
      const { ref, ...rest } = props as Record<string, unknown>;
      const [variantProps, elementProps] = recipe.splitVariantProps(
        rest as Record<string, unknown>,
      );
      const recipeClass = (
        recipe as unknown as (props: Record<string, unknown>) => string
      )(variantProps);
      const classes = cx(
        recipeClass,
        (defaultProps as Record<string, unknown> | undefined)?.['className'] as
          | string
          | undefined,
        (elementProps as Record<string, unknown>)['className'] as
          | string
          | undefined,
      );
      const ComponentToRender = StyledComponent as ElementType;

      return (
        <ComponentToRender
          ref={ref}
          data-part={part}
          {...defaultProps}
          {...elementProps}
          className={classes}
        />
      );
    };

    WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
    return WrappedComponent;
  };

  const withPart = <Props extends AnyProps>(
    Component: ComponentType,
    part: string,
    defaultProps?: Partial<Props>,
  ) => {
    const StyledComponent = styled(Component);
    const WrappedComponent = (props: Props) => {
      const { ref, className, ...rest } = props as Record<string, unknown>;
      const ComponentToRender = StyledComponent as ElementType;

      return (
        <ComponentToRender
          ref={ref}
          data-part={part}
          {...defaultProps}
          {...rest}
          className={cx(
            (defaultProps as Record<string, unknown> | undefined)?.[
              'className'
            ] as string | undefined,
            className as string | undefined,
          )}
        />
      );
    };

    WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
    return WrappedComponent;
  };

  return { withProvider, withPart };
};

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
  const StyledComponent = styled(Component);
  const WrappedComponent = (props: Props) => {
    const { ref, className, ...rest } = props as Record<string, unknown>;
    const ComponentToRender = StyledComponent as ElementType;

    return (
      <ComponentToRender
        ref={ref}
        data-part={part}
        {...defaultProps}
        {...rest}
        className={cx(
          (defaultProps as Record<string, unknown> | undefined)?.[
            'className'
          ] as string | undefined,
          className as string | undefined,
        )}
      />
    );
  };

  WrappedComponent.displayName = `${Component.displayName || Component.name || 'Component'}_${part}`;
  return WrappedComponent;
};

export type { JsxStyleProps };
