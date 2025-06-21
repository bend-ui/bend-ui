import { Select as SelectPrimitive } from '@base-ui-components/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

const SelectRoot = SelectPrimitive.Root;
const SelectTrigger = SelectPrimitive.Trigger;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;
const SelectBackdrop = SelectPrimitive.Backdrop;
const SelectPortal = SelectPrimitive.Portal;
const SelectPositioner = SelectPrimitive.Positioner;
const SelectPopup = SelectPrimitive.Popup;
const SelectArrow = SelectPrimitive.Arrow;
const SelectItem = SelectPrimitive.Item;
const SelectItemText = SelectPrimitive.ItemText;
const SelectItemIndicator = SelectPrimitive.ItemIndicator;
const SelectGroup = SelectPrimitive.Group;
const SelectGroupLabel = SelectPrimitive.GroupLabel;
const SelectScrollUpArrow = SelectPrimitive.ScrollUpArrow;
const SelectScrollDownArrow = SelectPrimitive.ScrollDownArrow;
const SelectSeparator = SelectPrimitive.Separator;

const Component = () => {
  return (
    <SelectRoot defaultValue="sans">
      <SelectTrigger>
        <SelectValue placeholder="Sans-serif" />
        <SelectIcon>
          <ChevronsUpDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectScrollUpArrow />
          <SelectPopup>
            <SelectItem value="sans">
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
              <SelectItemText>Sans-serif</SelectItemText>
            </SelectItem>
            <SelectItem value="serif">
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
              <SelectItemText>Serif</SelectItemText>
            </SelectItem>
            <SelectItem value="mono">
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
              <SelectItemText>Monospace</SelectItemText>
            </SelectItem>
            <SelectItem value="cursive">
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
              <SelectItemText>Cursive</SelectItemText>
            </SelectItem>
          </SelectPopup>
          <SelectScrollDownArrow />
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
};

export const Select = Object.assign(Component, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Backdrop: SelectBackdrop,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  Arrow: SelectArrow,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  ScrollUpArrow: SelectScrollUpArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  Separator: SelectSeparator,
});
