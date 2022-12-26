import { forwardRef } from '@particles/primitives';

export const Footer = forwardRef((props, ref) => {
  const { children } = props;
  return <tfoot ref={ref}>{children}</tfoot>;
});
