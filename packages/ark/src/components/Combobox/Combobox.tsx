import { Combobox as ArkCombobox } from '@ark-ui/react';
import {
  combobox,
  type ComboboxVariantProps,
} from '@particles/styled-system/recipes';

type ComboboxRootProps = ArkCombobox.RootProps<ArkCombobox.CollectionItem> &
  ComboboxVariantProps;

const ComboboxRoot = (props: ComboboxRootProps) => {
  const [variantProps, rest] = combobox.splitVariantProps(props);
  const classes = combobox(variantProps);

  return <ArkCombobox.Root className={classes} {...rest} />;
};
const ComboboxRootProvider = ArkCombobox.RootProvider;

export const ComboboxLabel = ArkCombobox.Label;
export const ComboboxInput = ArkCombobox.Input;
export const ComboboxTrigger = ArkCombobox.Trigger;
export const ComboboxContent = ArkCombobox.Content;
export const ComboboxPositioner = ArkCombobox.Positioner;
export const ComboboxControl = ArkCombobox.Control;
export const ComboboxItem = ArkCombobox.Item;
export const ComboboxItemText = ArkCombobox.ItemText;
export const ComboboxItemIndicator = ArkCombobox.ItemIndicator;
export const ComboboxClearTrigger = ArkCombobox.ClearTrigger;

export interface ComboboxProps
  extends React.ComponentProps<typeof ComboboxRoot> {
  label: string;
  placeholder: string;
}

const Component = (props: ComboboxProps) => {
  const { label, placeholder, collection, ...rest } = props;

  return (
    <ComboboxRoot collection={collection} {...rest}>
      <ComboboxLabel>{label}</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder={placeholder} />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxPositioner>
        <ComboboxContent>
          {collection.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </ComboboxContent>
      </ComboboxPositioner>
    </ComboboxRoot>
  );
};

export const Combobox = Object.assign(Component, {
  RootProvider: ComboboxRootProvider,
  Root: ComboboxRoot,
  Label: ComboboxLabel,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  Content: ComboboxContent,
  Positioner: ComboboxPositioner,
  Control: ComboboxControl,
  Item: ComboboxItem,
  ItemText: ComboboxItemText,
  ItemIndicator: ComboboxItemIndicator,
  ClearTrigger: ComboboxClearTrigger,
});

export { createListCollection } from '@ark-ui/react';
