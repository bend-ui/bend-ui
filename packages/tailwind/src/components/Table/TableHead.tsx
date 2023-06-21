import { forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TableHeadProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: ['bg-surface-accent'],
  },
});

export const Head = forwardRef<TableHeadProps, 'thead'>((props, ref) => {
  const { children, as: Component = 'thead', className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});
