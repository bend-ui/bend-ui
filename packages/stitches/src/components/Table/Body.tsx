import { forwardRef } from '@particles/primitives';

export const Body = forwardRef((props, ref) => {
  const { children } = props;
  return <tbody ref={ref}>{children}</tbody>;
});
