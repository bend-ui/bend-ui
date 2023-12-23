import { createComponent, forwardRef } from '@particles/primitives';
import useStyles from './Level.styles';
import type { ReactNode } from 'react';

export interface LevelProps {
  children?: ReactNode;
}

const Level = forwardRef<'div', LevelProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(Level, {});
