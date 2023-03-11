import { forwardRef } from '@particles/primitives';
import { useEffect, useState } from 'react';
import { Box } from '../Box';
import useStyles from './Progress.styles';
import type { DefaultComponentProps } from '../../styles';
import type { ReactNode } from 'react';

export type ProgressProps = DefaultComponentProps & {
  children?: ReactNode;
  value?: number;
};

const getConstrainProgress = (value: number) =>
  Math.min(Math.max(value, 0), 100);

const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const { children, value = 0, ...rest } = props;
  const { styles } = useStyles();

  const [constrainedValue, setConstrainedValue] = useState(
    getConstrainProgress(value)
  );

  useEffect(() => {
    setConstrainedValue(getConstrainProgress(value));
  }, [value]);

  return (
    <Box ref={ref} className={styles.container} role="progressbar" {...rest}>
      <div
        className={styles.track}
        style={{ width: `${constrainedValue}%` }}
        aria-valuenow={constrainedValue}
        aria-valuemin={100}
        aria-valuemax={100}
      />
    </Box>
  );
});

export default Object.assign(Progress, {});
