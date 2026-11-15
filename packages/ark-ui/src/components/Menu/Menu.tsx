import { Menu as ArkMenu } from '@ark-ui/react';
import { Button } from '../Button';
import { menu } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withRootProvider, withContext } = createSlotRecipeContext(menu);

type MenuRootProps = ArkMenu.RootProps;
const MenuRoot = withRootProvider(ArkMenu.Root);

const MenuIndicator = withContext(ArkMenu.Indicator, 'indicator');

type MenuTriggerProps = ArkMenu.TriggerProps;

const MenuTriggerBase = (props: MenuTriggerProps) => {
  const { children, asChild, ...rest } = props;
  return (
    <ArkMenu.Trigger {...rest} asChild>
      {asChild ? (
        children
      ) : (
        <Button icon={<MenuIndicator />}>{children}</Button>
      )}
    </ArkMenu.Trigger>
  );
};
const MenuTrigger = withContext(MenuTriggerBase, 'trigger');
Object.assign(MenuTrigger, { displayName: 'MenuTrigger' });

const MenuPositioner = withContext(
  withContext(ArkMenu.Positioner, 'positioner'),
  'root',
);
Object.assign(MenuPositioner, { displayName: 'MenuPositioner' });

const MenuContent = withContext(ArkMenu.Content, 'content');

const MenuItem = withContext(ArkMenu.Item, 'item');

export interface MenuProps extends MenuRootProps {
  /** Content of the trigger button. */
  trigger: React.ReactNode;
  /** Menu items, typically `Menu.Item` elements. */
  children: React.ReactNode;
}

const Component = (props: MenuProps) => {
  const { trigger, children, ...rest } = props;
  return (
    <MenuRoot {...rest}>
      <MenuTrigger>{trigger}</MenuTrigger>
      <MenuPositioner>
        <MenuContent>{children}</MenuContent>
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
