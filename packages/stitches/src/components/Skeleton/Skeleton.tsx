import { Box } from '../Box';

export interface SkeletonProps {
  children?: React.ReactNode;
}

const Skeleton = (props: SkeletonProps) => {
  const { children } = props;
  return <Box>{children}</Box>;
};

export default Object.assign(Skeleton, {});
