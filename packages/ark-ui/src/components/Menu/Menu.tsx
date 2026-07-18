import { Menu as ArkMenu } from '@ark-ui/react';
import { Button } from '../Button';
import { menu } from '@bend-ui/styled-system/recipes';

type MenuRootProps = ArkMenu.RootProps;
const MenuRoot = ArkMenu.Root;

const MenuIndicator = ArkMenu.Indicator;

type MenuTriggerProps = ArkMenu.TriggerProps;

const MenuTrigger = (props: MenuTriggerProps) => {
  const { children, asChild, ...rest } = props;
  return (
    <ArkMenu.Trigger {...rest} asChild={asChild}>
      {!asChild ? (
        <Button icon={<MenuIndicator />}>{children}</Button>
      ) : (
        children
      )}
    </ArkMenu.Trigger>
  );
};
MenuTrigger.displayName = 'MenuTrigger';

type MenuPositionerProps = ArkMenu.PositionerProps;

const MenuPositioner = (props: MenuPositionerProps) => {
  const [variantProps, restProps] = menu.splitVariantProps(props);
  const classes = menu(variantProps);
  return (
    <ArkMenu.Positioner {...restProps} className={classes}>
      {props.children}
    </ArkMenu.Positioner>
  );
};
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
