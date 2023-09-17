import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

interface BadgeRootProps {
  children?: ReactNode;
}

const Root = forwardRef<'div', BadgeRootProps>((props, ref) => {
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

const Inner = forwardRef<'span', BadgeInnerProps>((props, ref) => {
  const { children, as: Component = 'span', ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Inner });
