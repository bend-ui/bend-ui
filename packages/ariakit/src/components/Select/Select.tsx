import * as AriaKit from '@ariakit/react';

const SelectProvider = AriaKit.SelectProvider;
const Label = AriaKit.SelectLabel;
const Root = AriaKit.Select;
const Popover = AriaKit.SelectPopover;
const Item = AriaKit.SelectItem;

export interface SelectProps extends AriaKit.SelectProps {
  children?: React.ReactNode;
}

const Component = (props: SelectProps) => (
  <SelectProvider>
    <Root {...props} />
  </SelectProvider>
);

Component.displayName = 'Select';

export const Select = Object.assign(Component, {
  Provider: SelectProvider,
  Label,
  Root,
  Popover,
  Item,
});
