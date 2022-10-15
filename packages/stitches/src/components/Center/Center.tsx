import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Center.styles';

const Center = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={clsx([styles.root])} {...rest}>
      {children}
    </Box>
  );
});

export default Center;
