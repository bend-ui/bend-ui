import { forwardRef } from '@particles/primitives';
import { cx } from '@particles/styled-system/css';
import { table } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {}

const Cell = forwardRef<'tr', TableCellProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <td ref={ref} className={cx(recipe.cell, className)} {...rest}>
      {children}
    </td>
  );
});

export interface TableHeadProps extends ComponentPropsWithoutRef<'th'> {}

const Head = forwardRef<'tr', TableHeadProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <th ref={ref} className={cx(recipe.head, className)} {...rest}>
      {children}
    </th>
  );
});

export interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {}

const Row = forwardRef<'tr', TableRowProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <tr ref={ref} className={cx(recipe.row, className)} {...rest}>
      {children}
    </tr>
  );
});

export interface TableHeaderProps extends ComponentPropsWithoutRef<'thead'> {}

const Header = forwardRef<'thead', TableHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <thead ref={ref} className={cx(recipe.header, className)} {...rest}>
      {children}
    </thead>
  );
});

export interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

const Body = forwardRef<'tbody', TableBodyProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <tbody ref={ref} className={cx(recipe.body, className)} {...rest}>
      {children}
    </tbody>
  );
});

export interface TableFooterProps extends ComponentPropsWithoutRef<'tfoot'> {}

const Footer = forwardRef<'tfoot', TableFooterProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <tfoot ref={ref} className={cx(recipe.footer, className)} {...rest}>
      {children}
    </tfoot>
  );
});

export interface TableProps extends ComponentPropsWithoutRef<'table'> {}

const Root = forwardRef<'table', TableProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const recipe = table();
  return (
    <table ref={ref} className={cx(recipe.root, className)} {...rest}>
      {children}
    </table>
  );
});

export const Table = Object.assign(Root, {
  Root,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
});
