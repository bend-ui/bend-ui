import { cx } from '@particles/styled-system/css';
import { level } from '@particles/styled-system/patterns';
import { createPolymorphicComponent } from '@particles/primitives';
import { forwardRef } from 'react';
import type { ElementType, ReactNode } from 'react';

export interface LevelProps {
  as?: ElementType;
  className: HTMLElement['className'];
  children?: ReactNode;
}

const Level = forwardRef<HTMLDivElement, LevelProps>((props, ref) => {
  const { children, className, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} className={cx(level(), className)} {...rest}>
      {children}
    </Component>
  );
});

Level.displayName = 'Level';

export default createPolymorphicComponent<'div', LevelProps>(Level);
