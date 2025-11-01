import { forwardRef } from 'react';
import { Portal, Select as ArkSelect } from '@ark-ui/react';
import { selectDropdown, select } from '@particles/styled-system/recipes';
import { LuChevronDown } from 'react-icons/lu';
import { DismissButton, Input } from '@particles/react';
import type { SelectVariantProps } from '@particles/styled-system/recipes';
import type { CollectionItem } from '@ark-ui/react';
import type { ElementRef } from 'react';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import { withParts, withRecipe } from '../../utils';

export type SelectRootProps<T extends CollectionItem> = ArkSelect.RootProps<T>;

const SelectRoot = withRecipe<SelectRootProps<any>>(
  ArkSelect.Root,
  select,
  'root',
);

export type SelectLabelProps = ArkSelect.LabelProps;

const SelectLabel = withParts<SelectLabelProps>(ArkSelect.Label, 'label');

export type SelectControlProps = ArkSelect.ControlProps;

const SelectControl = withParts<SelectControlProps>(
  ArkSelect.Control,
  'control',
);

export type SelectTriggerProps = ArkSelect.TriggerProps;

const SelectTrigger = withParts<SelectTriggerProps>(
  ArkSelect.Trigger,
  'trigger',
);

export type SelectValueTextProps = ArkSelect.ValueTextProps;

const SelectValueText = withParts<SelectValueTextProps>(
  ArkSelect.ValueText,
  'valueText',
);

type SelectIndicatorProps = ArkSelect.IndicatorProps;

const SelectIndicator = withParts<SelectIndicatorProps>(
  ArkSelect.Indicator,
  'indicator',
);

export type SelectClearTriggerProps = ArkSelect.ClearTriggerProps;

const SelectClearTrigger = withParts<SelectClearTriggerProps>(
  ArkSelect.ClearTrigger,
  'clearTrigger',
);

export type SelectItemGroupProps = ArkSelect.ItemGroupProps;

const SelectItemGroup = withParts<SelectItemGroupProps>(
  ArkSelect.ItemGroup,
  'itemGroup',
);

export type SelectItemGroupLabelProps = ArkSelect.ItemGroupLabelProps;

const SelectItemGroupLabel = withParts<SelectItemGroupLabelProps>(
  ArkSelect.ItemGroupLabel,
  'itemGroupLabel',
);

export type SelectPositionerProps = ArkSelect.PositionerProps;

const SelectPositioner = withRecipe<SelectPositionerProps>(
  ArkSelect.Positioner,
  selectDropdown,
  'root',
);

export type SelectContentProps = ArkSelect.ContentProps;

const SelectContent = withParts<SelectContentProps>(
  ArkSelect.Content,
  'content',
);

export type SelectItemTextProps = ArkSelect.ItemTextProps;

export type SelectItemProps = ArkSelect.ItemProps;

const SelectItem = withParts<SelectItemProps>(ArkSelect.Item, 'item');

const SelectItemText = withParts<SelectItemTextProps>(
  ArkSelect.ItemText,
  'itemText',
);

export type SelectItemIndicatorProps = ArkSelect.ItemIndicatorProps;

const SelectItemIndicator = withParts<SelectItemIndicatorProps>(
  ArkSelect.ItemIndicator,
  'itemIndicator',
);

export type SelectHiddenSelectProps = ArkSelect.HiddenSelectProps;

const SelectHiddenSelect = withParts<SelectHiddenSelectProps>(
  ArkSelect.HiddenSelect,
  'hiddenSelect',
);

export interface SelectProps<T extends CollectionItem>
  extends SelectRootProps<T> {
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

Component.displayName = 'Select';

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
