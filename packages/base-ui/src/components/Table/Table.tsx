import { createStyleContext, styled } from '@bend-ui/styled-system/jsx';
import { table } from '@bend-ui/styled-system/recipes';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(table);

const TableRoot = withProvider(styled('table'), 'root');
const TableCaption = withContext(styled('caption'), 'caption');
const TableHeader = withContext(styled('thead'), 'header');
const TableBody = withContext(styled('tbody'), 'body');
const TableFooter = withContext(styled('tfoot'), 'footer');
const TableRow = withContext(styled('tr'), 'row');
const TableHead = withContext(styled('th'), 'head');
const TableHeaderCell = withContext(styled('th'), 'headerCell');
const TableCell = withContext(styled('td'), 'cell');

export interface TableProps extends ComponentProps<typeof TableRoot> {
  children?: React.ReactNode;
}

const Component = (props: TableProps) => {
  return <TableRoot {...props} />;
};

Component.displayName = 'Table';

export const Table = Object.assign(Component, {
  Root: TableRoot,
  Caption: TableCaption,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
});
