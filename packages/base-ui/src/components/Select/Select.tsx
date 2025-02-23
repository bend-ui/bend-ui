import { forwardRef } from 'react';
import { Select as SelectPrimitive } from '@base-ui-components/react/select';
import { select } from '@particles/styled-system/recipes';

const Root = SelectPrimitive.Root;
const Trigger = SelectPrimitive.Trigger;
const Value = SelectPrimitive.Value;
const Icon = SelectPrimitive.Icon;
const Backdrop = SelectPrimitive.Backdrop;
const Portal = SelectPrimitive.Portal;
const Positioner = SelectPrimitive.Positioner;
const Popup = SelectPrimitive.Popup;
const Arrow = SelectPrimitive.Arrow;
const Item = SelectPrimitive.Item;
const ItemText = SelectPrimitive.ItemText;
const ItemIndicator = SelectPrimitive.ItemIndicator;
const Group = SelectPrimitive.Group;
const GroupLabel = SelectPrimitive.GroupLabel;
const ScrollUpArrow = SelectPrimitive.ScrollUpArrow;
const ScrollDownArrow = SelectPrimitive.ScrollDownArrow;
const Separator = SelectPrimitive.Separator;

export type SelectProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Select = Object.assign(Component, {
  Root,
  Trigger,
  Value,
  Icon,
  Backdrop,
  Portal,
  Positioner,
  Popup,
  Arrow,
  Item,
  ItemText,
  ItemIndicator,
  Group,
  GroupLabel,
  ScrollUpArrow,
  ScrollDownArrow,
  Separator,
});
