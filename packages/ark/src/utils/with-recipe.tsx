import { cx } from '@particles/styled-system/css';
import { styled } from '@particles/styled-system/jsx';
import type { ElementType } from 'react';

type Props = Record<string, unknown>;

interface Recipe {
  (props?: Props): any;
  splitVariantProps: (props: Props) => [Props, Props];
}

export function withRecipe<P extends { className?: string | undefined }>(
  Component: ElementType,
  recipe: Recipe,
) {
  const StyledComponent = styled(Component);

  const FinalComponent = (props: P) => {
    const { className, ...otherProps } = props;
    const [variantProps, rest] = recipe.splitVariantProps(otherProps);
    const styles = recipe(variantProps);

    return <StyledComponent className={cx(styles, className)} {...rest} />;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  FinalComponent.displayName = Component.displayName || Component.name;

  return FinalComponent;
}
