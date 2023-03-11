import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

interface BadgeRootProps {
  children?: ReactNode;
}

const Root = forwardRef<BadgeRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

interface BadgeInnerProps {
  children?: ReactNode;
}

const Inner = forwardRef<BadgeInnerProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Inner }, 'Badge');
