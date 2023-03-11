import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export type FormControlRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<FormControlRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'FormControl');
