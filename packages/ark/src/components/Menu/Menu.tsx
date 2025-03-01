import { Menu as MenuPrimitive } from '@ark-ui/react';

const Component = (props: MenuPrimitive.RootProps) => (
  <MenuPrimitive.Root {...props}>
    <MenuPrimitive.Trigger>
      Open menu <MenuPrimitive.Indicator>➡️</MenuPrimitive.Indicator>
    </MenuPrimitive.Trigger>
    <MenuPrimitive.Positioner>
      <MenuPrimitive.Content>
        <MenuPrimitive.Item value="react">React</MenuPrimitive.Item>
        <MenuPrimitive.Item value="solid">Solid</MenuPrimitive.Item>
        <MenuPrimitive.Item value="vue">Vue</MenuPrimitive.Item>
      </MenuPrimitive.Content>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Root>
);

export const Menu = Object.assign(Component, {
  Root: MenuPrimitive.Root,
  Trigger: MenuPrimitive.Trigger,
  Positioner: MenuPrimitive.Positioner,
  Content: MenuPrimitive.Content,
  Item: MenuPrimitive.Item,
  Indicator: MenuPrimitive.Indicator,
});
