import { createComponent, forwardRef, useMenu } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Menu.styles';
import type { DefaultComponentProps } from '../../types';

export type MenuDividerProps = DefaultComponentProps;

const Divider = () => <hr />;

export type MenuHeadingProps = DefaultComponentProps;

const Heading = forwardRef<MenuHeadingProps, 'p'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <p ref={ref} {...rest}>
      {children}
    </p>
  );
});

export type MenuItemProps = DefaultComponentProps;

const Item = forwardRef<MenuItemProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();

  return (
    <button ref={ref} className={styles.item} {...rest}>
      {children}
    </button>
  );
});

export type MenuDropdownProps = DefaultComponentProps;

const Dropdown = forwardRef<MenuDropdownProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <div ref={ref} className={styles.dropdown} {...rest}>
      {children}
    </div>
  );
});

export type MenuButtonProps = DefaultComponentProps;

const MenuButton = forwardRef<MenuButtonProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

export type MenuProps = DefaultComponentProps;

const Menu = forwardRef<MenuProps, 'div'>((props, ref) => {
  const { children, ...rest } = useDefaultProps('Menu', props);
  const menuProps = useMenu();
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={styles.menu} {...menuProps} {...rest}>
      {children}
    </Box>
  );
});

export default createComponent(Menu, {
  Button: MenuButton,
  Dropdown,
  Item,
  Divider,
  Heading,
});
