import { createComponent, forwardRef } from '../../utils/';
import type React from 'react';

export type LevelRootProps = {
  children?: React.ReactNode;
};

const Root = forwardRef<LevelRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'Level');
