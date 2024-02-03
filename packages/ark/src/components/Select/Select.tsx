import { Portal, Select as SelectPrimitive } from '@ark-ui/react';
import { select } from '@particles/styled-system/recipes';
import { LuChevronDown } from 'react-icons/lu';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(select);

const Root = withProvider(SelectPrimitive.Root);
const Label = withContext(SelectPrimitive.Label);
const Control = withContext(SelectPrimitive.Control);
const Item = withContext(SelectPrimitive.Item, 'item');
const Positioner = withContext(SelectPrimitive.Positioner);
const Trigger = withContext(SelectPrimitive.Trigger, 'trigger');
const Content = withContext(SelectPrimitive.Content, 'content');
const ItemGroup = withContext(SelectPrimitive.ItemGroup, 'group');
const ItemGroupLabel = withContext(SelectPrimitive.ItemGroupLabel);
const ItemText = withContext(SelectPrimitive.ItemText);
const ItemIndicator = withContext(SelectPrimitive.ItemIndicator);
const ValueText = withContext(SelectPrimitive.ValueText);
const Indicator = withContext(SelectPrimitive.Indicator);
const ClearTrigger = withContext(SelectPrimitive.ClearTrigger);

const Component = () => {
  const items = ['React', 'Solid', 'Vue'];
  return (
    <Root items={items}>
      <Label>Framework</Label>
      <Control>
        <Trigger>
          <ValueText placeholder="Select a Framework" />
          <Indicator>
            <LuChevronDown />
          </Indicator>
        </Trigger>
        <ClearTrigger>Clear</ClearTrigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <ItemGroup id="framework">
              <ItemGroupLabel htmlFor="framework">Frameworks</ItemGroupLabel>
              {items.map((item) => (
                <Item key={item} item={item}>
                  <ItemText>{item}</ItemText>
                  <ItemIndicator>✓</ItemIndicator>
                </Item>
              ))}
            </ItemGroup>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
};

export const Select = Object.assign(Component, {
  Root,
  Label,
  Item,
  Trigger,
  Content,
});
