import { createComponent } from '../../utils';
import { MenuButton } from './MenuButton';
import { MenuProvider } from './MenuContext';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { useMenu } from './useMenu';
import type { UseMenuProps } from './useMenu';
import type { ReactNode } from 'react';

export type MenuProps = UseMenuProps & { children?: ReactNode };

const Root = (props: MenuProps) => {
  const { children, placement = 'bottom-start', ...rest } = props;
  const context = useMenu({ placement, ...rest });

  return <MenuProvider value={context}>{children}</MenuProvider>;
};

export default createComponent(
  Root,
  {
    Root,
    Button: MenuButton,
    List: MenuList,
    Item: MenuItem,
  },
  'Menu'
);
