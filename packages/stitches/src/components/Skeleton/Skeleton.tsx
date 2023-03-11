import { createComponent, forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { useDefaultProps } from '../../styles';
import { Box } from '../Box';
import useStyles from './Skeleton.styles';
import type { DefaultComponentProps } from '../../styles';

export type SkeletonProps = DefaultComponentProps & {
  children?: React.ReactNode;
};

const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = useDefaultProps('Skeleton', props);
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Skeleton, {});
