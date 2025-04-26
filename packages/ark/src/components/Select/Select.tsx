import { forwardRef } from 'react';
import { Portal, Select as ArkSelect } from '@ark-ui/react';
import { select } from '@particles/styled-system/recipes';
import { LuChevronDown } from 'react-icons/lu';
import { DismissButton, Input } from '@particles/react';
import type { SelectVariantProps } from '@particles/styled-system/recipes';
import type { CollectionItem } from '@ark-ui/react';
import type { ElementRef } from 'react';
import { ChevronDownIcon, XIcon } from 'lucide-react';

export type SelectRootProps<T extends CollectionItem> = ArkSelect.RootProps<T>;

const SelectRoot = ArkSelect.Root;

const SelectLabel = ArkSelect.Label;

const SelectControl = forwardRef<
  ElementRef<typeof ArkSelect.Control>,
  ArkSelect.ControlProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ArkSelect.Control ref={ref} {...rest} asChild>
      <Input.Root>{children}</Input.Root>
    </ArkSelect.Control>
  );
});

type SelectTriggerProps = ArkSelect.TriggerProps;

const SelectTrigger = forwardRef<
  ElementRef<typeof ArkSelect.Trigger>,
  SelectTriggerProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Input.Wrapper asChild cursor="pointer">
      <ArkSelect.Trigger ref={ref} {...rest}>
        {children}
      </ArkSelect.Trigger>
    </Input.Wrapper>
  );
});

const SelectValueText = ArkSelect.ValueText;

const SelectIndicator = forwardRef<
  ElementRef<typeof ArkSelect.Indicator>,
  ArkSelect.IndicatorProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ArkSelect.Indicator ref={ref} {...rest} asChild>
      <Input.Icon>
        <ChevronDownIcon />
      </Input.Icon>
    </ArkSelect.Indicator>
  );
});

const SelectClearTrigger = forwardRef<
  ElementRef<typeof ArkSelect.ClearTrigger>,
  ArkSelect.ClearTriggerProps
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ArkSelect.ClearTrigger ref={ref} {...rest} asChild>
      <Input.Icon>
        <XIcon />
      </Input.Icon>
    </ArkSelect.ClearTrigger>
  );
});

const SelectItemGroup = ArkSelect.ItemGroup;

const SelectItemGroupLabel = ArkSelect.ItemGroupLabel;

const SelectItem = ArkSelect.Item;

const SelectContent = ArkSelect.Content;

const SelectPositioner = forwardRef<
  ElementRef<typeof ArkSelect.Positioner>,
  ArkSelect.PositionerProps & SelectVariantProps
>((props, ref) => {
  const [variantProps, rest] = select.splitVariantProps(props);
  const classes = select(variantProps);
  return <ArkSelect.Positioner ref={ref} {...rest} className={classes} />;
});

const SelectItemText = ArkSelect.ItemText;

const SelectItemIndicator = ArkSelect.ItemIndicator;

const SelectHiddenSelect = ArkSelect.HiddenSelect;

export interface SelectProps<T extends CollectionItem>
  extends SelectRootProps<T> {
  placeholder?: string;
  label?: string;
}

const Component = forwardRef<ElementRef<typeof SelectRoot>, SelectProps<any>>(
  (props, ref) => {
    const { collection, placeholder, label, ...rest } = props;
    return (
      <SelectRoot
        ref={ref}
        collection={collection}
        positioning={{ sameWidth: true }}
        {...rest}
      >
        <SelectLabel>{label}</SelectLabel>
        <SelectControl>
          <SelectTrigger>
            <SelectValueText placeholder={placeholder} />
          </SelectTrigger>
          <SelectIndicator />
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
  },
);

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
