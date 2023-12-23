import { forwardRef } from '@particles/primitives';
import { cx } from '@particles/panda-system/css';
import { divider } from '@particles/panda-system/recipes';
import { Children, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import type { DividerVariantProps } from '@particles/panda-system/recipes';

export interface DividerProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  orientation?: DividerVariantProps['orientation'];
}

const Root = forwardRef<'span', DividerProps>((props, ref) => {
  const { children, className, orientation, ...rest } = props;
  const withContent = Children.count(children) > 0;
  const recipe = divider({ withContent, orientation });
  return (
    <span
      ref={ref}
      className={cx(recipe.root, className)}
      role="separator"
      {...rest}
    >
      {withContent && <span className={recipe.content}>{children}</span>}
    </span>
  );
});

export const Divider = Object.assign(Root, {});
