import { Children, cloneElement, isValidElement, useRef } from 'react';
import {
  createContext,
  forwardRef,
  useDisclosure,
} from '@particles/primitives';
import { system } from '../../system';
import { Panel } from '../Panel';
import { Popper } from '../Popper';
import useStyles from './Menu.styles';
import type { SystemProps } from '../../system';
import type { ReactNode, RefObject } from 'react';

interface MenuContextProps {
  isOpen: boolean;
  toggle(): void;
  triggerRef: RefObject<any>;
}

const [MenuContextProvider, useMenuContext] =
  createContext<MenuContextProps>('Menu');

export interface MenuTriggerProps {
  children?: ReactNode;
}

const Trigger = (props: MenuTriggerProps) => {
  const { children, ...rest } = props;
  const child = Children.only(children);
  const { triggerRef, toggle } = useMenuContext();

  return (
    <system.div {...rest}>
      {cloneElement(child as React.ReactElement, {
        onClick: toggle,
        ref: triggerRef,
      })}
    </system.div>
  );
};

Trigger.displayName = 'Menu.Trigger';

export type MenuListProps = SystemProps;

const List = (props: MenuListProps) => {
  const { children, sx, ...rest } = props;
  const { styles } = useStyles({}, { overrides: sx });
  const { triggerRef, isOpen } = useMenuContext();

  if (!isOpen) {
    return null;
  }

  return (
    <Popper triggerRef={triggerRef}>
      <Panel sx={{ root: styles.list }} {...rest}>
        {children}
      </Panel>
    </Popper>
  );
};

List.displayName = 'Menu.List';

export type MenuItemProps = {
  icon?: React.ComponentType<any>;
} & SystemProps;

const Item = forwardRef<MenuItemProps, 'button'>((props, ref) => {
  const { children, icon: Icon, onClick, ...rest } = props;
  const { styles } = useStyles();
  const { toggle } = useMenuContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    toggle();
  };

  return (
    <system.button
      ref={ref}
      role="menuitem"
      sx={styles.item}
      onClick={handleClick}
      {...rest}
    >
      {isValidElement(Icon) && <Icon />}
      {children}
    </system.button>
  );
});

Item.displayName = 'Menu.Item';

export type MenuProps = {
  isOpen?: boolean;
} & SystemProps;

const Root = forwardRef<MenuProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();

  const { isOpen, toggle } = useDisclosure();

  const triggerRef = useRef();
  const context = {
    isOpen,
    toggle,
    triggerRef,
  };

  return (
    <MenuContextProvider value={context}>
      <system.div ref={ref} sx={styles.root} {...rest}>
        {children}
      </system.div>
    </MenuContextProvider>
  );
});

Root.displayName = 'Menu';

export const Menu = Object.assign(Root, { Trigger, List, Item });
