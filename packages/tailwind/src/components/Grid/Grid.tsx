import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface GridProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: [],
  },
});

const Grid = forwardRef<GridProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Grid, {}, 'Grid');
