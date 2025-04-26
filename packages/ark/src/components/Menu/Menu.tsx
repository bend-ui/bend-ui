import { Menu as ArkMenu } from '@ark-ui/react';
import { Button } from '@particles/react';
import { menu } from '@particles/styled-system/recipes';
import { ElementRef, forwardRef } from 'react';

type MenuRootProps = ArkMenu.RootProps;
const MenuRoot = ArkMenu.Root;

const MenuIndicator = ArkMenu.Indicator;

type MenuTriggerProps = ArkMenu.TriggerProps;
const MenuTrigger = forwardRef<
  ElementRef<typeof ArkMenu.Trigger>,
  MenuTriggerProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ArkMenu.Trigger {...rest} ref={ref} asChild>
      <Button icon={<MenuIndicator>➡️</MenuIndicator>}>{children}</Button>
    </ArkMenu.Trigger>
  );
});
MenuTrigger.displayName = 'MenuTrigger';

type MenuPositionerProps = ArkMenu.PositionerProps;

const MenuPositioner = forwardRef<
  ElementRef<typeof ArkMenu.Positioner>,
  MenuPositionerProps
>((props, ref) => {
  const [variantProps, rest] = menu.splitVariantProps(props);
  const classes = menu(variantProps);
  return (
    <ArkMenu.Positioner {...rest} ref={ref} className={classes}>
      {props.children}
    </ArkMenu.Positioner>
  );
});
MenuPositioner.displayName = 'MenuPositioner';

const MenuContent = ArkMenu.Content;

const MenuItem = ArkMenu.Item;

export interface MenuProps extends MenuRootProps {
  trigger: React.ReactNode;
}

const Component = (props: MenuProps) => {
  const { trigger, ...rest } = props;
  return (
    <MenuRoot {...rest}>
      <MenuTrigger>{trigger}</MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItem value="react">React</MenuItem>
          <MenuItem value="solid">Solid</MenuItem>
          <MenuItem value="vue">Vue</MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  );
};

export const Menu = Object.assign(Component, {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Positioner: MenuPositioner,
  Content: MenuContent,
  Item: MenuItem,
  Indicator: MenuIndicator,
});
