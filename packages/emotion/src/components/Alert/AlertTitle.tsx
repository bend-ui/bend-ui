import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Alert.styles';

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
