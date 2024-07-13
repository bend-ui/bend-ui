import { Menu as MenuPrimitive } from '@ark-ui/react';
import { dropdownMenu } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import { Button } from '..';
import type { DropdownMenuProps } from './DropdownMenu.types';

const { withRootProvider, withContext } = createStyleContext(dropdownMenu);

const Root = withRootProvider<MenuPrimitive.RootProps>(MenuPrimitive.Root);

const Trigger = withContext<HTMLButtonElement, MenuPrimitive.TriggerProps>(
  MenuPrimitive.Trigger,
  'trigger',
);

const Positioner = withContext<HTMLDivElement, MenuPrimitive.PositionerProps>(
  MenuPrimitive.Positioner,
  'positioner',
);

const Content = withContext<HTMLDivElement, MenuPrimitive.ContentProps>(
  MenuPrimitive.Content,
  'content',
);

const Item = withContext<HTMLDivElement, MenuPrimitive.ItemProps>(
  MenuPrimitive.Item,
  'item',
);

export const TriggerItem = withContext<
  HTMLDivElement,
  MenuPrimitive.TriggerItemProps
>(MenuPrimitive.TriggerItem, 'triggerItem');

const Component = (props: DropdownMenuProps) => (
  <Root {...props}>
    <Trigger asChild>
      <Button>Trigger</Button>
    </Trigger>
    <Positioner>
      <Content>
        <Item value="search">Search</Item>
        <Item value="undo">Undo</Item>
        <Item disabled value="delivery">
          Delivery
        </Item>
        <Item value="unlink">Unlink</Item>
      </Content>
    </Positioner>
  </Root>
);

export const DropdownMenu = Object.assign(Component, {
  Root,
  Trigger,
  Positioner,
  Content,
  Item,
});
