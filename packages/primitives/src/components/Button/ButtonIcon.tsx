import { forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export interface ButtonIconProps {
  children?: ReactNode;
}

export const Icon = forwardRef<ButtonIconProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
