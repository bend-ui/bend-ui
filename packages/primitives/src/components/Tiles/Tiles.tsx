import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';

export type TilesProps = { children?: ReactNode };

const Root = forwardRef<TilesProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root }, 'Tiles');
