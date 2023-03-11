import { useDisclosure } from '../../hooks';
import { createComponent, forwardRef } from '../../utils';
import { DropdownContextProvider, useDropdownContext } from './DropdownContext';
import { useDropdown } from './useDropdown';
import type { ReactNode } from 'react';

export type DropdownRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<DropdownRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  const { isOpen, toggle } = useDisclosure();

  const context = useDropdown({
    isOpen,
    onOpenChange: toggle,
  });

  return (
    <DropdownContextProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </DropdownContextProvider>
  );
});

export type DropdownTargetProps = {
  children?: ReactNode;
};

const Target = forwardRef<DropdownTargetProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;
  const { isOpen, onOpenChange, getReferenceProps } = useDropdownContext();
  return (
    <Component
      ref={ref}
      onClick={() => onOpenChange(!isOpen)}
      {...getReferenceProps()}
      {...rest}
    >
      {children}
    </Component>
  );
});

export type DropdownMenuProps = {
  children?: ReactNode;
};

const Menu = forwardRef<DropdownMenuProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;

  const { isOpen, getDropdownProps } = useDropdownContext();

  return (
    isOpen && (
      <Component ref={ref} {...getDropdownProps()} {...rest}>
        {children}
      </Component>
    )
  );
});

export type DropdownMenuItemProps = {
  children?: ReactNode;
};

const MenuItem = forwardRef<DropdownMenuItemProps, 'button'>((props, ref) => {
  const { children, as: Component = 'button', ...rest } = props;

  const { getItemProps } = useDropdownContext();

  return (
    <Component ref={ref} {...getItemProps} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(
  Root,
  { Root, Target, Menu, MenuItem },
  'Dropdown'
);
