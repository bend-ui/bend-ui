import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';

export type SelectRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<SelectRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'Select');
