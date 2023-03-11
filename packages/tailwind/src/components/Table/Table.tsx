import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import { Body } from './TableBody';
import { Head } from './TableHead';
import { Header } from './TableHeader';
import { Row } from './TableRow';
import { Col } from './TableCol';
import type { ReactNode } from 'react';

export type TableProps = { children?: ReactNode };

const useStyles = createStyles({
  root: {
    base: [
      'w-full',
      'border-collapse',
      'bg-white',
      'text-left',
      'text-sm',
      'text-gray-500',
    ],
  },
});

const Table = forwardRef<TableProps, 'table'>((props, ref) => {
  const { children, as: Component = 'table', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(
  Table,
  { Head, Body, Header, Row, Col },
  'Table'
);
