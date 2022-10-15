import clsx from 'clsx';
import { TbChevronDown } from 'react-icons/tb';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import { Group } from '../Group';
import { Badge } from '../Badge';
import { useNavContext } from './NavContext';
import useStyles from './Nav.styles';

export type NavLinkProps = DefaultComponentProps & {
  icon?: React.ReactNode;
  indicator?: boolean;
  badge?: boolean;
  isDropdown?: boolean;
};

export const NavLink = forwardRef<NavLinkProps, 'a'>((props, ref) => {
  const {
    children,
    as = 'a',
    className,
    icon,
    indicator,
    badge,
    isDropdown,
    ...rest
  } = props;
  const context = useNavContext();
  const { styles } = useStyles({ ...context }, { name: 'Nav' });

  return (
    <Box ref={ref} as={as} className={clsx(styles.link, className)} {...rest}>
      <Group>
        {indicator && 'indicator'}
        {icon}
        {children}
      </Group>
      {(badge || isDropdown) && (
        <Group>
          {badge && <Badge>badge</Badge>}
          {isDropdown && <TbChevronDown />}
        </Group>
      )}
    </Box>
  );
});
