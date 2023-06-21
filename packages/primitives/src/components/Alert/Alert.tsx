import { createComponent, forwardRef } from '../../utils';
import { useAlert } from './useAlert';
import type { ReactNode } from 'react';

export interface AlertProps {
  children?: ReactNode;
}

const Root = forwardRef<AlertProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { getAlertProps } = useAlert();
  return (
    <Component ref={ref} {...getAlertProps()} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'Alert');
