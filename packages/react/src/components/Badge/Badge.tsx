import { badge } from '@particles/styled-system/recipes';
import { cx } from '@particles/styled-system/css';
import { forwardRef } from 'react';
import type { BadgeProps } from './Badge.types';

const Root = forwardRef<HTMLDivElement, BadgeProps>(function Root(props, ref) {
  const { children, className, palette, ...rest } = props;
  const recipe = badge({ palette });
  return (
    <div ref={ref} className={cx(recipe.root, className)} {...rest}>
      {children}
    </div>
  );
});

Root.displayName = 'Badge';

export const Badge = Object.assign(Root, {});
