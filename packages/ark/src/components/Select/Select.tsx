import { forwardRef } from 'react';
import { Portal, Select as SelectPrimitive } from '@ark-ui/react';
import { select } from '@particles/styled-system/recipes';
import { LuChevronDown } from 'react-icons/lu';
import { DismissButton } from '@particles/react';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { SelectVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { Assign } from '@ark-ui/react';
import type { ElementRef } from 'react';
import type { SelectProps } from './Select.types';

const { withProvider, withContext } = createStyleContext(select);

export interface RootProps
  extends Assign<
      JsxStyleProps,
      SelectPrimitive.RootProps<SelectPrimitive.CollectionItem>
    >,
    SelectVariantProps {}

const Root = withProvider<HTMLDivElement, RootProps>(
  SelectPrimitive.Root,
  'root',
);

const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, SelectPrimitive.ClearTriggerProps>
>(SelectPrimitive.ClearTrigger, 'clearTrigger');

const Content = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ContentProps>
>(SelectPrimitive.Content, 'content');

const Control = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ControlProps>
>(SelectPrimitive.Control, 'control');

const Indicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.IndicatorProps>
>(SelectPrimitive.Indicator, 'indicator');

const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ItemGroupLabelProps>
>(SelectPrimitive.ItemGroupLabel, 'itemGroupLabel');

const ItemGroup = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ItemGroupProps>
>(SelectPrimitive.ItemGroup, 'itemGroup');

const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ItemIndicatorProps>
>(SelectPrimitive.ItemIndicator, 'itemIndicator');

const Item = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ItemProps>
>(SelectPrimitive.Item, 'item');

const ItemText = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.ItemTextProps>
>(SelectPrimitive.ItemText, 'itemText');

const Label = withContext<
  HTMLLabelElement,
  Assign<JsxStyleProps, SelectPrimitive.LabelProps>
>(SelectPrimitive.Label, 'label');

const Positioner = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, SelectPrimitive.PositionerProps>
>(SelectPrimitive.Positioner, 'positioner');

const Trigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, SelectPrimitive.TriggerProps>
>(SelectPrimitive.Trigger, 'trigger');

const ValueText = withContext<
  HTMLSpanElement,
  Assign<JsxStyleProps, SelectPrimitive.ValueTextProps>
>(SelectPrimitive.ValueText, 'valueText');

const HiddenSelect = SelectPrimitive.HiddenSelect;

const Component = forwardRef<ElementRef<typeof Root>, SelectProps<any>>(
  (props, ref) => {
    const { items, ...rest } = props;
    return (
      <Root ref={ref} items={items} positioning={{ sameWidth: true }} {...rest}>
        <Label>Framework</Label>
        <Control>
          <Trigger>
            <ValueText placeholder="Select a Framework" />
            <Indicator>
              <LuChevronDown />
            </Indicator>
          </Trigger>
          <ClearTrigger asChild>
            <DismissButton />
          </ClearTrigger>
        </Control>
        <Portal>
          <Positioner>
            <Content>
              <ItemGroup>
                <ItemGroupLabel>Frameworks</ItemGroupLabel>
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
        <HiddenSelect />
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
  Control,
  ValueText,
  Indicator,
  ClearTrigger,
  HiddenSelect,
  Positioner,
  ItemText,
  ItemIndicator,
  ItemGroup,
  ItemGroupLabel,
});
