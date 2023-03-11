import { forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export type TableColProps = { children?: ReactNode };

const useStyles = createStyles({
  root: {
    base: ['px-6', 'py-4', 'font-medium', 'text-gray-900'],
  },
});

export const Col = forwardRef<TableColProps, 'td'>((props, ref) => {
  const { children, as: Component = 'td', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});
