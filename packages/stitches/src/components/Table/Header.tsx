import { forwardRef } from '@particles/primitives';

export const Header = forwardRef((props, ref) => {
  const { children } = props;
  return (
    <thead ref={ref}>
      <tr>{children}</tr>
    </thead>
  );
});
