import * as AriaKit from '@ariakit/react';

const SelectProvider = AriaKit.SelectProvider;
const Label = AriaKit.SelectLabel;
const Root = AriaKit.Select;
const Popover = AriaKit.SelectPopover;
const Item = AriaKit.SelectItem;

const Component = (props) => (
  <SelectProvider>
    <Root />
  </SelectProvider>
);

export const Select = Object.assign(Component, {
  Provider: SelectProvider,
  Label,
  Root,
  Popover,
  Item,
});
