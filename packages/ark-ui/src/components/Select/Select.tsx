import type { SlotRecipeComponent } from '@bend-ui/core';
import { Portal, Select as ArkSelect } from '@ark-ui/react';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { DismissButton } from '../Button';
import type { CollectionItem } from '@ark-ui/react';
import { ChevronDownIcon } from 'lucide-react';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(select);
const { withProvider: withDropdownProvider, withContext: withDropdownContext } =
  createSlotRecipeContext(selectDropdown);

export type SelectRootProps<T extends CollectionItem> = ArkSelect.RootProps<T>;

const SelectRoot = withProvider(
  ArkSelect.Root,
  'root',
) as ArkSelect.RootComponent;

export type SelectLabelProps = ArkSelect.LabelProps;

const SelectLabel: SlotRecipeComponent<typeof ArkSelect.Label> = withContext(
  ArkSelect.Label,
  'label',
);

const SelectControl: SlotRecipeComponent<typeof ArkSelect.Control> =
  withContext(ArkSelect.Control, 'control');

export type SelectTriggerProps = ArkSelect.TriggerProps;

const SelectTrigger: SlotRecipeComponent<typeof ArkSelect.Trigger> =
  withContext(ArkSelect.Trigger, 'trigger');

export type SelectValueTextProps = ArkSelect.ValueTextProps;

const SelectValueText: SlotRecipeComponent<typeof ArkSelect.ValueText> =
  withContext(ArkSelect.ValueText, 'valueText');

const SelectIndicator: SlotRecipeComponent<typeof ArkSelect.Indicator> =
  withContext(ArkSelect.Indicator, 'indicator');

export type SelectClearTriggerProps = ArkSelect.ClearTriggerProps;

const SelectClearTrigger: SlotRecipeComponent<typeof ArkSelect.ClearTrigger> =
  withContext(ArkSelect.ClearTrigger, 'clearTrigger');

export type SelectItemGroupProps = ArkSelect.ItemGroupProps;

const SelectItemGroup: SlotRecipeComponent<typeof ArkSelect.ItemGroup> = withContext(
  withDropdownContext(ArkSelect.ItemGroup, 'itemGroup'),
  'itemGroup',
);

export type SelectItemGroupLabelProps = ArkSelect.ItemGroupLabelProps;

const SelectItemGroupLabel: SlotRecipeComponent<typeof ArkSelect.ItemGroupLabel> = withContext(
  withDropdownContext(ArkSelect.ItemGroupLabel, 'itemGroupLabel'),
  'itemGroupLabel',
);

export type SelectPositionerProps = ArkSelect.PositionerProps;

const SelectPositioner: SlotRecipeComponent<typeof ArkSelect.Positioner, typeof selectDropdown['__type']> = withDropdownProvider(
  withContext(ArkSelect.Positioner, 'positioner'),
  'root',
);

export type SelectContentProps = ArkSelect.ContentProps;

const SelectContent: SlotRecipeComponent<typeof ArkSelect.Content> = withContext(
  withDropdownContext(ArkSelect.Content, 'content'),
  'content',
);

export type SelectItemTextProps = ArkSelect.ItemTextProps;

export type SelectItemProps = ArkSelect.ItemProps;

const SelectItem: SlotRecipeComponent<typeof ArkSelect.Item> = withContext(
  withDropdownContext(ArkSelect.Item, 'item'),
  'item',
);

const SelectItemText: SlotRecipeComponent<typeof ArkSelect.ItemText> = withContext(
  withDropdownContext(ArkSelect.ItemText, 'itemText'),
  'itemText',
);

export type SelectItemIndicatorProps = ArkSelect.ItemIndicatorProps;

const SelectItemIndicator: SlotRecipeComponent<typeof ArkSelect.ItemIndicator> = withContext(
  withDropdownContext(ArkSelect.ItemIndicator, 'itemIndicator'),
  'itemIndicator',
);

export type SelectHiddenSelectProps = ArkSelect.HiddenSelectProps;

const SelectHiddenSelect = ArkSelect.HiddenSelect;

export interface SelectProps<
  T extends CollectionItem,
> extends SelectRootProps<T> {
  placeholder?: string;
  label?: string;
}

const Component = (props: SelectProps<any>) => {
  const { collection, placeholder, label, ...rest } = props;
  return (
    <SelectRoot
      collection={collection}
      positioning={{ sameWidth: true }}
      {...rest}
    >
      <SelectLabel>{label}</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder={placeholder} />
          <SelectIndicator>
            <ChevronDownIcon />
          </SelectIndicator>
        </SelectTrigger>
        <SelectClearTrigger asChild>
          <DismissButton />
        </SelectClearTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              {collection.items.map((item) => (
                <SelectItem key={item} item={item}>
                  <SelectItemText>{item}</SelectItemText>
                  <SelectItemIndicator>✓</SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          </SelectContent>
        </SelectPositioner>
      </Portal>
      <SelectHiddenSelect />
    </SelectRoot>
  );
};

Object.assign(Component, { displayName: 'Select' });

export const Select = Object.assign(Component, {
  Root: SelectRoot,
  Label: SelectLabel,
  Item: SelectItem,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Control: SelectControl,
  ValueText: SelectValueText,
  Indicator: SelectIndicator,
  ClearTrigger: SelectClearTrigger,
  HiddenSelect: SelectHiddenSelect,
  Positioner: SelectPositioner,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
});
