import { Select as SelectPrimitive } from '@base-ui-components/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { select } from '@particles/styled-system/recipes';

const SelectRoot = withRecipe<SelectPrimitive.Root.Props<string>>(
  SelectPrimitive.Root,
  select,
  'root',
);

const SelectTrigger = withParts<SelectPrimitive.Trigger.Props>(
  SelectPrimitive.Trigger,
  'trigger',
);

const SelectValue = withParts<SelectPrimitive.Value.Props>(
  SelectPrimitive.Value,
  'value',
);

const SelectIcon = withParts<SelectPrimitive.Icon.Props>(
  SelectPrimitive.Icon,
  'icon',
);

const SelectBackdrop = withParts<SelectPrimitive.Backdrop.Props>(
  SelectPrimitive.Backdrop,
  'backdrop',
);

const SelectPortal = SelectPrimitive.Portal;

const SelectPositioner = withParts<SelectPrimitive.Positioner.Props>(
  SelectPrimitive.Positioner,
  'positioner',
);

const SelectPopup = withParts<SelectPrimitive.Popup.Props>(
  SelectPrimitive.Popup,
  'popup',
);

const SelectArrow = withParts<SelectPrimitive.Arrow.Props>(
  SelectPrimitive.Arrow,
  'arrow',
);

const SelectItem = withParts<SelectPrimitive.Item.Props>(
  SelectPrimitive.Item,
  'item',
);

const SelectItemText = withParts<SelectPrimitive.ItemText.Props>(
  SelectPrimitive.ItemText,
  'itemText',
);

const SelectItemIndicator = withParts<SelectPrimitive.ItemIndicator.Props>(
  SelectPrimitive.ItemIndicator,
  'itemIndicator',
);

const SelectGroup = withParts<SelectPrimitive.Group.Props>(
  SelectPrimitive.Group,
  'group',
);

const SelectGroupLabel = withParts<SelectPrimitive.GroupLabel.Props>(
  SelectPrimitive.GroupLabel,
  'groupLabel',
);

const SelectSeparator = withParts<SelectPrimitive.Separator.Props>(
  SelectPrimitive.Separator,
  'separator',
);

const SelectScrollUpArrow = withParts<SelectPrimitive.ScrollUpArrow.Props>(
  SelectPrimitive.ScrollUpArrow,
  'scrollUpArrow',
);

const SelectScrollDownArrow = withParts<SelectPrimitive.ScrollDownArrow.Props>(
  SelectPrimitive.ScrollDownArrow,
  'scrollDownArrow',
);

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
