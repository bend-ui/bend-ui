import { Combobox as ArkCombobox } from '@ark-ui/react';
import {
  combobox,
  type ComboboxVariantProps,
} from '@bend-ui/styled-system/recipes';
import { Input } from '../..';
import { ChevronDownIcon } from 'lucide-react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext, withRootProvider } =
  createStyleContext(combobox);

type ComboboxRootProps = ArkCombobox.RootProps<ArkCombobox.CollectionItem> &
  ComboboxVariantProps;

const ComboboxRoot = withProvider(
  ArkCombobox.Root,
  'root',
) as ArkCombobox.RootComponent<ComboboxVariantProps>;

const ComboboxRootProvider = withRootProvider(
  ArkCombobox.RootProvider,
) as ArkCombobox.RootProviderComponent<ComboboxVariantProps>;

export interface ComboboxLabelProps extends React.ComponentProps<
  typeof ArkCombobox.Label
> {
  children?: React.ReactNode;
}

const ComboboxLabel = withContext(ArkCombobox.Label, 'label');

export type ComboboxInputProps = React.ComponentProps<typeof ArkCombobox.Input>;

export interface ComboboxControlProps extends React.ComponentProps<
  typeof ArkCombobox.Control
> {
  children?: React.ReactNode;
}

const ComboboxControlBase = (props: ComboboxControlProps) => {
  const { children, ...rest } = props;

  return (
    <ArkCombobox.Control asChild {...rest}>
      <Input.Root>
        <Input.Wrapper>{children}</Input.Wrapper>
      </Input.Root>
    </ArkCombobox.Control>
  );
};
export const ComboboxControl = withContext(ComboboxControlBase, 'control');

const ComboboxInputBase = (props: ComboboxInputProps) => {
  return (
    <ArkCombobox.Input asChild {...props}>
      <Input.Input />
    </ArkCombobox.Input>
  );
};
const ComboboxInput = withContext(ComboboxInputBase, 'input');

export interface ComboboxTriggerProps extends React.ComponentProps<
  typeof ArkCombobox.Trigger
> {
  children?: React.ReactNode;
}

const ComboboxTriggerBase = (props: ComboboxTriggerProps) => {
  return (
    <ArkCombobox.Trigger asChild {...props}>
      <Input.Icon>
        <ChevronDownIcon />
      </Input.Icon>
    </ArkCombobox.Trigger>
  );
};
const ComboboxTrigger = withContext(ComboboxTriggerBase, 'trigger');

export interface ComboboxContentProps extends React.ComponentProps<
  typeof ArkCombobox.Content
> {
  children?: React.ReactNode;
}

export const ComboboxContent = withContext(ArkCombobox.Content, 'content');

export interface ComboboxPositionerProps extends React.ComponentProps<
  typeof ArkCombobox.Positioner
> {
  children?: React.ReactNode;
}

export const ComboboxPositioner = withContext(
  ArkCombobox.Positioner,
  'positioner',
);

export interface ComboboxItemProps extends React.ComponentProps<
  typeof ArkCombobox.Item
> {
  children?: React.ReactNode;
}

const ComboboxItem = withContext(ArkCombobox.Item, 'item');

export interface ComboboxItemTextProps extends React.ComponentProps<
  typeof ArkCombobox.ItemText
> {
  children?: React.ReactNode;
}

const ComboboxItemText = withContext(ArkCombobox.ItemText, 'itemText');

export interface ComboboxItemIndicatorProps extends React.ComponentProps<
  typeof ArkCombobox.ItemIndicator
> {
  children?: React.ReactNode;
}

const ComboboxItemIndicator = withContext(
  ArkCombobox.ItemIndicator,
  'itemIndicator',
);

export interface ComboboxClearTriggerProps extends React.ComponentProps<
  typeof ArkCombobox.ClearTrigger
> {
  children?: React.ReactNode;
}

const ComboboxClearTrigger = withContext(
  ArkCombobox.ClearTrigger,
  'clearTrigger',
);

export interface ComboboxProps extends ComboboxRootProps {
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
