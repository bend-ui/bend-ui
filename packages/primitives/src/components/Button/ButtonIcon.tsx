import { forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export interface ButtonIconProps {
  children?: ReactNode;
}

export const Icon = forwardRef<'div', ButtonIconProps>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
