import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Row } from './Row';
import { Column } from './Column';
import { Cell } from './Cell';
import { Footer } from './Footer';
import useStyles from './Table.styles';

export type TableProps = {
  children?: ReactNode;
  withBorders?: boolean;
} & ComponentPropsWithoutRef<'table'>;

const Table = forwardRef<TableProps, 'table'>((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();
  return (
    <table ref={ref} className={clsx([styles.root])}>
      {children}
    </table>
  );
});

export default Object.assign(Table, {
  Header,
  Column,
  Body,
  Row,
  Cell,
  Footer,
});
