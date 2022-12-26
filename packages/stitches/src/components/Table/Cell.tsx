import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import useStyles from './Table.styles';

export const Cell = forwardRef((props, ref) => {
  const { children } = props;
  const { styles } = useStyles();

  return (
    <td ref={ref} className={clsx([styles.cell])}>
      {children}
    </td>
  );
});
