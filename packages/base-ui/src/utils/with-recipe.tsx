import { cx } from '@particles/styled-system/css';
import { styled } from '@particles/styled-system/jsx';
import type { ElementType } from 'react';

type Props = Record<string, unknown>;

interface Recipe {
  (props?: Props): string;
  splitVariantProps: (props: Props) => [Props, Props];
}

export function withRecipe<P extends { className?: string | undefined }>(
  Component: ElementType,
  recipe: Recipe,
  part: string,
) {
  const StyledComponent = styled(Component);

  const FinalComponent = (props: P) => {
    const { className, part, ...otherProps } = props;
    const [variantProps, rest] = recipe.splitVariantProps(otherProps);
    const styles = recipe(variantProps);

    return (
      <StyledComponent
        className={cx(styles, className)}
        data-part={part}
        {...rest}
      />
    );
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  FinalComponent.displayName = Component.displayName || Component.name;

  return FinalComponent;
}
