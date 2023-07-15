import { cx } from '@particles/panda-system/css';
import { level } from '@particles/panda-system/patterns';
import { forwardRef } from '@particles/primitives';
import type { ReactNode } from 'react';

export interface LevelProps {
  children?: ReactNode;
}

const Level = forwardRef<LevelProps, 'div'>((props, ref) => {
  const { children, className, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} className={cx(level(), className)} {...rest}>
      {children}
    </Component>
  );
});

export default Level;
