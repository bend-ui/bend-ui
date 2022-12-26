import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import useStyles from './Table.styles';

export const Column = forwardRef((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();

  return (
    <th ref={ref} className={clsx([styles.column])}>
      {children}
    </th>
  );
});
