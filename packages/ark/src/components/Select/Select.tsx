import { forwardRef } from 'react';
import { Portal, Select as SelectPrimitive } from '@ark-ui/react';
import { select } from '@particles/styled-system/recipes';
import { LuChevronDown } from 'react-icons/lu';
import { DismissButton } from '@particles/react';
import { createStyleContext } from '../../utils';
import type { ElementRef } from 'react';
import type { SelectProps } from './Select.types';

const { withProvider, withContext } = createStyleContext(select);

const Root = withProvider(SelectPrimitive.Root);
const Label = withContext(SelectPrimitive.Label);
const Control = withContext(SelectPrimitive.Control, 'control');
const Trigger = withContext(SelectPrimitive.Trigger, 'trigger');
const ValueText = withContext(SelectPrimitive.ValueText, 'value');
const Indicator = withContext(SelectPrimitive.Indicator, 'indicator');
const ClearTrigger = withContext(SelectPrimitive.ClearTrigger, 'clear');
const Item = withContext(SelectPrimitive.Item, 'item');
const Positioner = withContext(SelectPrimitive.Positioner);
const Content = withContext(SelectPrimitive.Content, 'content');
const ItemGroup = withContext(SelectPrimitive.ItemGroup, 'group');
const ItemGroupLabel = withContext(SelectPrimitive.ItemGroupLabel);
const ItemText = withContext(SelectPrimitive.ItemText);
const ItemIndicator = withContext(SelectPrimitive.ItemIndicator);

const Component = forwardRef<ElementRef<typeof Root>, SelectProps<any>>(
  (props, ref) => {
    const { items, ...rest } = props;
    return (
      <Root ref={ref} items={items} {...rest}>
        <Label>Framework</Label>
        <Control>
          <Trigger>
            <ValueText placeholder="Select a Framework" />
            <Indicator>
              <LuChevronDown />
            </Indicator>
          </Trigger>
          <ClearTrigger>
            <DismissButton />
          </ClearTrigger>
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
  },
);

Component.displayName = 'Select';

export const Select = Object.assign(Component, {
  Root,
  Label,
  Item,
  Trigger,
  Content,
});
