import { createComponent, forwardRef } from '@particles/primitives';
import useStyles from './Level.styles';
import type { ReactNode } from 'react';

export type LevelProps = {
  children?: ReactNode;
};

const Level = forwardRef<LevelProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(Level, {}, 'Level');
