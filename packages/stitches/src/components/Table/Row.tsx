import { forwardRef } from '@particles/primitives';

export const Row = forwardRef((props, ref) => {
  const { children } = props;
  return <tr ref={ref}>{children}</tr>;
});
