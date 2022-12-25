import clsx from 'clsx';
import { createContext, forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';
import { Group, GroupProps } from '../Group';
import useStyles, { NavStylesParams } from './Nav.styles';

const [NavContextProvider, useNavContext] = createContext('Nav', {
  variant: null,
});

export type NavProps = NavStylesParams & GroupProps & DefaultComponentProps;

const Nav = forwardRef<NavProps, 'nav'>((props, ref) => {
  const {
    children,
    as = 'nav',
    variant = 'default',
    className,
    ...rest
  } = props;
  const { styles } = useStyles({ variant });
  const context = { variant };
  return (
    <NavContextProvider value={context}>
      <Group
        ref={ref}
        as={as}
        className={clsx(styles['root'], className)}
        {...rest}
      >
        {children}
      </Group>
    </NavContextProvider>
  );
});

Nav.displayName = 'Nav';

export type NavLinkProps = {
  icon?: React.ReactElement;
  addonEnd?: React.ReactElement;
} & DefaultComponentProps;

const Link = forwardRef<NavLinkProps, 'a'>((props, ref) => {
  const { children, as = 'a', icon, addonEnd, className, ...rest } = props;
  const { variant } = useNavContext();
  const { styles } = useStyles({ variant });
  return (
    <Box ref={ref} as={as} className={clsx(styles.link, className)} {...rest}>
      <Group>
        {icon}
        {children}
        {!!addonEnd && <Box sx={{ marginInlineStart: 'auto' }}>{addonEnd}</Box>}
      </Group>
    </Box>
  );
});

Link.displayName = 'Nav.Link';

const Dropdown = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles({});
  return (
    <Box ref={ref} className={styles['dropdown']} {...rest}>
      {children}
    </Box>
  );
});

const DropdownToggle = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box ref={ref} as="a" role="button" {...rest}>
      {children}
    </Box>
  );
});

const DropdownItem = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Box as="a" ref={ref} {...rest}>
      {children}
    </Box>
  );
});

export default Object.assign(Nav, {
  Link,
  Dropdown,
  DropdownToggle,
  DropdownItem,
});
