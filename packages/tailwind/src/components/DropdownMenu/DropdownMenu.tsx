import {
  createComponent,
  Dropdown as DropdownPrimitive,
  forwardRef,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import { Button } from '../Button';
import type { ReactNode } from 'react';

export interface DropdownMenuProps {
  children?: ReactNode;
}

export interface DropdownMenuTargetProps {
  children?: ReactNode;
}

export interface DropdownMenuMenuProps {
  children?: ReactNode;
}

export interface DropdownMenuMenuItemProps {
  children?: ReactNode;
}

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

const Target = forwardRef<DropdownMenuTargetProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <DropdownPrimitive.Target ref={ref} as={Button} {...rest}>
      {children}
    </DropdownPrimitive.Target>
  );
});

const Menu = forwardRef<DropdownMenuMenuProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { classes } = useStyles();

  return (
    <DropdownPrimitive.Menu ref={ref} className={classes.menu} {...rest}>
      {children}
    </DropdownPrimitive.Menu>
  );
});

const MenuItem = forwardRef<DropdownMenuMenuItemProps, 'button'>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { classes } = useStyles();

    return (
      <DropdownPrimitive.MenuItem
        ref={ref}
        className={classes.menuitem}
        {...rest}
      >
        {children}
      </DropdownPrimitive.MenuItem>
    );
  }
);

const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, ...rest } = props;
  return <DropdownPrimitive.Root {...rest}>{children}</DropdownPrimitive.Root>;
};

export default createComponent(
  DropdownMenu,
  { Target, Menu, MenuItem },
  'DropdownMenu'
);
