import { forwardRef } from '@particles/primitives';
import { alert } from '@particles/panda-system/recipes';
import { cx } from '@particles/panda-system/css';
import type { AlertVariantProps } from '@particles/panda-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  palette?: AlertVariantProps['palette'];
  variant?: AlertVariantProps['variant'];
}

const Root = forwardRef<'div', AlertProps>((props, ref) => {
  const {
    children,
    className,
    palette = 'info',
    variant = 'outline',
    ...rest
  } = props;
  const recipe = alert({ palette, variant });
  return (
    <div ref={ref} className={cx(recipe.root, className)} {...rest}>
      {children}
    </div>
  );
});

export const Alert = Object.assign(Root, {});
