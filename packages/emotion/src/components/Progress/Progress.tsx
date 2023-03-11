import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Progress.styles';
import type { DefaultComponentProps } from '../../types';

type ProgressProps = DefaultComponentProps & { value: number };

const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const {
    as = 'div',
    value = 0,
    'aria-label': ariaLabel,
    ...rest
  } = useDefaultProps('Progress', props);
  const { styles } = useStyles();
  return (
    <Box as={as} ref={ref} className={styles.root} {...rest}>
      <div
        className={styles.bar}
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-label={ariaLabel}
        style={{ width: `${value}%` }}
      />
    </Box>
  );
});

export default createComponent(Progress);
