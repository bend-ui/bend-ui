import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

const SearchInput = forwardRef<ComboBoxRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface ComboBoxRootProps {
  children?: ReactNode;
}

const Root = forwardRef<ComboBoxRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Input: SearchInput }, 'ComboBox');
