import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';

export type SkeletonProps = DefaultComponentProps;

export const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  );
});

Skeleton.displayName = 'Skeleton';
