import {
  createComponent,
  Dropdown as DropdownPrimitive,
  forwardRef,
} from '@particles/primitives';
import {
  TbBookmark,
  TbLockOpen,
  TbSettings,
  TbUserCircle,
} from 'react-icons/tb';
import { createStyles } from '../../styles';
import { Button } from '../Button';
import type { ReactNode } from 'react';

export type DropdownMenuProps = {
  children?: ReactNode;
};

const useStyles = createStyles({
  menu: {
    base: [
      'flex',
      'flex-col',
      'p-2',
      'bg-surface',
      'border',
      'border-surface-accent',
      'rounded-lg',
      'drop-shadow-md',
    ],
  },
  menuitem: {
    base: [
      'flex',
      'items-center',
      'gap-3',
      'py-2',
      'px-3',
      'rounded-md',
      'text-left',
      'dark:text-shark-200',
      'hover:bg-surface-subtle',
    ],
  },
});

const DropdownMenu = forwardRef<DropdownMenuProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { classes } = useStyles();
  return (
    <DropdownPrimitive.Root ref={ref} {...rest}>
      <DropdownPrimitive.Target as={Button}>Open</DropdownPrimitive.Target>
      <DropdownPrimitive.Menu className={classes.menu}>
        <DropdownPrimitive.MenuItem className={classes.menuitem}>
          <TbBookmark />
          Bookmarks
        </DropdownPrimitive.MenuItem>
        <DropdownPrimitive.MenuItem className={classes.menuitem}>
          <TbUserCircle />
          Edit Profile
        </DropdownPrimitive.MenuItem>
        <DropdownPrimitive.MenuItem className={classes.menuitem}>
          <TbSettings />
          Account Settings
        </DropdownPrimitive.MenuItem>
        <hr className="my-2" />
        <DropdownPrimitive.MenuItem className={classes.menuitem}>
          <TbLockOpen />
          Sign Out
        </DropdownPrimitive.MenuItem>
      </DropdownPrimitive.Menu>
    </DropdownPrimitive.Root>
  );
});

export default createComponent(DropdownMenu, {}, 'DropdownMenu');
