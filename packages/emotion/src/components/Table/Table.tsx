import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Table.styles';
import type { DefaultComponentProps } from '../../types';

type TableRowProps = DefaultComponentProps;

const TableRow = forwardRef<TableRowProps, 'tr'>((props, ref) => {
  const { children, as = 'tr', ...rest } = useDefaultProps('TableRow', props);
  const { styles } = useStyles({}, { name: 'Table' });
  return (
    <Box ref={ref} as={as} className={styles.tr} {...rest}>
      {children}
    </Box>
  );
});

type TableCellProps = DefaultComponentProps;

const TableCell = forwardRef<TableCellProps, 'td'>((props, ref) => {
  const { children, as = 'td', ...rest } = useDefaultProps('TableCell', props);
  const { styles } = useStyles({}, { name: 'Table' });

  return (
    <Box ref={ref} as={as} className={styles.td} {...rest}>
      {children}
    </Box>
  );
});

type TableHeadingProps = DefaultComponentProps;

const TableHeading = forwardRef<TableHeadingProps, 'th'>((props, ref) => {
  const {
    children,
    as = 'th',
    ...rest
  } = useDefaultProps('TableHeading', props);
  const { styles } = useStyles({}, { name: 'Table' });

  return (
    <Box ref={ref} as={as} className={styles.th} {...rest}>
      {children}
    </Box>
  );
});

type TableProps = DefaultComponentProps;

const Table = forwardRef<TableProps, 'table'>((props, ref) => {
  const { children, as = 'table', ...rest } = useDefaultProps('Table', props);
  const { styles } = useStyles({}, { name: 'Table' });

  return (
    <Box ref={ref} as={as} className={styles.table} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Table, {
  Row: TableRow,
  Heading: TableHeading,
  Cell: TableCell,
});
