import { Combobox as ArkCombobox } from '@ark-ui/react';
import {
  combobox,
  type ComboboxVariantProps,
} from '@bend-ui/styled-system/recipes';
import { Input } from '../..';
import { ChevronDownIcon } from 'lucide-react';
import { createRecipeContext } from '@bend-ui/internal';

const { withProvider, withPart } = createRecipeContext(combobox);

type ComboboxRootProps = ArkCombobox.RootProps<ArkCombobox.CollectionItem> &
  ComboboxVariantProps;

const ComboboxRoot = withProvider<ComboboxRootProps>(ArkCombobox.Root, 'root');

const ComboboxRootProvider = ArkCombobox.RootProvider;

export interface ComboboxLabelProps
  extends React.ComponentProps<typeof ArkCombobox.Label> {
  children?: React.ReactNode;
}

const ComboboxLabel = withPart<ComboboxLabelProps>(ArkCombobox.Label, 'label');

export type ComboboxInputProps = React.ComponentProps<typeof ArkCombobox.Input>;

export interface ComboboxControlProps
  extends React.ComponentProps<typeof ArkCombobox.Control> {
  children?: React.ReactNode;
}

export const ComboboxControl = (props: ComboboxControlProps) => {
  const { children, ...rest } = props;

  return (
    <ArkCombobox.Control asChild {...rest}>
      <Input.Root>
        <Input.Wrapper>{children}</Input.Wrapper>
      </Input.Root>
    </ArkCombobox.Control>
  );
};

const ComboboxInput = (props: ComboboxInputProps) => {
  return (
    <ArkCombobox.Input asChild {...props}>
      <Input.Input />
    </ArkCombobox.Input>
  );
};

export interface ComboboxTriggerProps
  extends React.ComponentProps<typeof ArkCombobox.Trigger> {
  children?: React.ReactNode;
}

const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  return (
    <ArkCombobox.Trigger asChild {...props}>
      <Input.Icon>
        <ChevronDownIcon />
      </Input.Icon>
    </ArkCombobox.Trigger>
  );
};

export interface ComboboxContentProps
  extends React.ComponentProps<typeof ArkCombobox.Content> {
  children?: React.ReactNode;
}

export const ComboboxContent = withPart<ComboboxContentProps>(
  ArkCombobox.Content,
  'content',
);

export interface ComboboxPositionerProps
  extends React.ComponentProps<typeof ArkCombobox.Positioner> {
  children?: React.ReactNode;
}

export const ComboboxPositioner = withPart<ComboboxPositionerProps>(
  ArkCombobox.Positioner,
  'positioner',
);

export interface ComboboxItemProps
  extends React.ComponentProps<typeof ArkCombobox.Item> {
  children?: React.ReactNode;
}

const ComboboxItem = withPart<ComboboxItemProps>(ArkCombobox.Item, 'item');

export interface ComboboxItemTextProps
  extends React.ComponentProps<typeof ArkCombobox.ItemText> {
  children?: React.ReactNode;
}

const ComboboxItemText = withPart<ComboboxItemTextProps>(
  ArkCombobox.ItemText,
  'item-text',
);

export interface ComboboxItemIndicatorProps
  extends React.ComponentProps<typeof ArkCombobox.ItemIndicator> {
  children?: React.ReactNode;
}

const ComboboxItemIndicator = withPart<ComboboxItemIndicatorProps>(
  ArkCombobox.ItemIndicator,
  'item-indicator',
);

export interface ComboboxClearTriggerProps
  extends React.ComponentProps<typeof ArkCombobox.ClearTrigger> {
  children?: React.ReactNode;
}

const ComboboxClearTrigger = withPart<ComboboxClearTriggerProps>(
  ArkCombobox.ClearTrigger,
  'clear-trigger',
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
