import { forwardRef } from '@particles/primitives';
import { cx } from '@particles/styled-system/css';
import { indicator } from '@particles/styled-system/recipes';
import type { IndicatorVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface IndicatorProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  palette?: IndicatorVariantProps['palette'];
  size?: IndicatorVariantProps['size'];
}

const Root = forwardRef<'span', IndicatorProps>((props, ref) => {
  const { children, className, palette, size, ...rest } = props;
  const recipe = indicator({ palette, size });
  return (
    <span ref={ref} className={cx(recipe.root, className)} {...rest}>
      {children}
    </span>
  );
});

Root.displayName = 'Indicator';

export const Indicator = Object.assign(Root, {});
