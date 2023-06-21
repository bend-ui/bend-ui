import { forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TableHeaderProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: ['px-6', 'py-4', 'font-medium'],
  },
});

export const Header = forwardRef<TableHeaderProps, 'th'>((props, ref) => {
  const { children, as: Component = 'th', className, ...rest } = props;

  const { classes, cn } = useStyles();

  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});
