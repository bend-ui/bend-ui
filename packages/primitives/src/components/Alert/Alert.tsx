import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export type AlertProps = {
  children?: ReactNode;
};

const Root = forwardRef<AlertProps, 'div'>((props, ref) => (
  <div ref={ref} role="alert" {...props} />
));

export default createComponent(Root, { Root }, 'Alert');
