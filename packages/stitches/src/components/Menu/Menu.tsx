import { Children, cloneElement, isValidElement } from 'react';
import { createContext, forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { Box } from '../Box';
import { Panel } from '../Panel';
import { Divider } from '../Divider';
import { Transition } from '../Transition';
import useStyles from './Menu.styles';
import { useMenu } from './useMenu';
import type { DefaultComponentProps } from '../../styles';
import type { PropsWithChildren } from 'react';

interface DropdownMenuContextProps {
  isOpen: boolean;
  getTriggerProps: any;
  getMenuProps: any;
  getItemProps: any;
}

const [DropdownMenuContextProvider, useMenuContext] =
  createContext<DropdownMenuContextProps>('DropdownMenu');

export type DropdownMenuProps = {
  children?: React.ReactNode;
  isOpen?: boolean;
  isLazy?: boolean;
} & DefaultComponentProps;

export const DropdownMenu = forwardRef<DropdownMenuProps, 'div'>(
  (props, ref) => {
    const { children, sx, ...rest } = props;
    const context = useMenu();

    return (
      <DropdownMenuContextProvider value={context}>
        <Box ref={ref} sx={sx} {...rest}>
          {children}
        </Box>
      </DropdownMenuContextProvider>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';

interface DropdownMenuTrigger {
  children: React.ReactNode;
}

const Trigger = (props: DropdownMenuTrigger) => {
  const { children } = props;
  const child = Children.only(children);
  const { getTriggerProps } = useMenuContext();

  return isValidElement(child) && cloneElement(child, getTriggerProps());
};

Trigger.displayName = 'DropdownMenu.Trigger';

export type DropdownMenuListProps = PropsWithChildren<DefaultComponentProps>;

const List = (props: DropdownMenuListProps) => {
  const { children, sx, ...rest } = props;
  const { styles } = useStyles();
  const { isOpen, getMenuProps } = useMenuContext();

  return (
    <Transition isMounted={isOpen}>
      {(transitionStyles) => (
        <Panel
          className={clsx(styles.list)}
          {...getMenuProps({ style: transitionStyles })}
          {...rest}
        >
          {children}
        </Panel>
      )}
    </Transition>
  );
};

List.displayName = 'DropdownMenu.List';

export type DropdownMenuItemProps = {
  icon?: React.ComponentType<any>;
} & DefaultComponentProps;

const Item = forwardRef<DropdownMenuItemProps, 'button'>((props, ref) => {
  const { children, icon: Icon, sx, onClick, ...rest } = props;
  const { styles } = useStyles();
  const { getItemProps } = useMenuContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <Box
      as="button"
      ref={ref}
      className={clsx(styles.item)}
      onClick={handleClick}
      {...getItemProps()}
      {...rest}
    >
      {isValidElement(Icon) && <Icon />}
      {children}
    </Box>
  );
});

Item.displayName = 'DropdownMenu.Item';

export default Object.assign(DropdownMenu, { Trigger, List, Item, Divider });
