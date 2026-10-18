import type { SlotRecipeComponent } from '@bend-ui/core';
import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';
import { table } from '@bend-ui/styled-system/recipes';
import * as React from 'react';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createSlotRecipeContext(table);

const TableRoot: SlotRecipeComponent<'table', (typeof table)['__type']> =
  withProvider(styled('table'), 'root');
const TableCaption: SlotRecipeComponent<'caption'> = withContext(
  styled('caption'),
  'caption',
);
const TableHeader: SlotRecipeComponent<'thead'> = withContext(
  styled('thead'),
  'header',
);
const TableBody: SlotRecipeComponent<'tbody'> = withContext(
  styled('tbody'),
  'body',
);
const TableFooter: SlotRecipeComponent<'tfoot'> = withContext(
  styled('tfoot'),
  'footer',
);
const TableRow: SlotRecipeComponent<'tr'> = withContext(styled('tr'), 'row');
const TableHead: SlotRecipeComponent<'th'> = withContext(styled('th'), 'head');
const TableHeaderCell: SlotRecipeComponent<'th'> = withContext(
  styled('th'),
  'headerCell',
);
const TableCell: SlotRecipeComponent<'td'> = withContext(styled('td'), 'cell');

export interface TableProps extends ComponentProps<typeof TableRoot> {
  children?: React.ReactNode;
}

const Component = (props: TableProps) => {
  return <TableRoot {...props} />;
};

Object.assign(Component, { displayName: 'Table' });

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
