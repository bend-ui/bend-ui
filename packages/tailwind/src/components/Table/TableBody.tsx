import { forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TableBodyProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: [
      'divide-y',
      'divide-surface-accent',
      'border-t',
      'border-surface-accent',
    ],
  },
});

export const Body = forwardRef<TableBodyProps, 'tbody'>((props, ref) => {
  const { children, as: Component = 'tbody', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});
