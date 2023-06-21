import type { ReactNode } from 'react';

interface MenuItemProps {
  children?: ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
