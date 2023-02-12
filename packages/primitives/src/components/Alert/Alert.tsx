import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';

export type AlertProps = {
  children?: ReactNode;
};

const Root = forwardRef<AlertProps, 'div'>((props, ref) => (
  <div ref={ref} role="alert" {...props} />
));

export default createComponent(Root, { Root }, 'Alert');
