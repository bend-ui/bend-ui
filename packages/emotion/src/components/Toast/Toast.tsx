import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Toast.styles';

interface ToastProps {
  variant?: 'solid' | 'outline';
}

const Toast = forwardRef<ToastProps, 'div'>((props, ref) => {
  const { children, as = 'div', ...rest } = useDefaultProps('Toast', props);
  const { styles } = useStyles();
  return (
    <Box as={as} ref={ref} className={styles.root} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Toast);
