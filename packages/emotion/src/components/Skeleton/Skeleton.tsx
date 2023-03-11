import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import type { DefaultComponentProps } from '../../types';

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
