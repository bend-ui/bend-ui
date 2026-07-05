import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts, withRecipe } from '@bend-ui/react/factory';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { styled } from '@bend-ui/styled-system/jsx';
import { HTMLBendUIProps } from '@bend-ui/react/factory';

const SelectRoot = withRecipe<SelectPrimitive.Root.Props<string>>(
  SelectPrimitive.Root,
  select,
  'root',
) as unknown as typeof SelectPrimitive.Root;

const SelectControl = withParts<HTMLBendUIProps<'div'>>(
  styled('div'),
  'control',
);

const SelectTrigger = withParts<SelectPrimitive.Trigger.Props>(
  SelectPrimitive.Trigger,
  'trigger',
);

const SelectValue = withParts<SelectPrimitive.Value.Props>(
  SelectPrimitive.Value,
  'valueText',
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

const SelectPositioner = withRecipe<SelectPrimitive.Positioner.Props>(
  SelectPrimitive.Positioner,
  selectDropdown,
  'root',
);

const SelectPopup = withParts<SelectPrimitive.Popup.Props>(
  SelectPrimitive.Popup,
  'content',
  {
    style: {
      width: 'var(--anchor-width)',
    },
  },
);

const SelectArrow = withParts<SelectPrimitive.Arrow.Props>(
  SelectPrimitive.Arrow,
  'arrow',
);

const SelectList = withParts<SelectPrimitive.List.Props>(
  SelectPrimitive.List,
  'list',
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

export type SelectProps<
  T,
  Multiple extends boolean | undefined = false,
> = SelectPrimitive.Root.Props<T, Multiple>;

const Component = <Value, Multiple extends boolean | undefined = false>(
  props: SelectProps<Value, Multiple>,
) => {
  return (
    <SelectRoot {...props}>
      <SelectControl>
        <SelectTrigger>
          <SelectValue />
          <SelectIcon>
            <ChevronsUpDownIcon />
          </SelectIcon>
        </SelectTrigger>
      </SelectControl>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectScrollUpArrow />
          <SelectPopup>
            <SelectList>
              <SelectItem value="sans">
                <SelectItemText>Sans-serif</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="serif">
                <SelectItemText>Serif</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="mono">
                <SelectItemText>Monospace</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="cursive">
                <SelectItemText>Cursive</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectList>
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
  List: SelectList,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  ScrollUpArrow: SelectScrollUpArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  Separator: SelectSeparator,
});
