import React from 'react';
import { forwardRef } from '../../utils/';

export type LevelProps = {
  children?: React.ReactNode;
};

const Level = forwardRef<LevelProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

Level.displayName = 'Level';

export default Level;
