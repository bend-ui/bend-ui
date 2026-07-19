import { Menu as ArkMenu } from '@ark-ui/react';
import { Button } from '../Button';
import { menu } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withRootProvider, withContext } = createStyleContext(menu);

type MenuRootProps = ArkMenu.RootProps;
const MenuRoot = withRootProvider(ArkMenu.Root);

const MenuIndicator = withContext(ArkMenu.Indicator, 'indicator');

type MenuTriggerProps = ArkMenu.TriggerProps;

const MenuTriggerBase = (props: MenuTriggerProps) => {
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
const MenuTrigger = withContext(MenuTriggerBase, 'trigger');
MenuTrigger.displayName = 'MenuTrigger';

const MenuPositioner = withContext(
  withContext(ArkMenu.Positioner, 'positioner'),
  'root',
);
MenuPositioner.displayName = 'MenuPositioner';

const MenuContent = withContext(ArkMenu.Content, 'content');

const MenuItem = withContext(ArkMenu.Item, 'item');

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
