import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';
import { Icon } from './ButtonIcon';

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
