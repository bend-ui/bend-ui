import { ReactNode } from 'react';
import { forwardRef } from '@particles/primitives';

type DropdownProps = { children?: ReactNode };

const Dropdown = forwardRef<DropdownProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Object.assign(Dropdown, {
  Button: null,
  Trigger: null,
  Menu: null,
  Item: null,
});
