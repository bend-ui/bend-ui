import { Menu as MenuPrimitive } from '@ark-ui/react';
import { dropdownMenu } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { DropdownMenuProps } from './DropdownMenu.types';

const { withProvider, withContext } = createStyleContext(dropdownMenu);

const Root = withProvider(MenuPrimitive.Root);

const Trigger = withContext(MenuPrimitive.ContextTrigger, 'trigger');

const Positioner = withContext(MenuPrimitive.Positioner);

const Content = withContext(MenuPrimitive.Content, 'content');

const Item = withContext(MenuPrimitive.Item, 'item');

const SubItem = withContext(MenuPrimitive.TriggerItem, 'subTrigger');

export const OptionItem = withContext(
  MenuPrimitive.TriggerItem,
  'checkboxItem',
);

const Component = (props: DropdownMenuProps) => (
  <Root {...props}>
    <Trigger>
      <div
        style={{
          width: '100%',
          height: '20rem',
          border: '1px solid lightgray',
        }}
      >
        Some content
      </div>
    </Trigger>
    <Positioner>
      <Content>
        <Item id="search">Search</Item>
        <Item id="undo">Undo</Item>
        <Item disabled id="delivery">
          Delivery
        </Item>
        <Item id="unlink">Unlink</Item>
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
  SubItem,
});
