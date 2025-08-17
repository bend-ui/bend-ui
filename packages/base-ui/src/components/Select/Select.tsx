import { Select as SelectPrimitive } from '@base-ui-components/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { select } from '@particles/styled-system/recipes';

const SelectRoot = withRecipe<SelectPrimitive.Root.Props<string>>(
  SelectPrimitive.Root,
  select,
  'root',
) as unknown as typeof SelectPrimitive.Root;

const SelectTrigger = withParts<SelectPrimitive.Trigger.Props>(
  SelectPrimitive.Trigger,
  'trigger',
) as unknown as typeof SelectPrimitive.Trigger;

const SelectValue = withParts<SelectPrimitive.Value.Props>(
  SelectPrimitive.Value,
  'value',
) as unknown as typeof SelectPrimitive.Value;

const SelectIcon = withParts<SelectPrimitive.Icon.Props>(
  SelectPrimitive.Icon,
  'icon',
) as unknown as typeof SelectPrimitive.Icon;

const SelectBackdrop = withParts<SelectPrimitive.Backdrop.Props>(
  SelectPrimitive.Backdrop,
  'backdrop',
) as unknown as typeof SelectPrimitive.Backdrop;

const SelectPortal = SelectPrimitive.Portal;

const SelectPositioner = withParts<SelectPrimitive.Positioner.Props>(
  SelectPrimitive.Positioner,
  'positioner',
) as unknown as typeof SelectPrimitive.Positioner;

const SelectPopup = withParts<SelectPrimitive.Popup.Props>(
  SelectPrimitive.Popup,
  'popup',
) as unknown as typeof SelectPrimitive.Popup;

const SelectArrow = withParts<SelectPrimitive.Arrow.Props>(
  SelectPrimitive.Arrow,
  'arrow',
) as unknown as typeof SelectPrimitive.Arrow;

const SelectItem = withParts<SelectPrimitive.Item.Props>(
  SelectPrimitive.Item,
  'item',
) as unknown as typeof SelectPrimitive.Item;

const SelectItemText = withParts<SelectPrimitive.ItemText.Props>(
  SelectPrimitive.ItemText,
  'itemText',
) as unknown as typeof SelectPrimitive.ItemText;

const SelectItemIndicator = withParts<SelectPrimitive.ItemIndicator.Props>(
  SelectPrimitive.ItemIndicator,
  'itemIndicator',
) as unknown as typeof SelectPrimitive.ItemIndicator;

const SelectGroup = withParts<SelectPrimitive.Group.Props>(
  SelectPrimitive.Group,
  'group',
) as unknown as typeof SelectPrimitive.Group;

const SelectGroupLabel = withParts<SelectPrimitive.GroupLabel.Props>(
  SelectPrimitive.GroupLabel,
  'groupLabel',
) as unknown as typeof SelectPrimitive.GroupLabel;

const SelectSeparator = withParts<SelectPrimitive.Separator.Props>(
  SelectPrimitive.Separator,
  'separator',
) as unknown as typeof SelectPrimitive.Separator;

const SelectScrollUpArrow = withParts<SelectPrimitive.ScrollUpArrow.Props>(
  SelectPrimitive.ScrollUpArrow,
  'scrollUpArrow',
) as unknown as typeof SelectPrimitive.ScrollUpArrow;

const SelectScrollDownArrow = withParts<SelectPrimitive.ScrollDownArrow.Props>(
  SelectPrimitive.ScrollDownArrow,
  'scrollDownArrow',
) as unknown as typeof SelectPrimitive.ScrollDownArrow;

export type SelectProps = SelectPrimitive.Root.Props<string>;

const Component = (props: SelectProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger>
        <SelectValue>Sans-serif</SelectValue>
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

Component.displayName = 'Select';

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
