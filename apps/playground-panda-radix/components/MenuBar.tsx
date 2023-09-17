import { cx, sva } from '@particles/panda-system/css';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import type { ComponentProps, ComponentPropsWithoutRef } from 'react';

const styles = sva({
  slots: ['root', 'trigger', 'content'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'row',
      gap: 'sm',
    },
    trigger: {
      padding: 'sm',
    },
    content: {
      layerStyle: 'element',
    },
  },
});

const Menu = MenubarPrimitive.Menu;

type MenubarTriggerProps = ComponentPropsWithoutRef<'div'>;

const Trigger = (props: MenubarTriggerProps) => {
  const { children } = props;
  const classes = styles();

  return (
    <MenubarPrimitive.Trigger className={classes.trigger}>
      {children}
    </MenubarPrimitive.Trigger>
  );
};

type MenubarContentProps = ComponentPropsWithoutRef<'div'>;

const Content = (props: MenubarContentProps) => {
  const { children } = props;
  const classes = styles();
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content className={classes.content}>
        {children}
      </MenubarPrimitive.Content>
    </MenubarPrimitive.Portal>
  );
};

const Label = MenubarPrimitive.Label;

const Item = MenubarPrimitive.Item;

const Group = MenubarPrimitive.Group;

type MenuBarProps = ComponentProps<typeof MenubarPrimitive.Root>;

const Root = (props: MenuBarProps) => {
  const { children, className, ...rest } = props;
  const classes = styles();
  return (
    <MenubarPrimitive.Root className={cx(classes.root, className)} {...rest}>
      {children}
    </MenubarPrimitive.Root>
  );
};

export default Object.assign(Root, {
  Menu,
  Trigger,
  Content,
  Label,
  Item,
  Group,
});
