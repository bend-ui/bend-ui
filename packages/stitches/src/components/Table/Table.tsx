import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import useStyles from './Table.styles';

const Table = forwardRef((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();
  return (
    <table ref={ref} className={clsx([styles.root])}>
      {children}
    </table>
  );
});

const Header = forwardRef((props, ref) => {
  const { children } = props;
  return (
    <thead ref={ref}>
      <tr>{children}</tr>
    </thead>
  );
});

const Column = forwardRef((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();

  return (
    <th ref={ref} className={clsx([styles.column])}>
      {children}
    </th>
  );
});

const Body = forwardRef((props, ref) => {
  const { children } = props;
  return <tbody ref={ref}>{children}</tbody>;
});

const Row = forwardRef((props, ref) => {
  const { children } = props;
  return <tr ref={ref}>{children}</tr>;
});

const Cell = forwardRef((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();

  return (
    <td ref={ref} className={clsx([styles.cell])}>
      {children}
    </td>
  );
});

const Footer = forwardRef((props, ref) => {
  const { children } = props;
  return <tfoot ref={ref}>{children}</tfoot>;
});

export default Object.assign(Table, {
  Header,
  Column,
  Body,
  Row,
  Cell,
  Footer,
});
