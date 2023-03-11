import { createComponent, forwardRef } from '../../utils';
import { Icon } from './ButtonIcon';
import type { ReactNode } from 'react';

export interface ButtonRootProps {
  children?: ReactNode;
}

const Root = forwardRef<ButtonRootProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Icon }, 'Button');
