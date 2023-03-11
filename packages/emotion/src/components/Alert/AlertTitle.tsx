import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Alert.styles';
import type { DefaultComponentProps } from '../../types';

export type AlertTitleProps = DefaultComponentProps;

export const AlertTitle = forwardRef<AlertTitleProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = props;
  const { styles } = useStyles({}, { name: 'AlertTitle' });

  return (
    <Box as={as} ref={ref} className={clsx(styles.root)} {...rest}>
      {children}
    </Box>
  );
});
