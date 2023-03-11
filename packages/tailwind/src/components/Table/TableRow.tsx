import { forwardRef } from '@particles/primitives';
import type { ReactNode } from 'react';

export type TableRowProps = { children?: ReactNode };

export const Row = forwardRef<TableRowProps, 'tr'>((props, ref) => {
  const { children, as: Component = 'tr', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
