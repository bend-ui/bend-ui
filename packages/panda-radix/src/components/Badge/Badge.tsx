import { createComponent } from '@particles/primitives';
import { badge } from '@particles/panda-system/recipes';
import { cx } from '@particles/panda-system/css';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

const Root = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = badge();
  return (
    <div ref={ref} className={cx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

Root.displayName = 'Badge';

export const Badge = createComponent(Root);
