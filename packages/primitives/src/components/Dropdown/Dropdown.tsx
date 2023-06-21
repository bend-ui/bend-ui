import { useDisclosure } from '../../hooks';
import { createComponent, forwardRef } from '../../utils';
import { DropdownContextProvider, useDropdownContext } from './DropdownContext';
import { useDropdown } from './useDropdown';
import type { UseDropdownProps } from './useDropdown';
import type { ReactNode } from 'react';

export interface DropdownTargetProps {
  children?: ReactNode;
}

const Target = forwardRef<DropdownTargetProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;
  const { getTargetProps } = useDropdownContext();
  return <Component {...getTargetProps(rest, ref)}>{children}</Component>;
});

export interface DropdownMenuProps {
  children?: ReactNode;
}

const Menu = forwardRef<DropdownMenuProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  const { isOpen, getMenuProps } = useDropdownContext();

  if (!isOpen) return null;

  return <Component {...getMenuProps(rest, ref)}>{children}</Component>;
});

export interface DropdownMenuItemProps {
  children?: ReactNode;
}

const MenuItem = forwardRef<DropdownMenuItemProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;

  const { getMenuItemProps } = useDropdownContext();

  return <Component {...getMenuItemProps(rest, ref)}>{children}</Component>;
});

export interface DropdownRootProps extends UseDropdownProps {
  children?: ReactNode;
}

const Root = (props: DropdownRootProps) => {
  const { children, ...rest } = props;

  const context = useDropdown(rest);

  return (
    <DropdownContextProvider value={context}>
      {children}
    </DropdownContextProvider>
  );
};

export default createComponent(
  Root,
  { Root, Target, Menu, MenuItem },
  'Dropdown'
);
