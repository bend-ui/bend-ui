import { createComponent, forwardRef } from '../../utils';
import { visuallyHiddenStyle } from './VisuallyHidden.styles';
import type { ReactNode } from 'react';

interface VisuallyHiddenProps {
  children?: ReactNode;
}

const VisuallyHidden = forwardRef<VisuallyHiddenProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', style, ...rest } = props;
  return (
    <Component ref={ref} style={{ ...visuallyHiddenStyle, ...style }} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(VisuallyHidden, {}, 'VisuallyHidden');
