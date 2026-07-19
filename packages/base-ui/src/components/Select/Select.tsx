import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts } from '@bend-ui/core';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { createStyleContext, styled } from '@bend-ui/styled-system/jsx';

const {
  withRootProvider: withSelectRootProvider,
  withContext: withSelectContext,
} = createStyleContext(select);
const { withProvider: withDropdownProvider, withContext: withDropdownContext } =
  createStyleContext(selectDropdown);

const SelectRoot = withSelectRootProvider(
  SelectPrimitive.Root,
) as unknown as typeof SelectPrimitive.Root;

const SelectControl = withSelectContext(styled('div'), 'control');

const SelectTrigger = withSelectContext(SelectPrimitive.Trigger, 'trigger');

const SelectValue = withSelectContext(SelectPrimitive.Value, 'valueText');

const SelectIcon = withSelectContext(SelectPrimitive.Icon, 'indicator');

const SelectBackdrop = withParts<SelectPrimitive.Backdrop.Props>(
  SelectPrimitive.Backdrop,
  'backdrop',
);

const SelectPortal = SelectPrimitive.Portal;

const SelectPositioner = withDropdownProvider(
  SelectPrimitive.Positioner,
  'positioner',
);

const SelectPopup = withDropdownContext(SelectPrimitive.Popup, 'content', {
  defaultProps: {
    style: {
      width: 'var(--anchor-width)',
    },
  },
});

const SelectArrow = withParts<SelectPrimitive.Arrow.Props>(
  SelectPrimitive.Arrow,
  'arrow',
);

const SelectList = withParts<SelectPrimitive.List.Props>(
  SelectPrimitive.List,
  'list',
);

const SelectItem = withDropdownContext(SelectPrimitive.Item, 'item');

const SelectItemText = withDropdownContext(
  SelectPrimitive.ItemText,
  'itemText',
);

const SelectItemIndicator = withDropdownContext(
  SelectPrimitive.ItemIndicator,
  'itemIndicator',
);

const SelectGroup = withDropdownContext(SelectPrimitive.Group, 'itemGroup');

const SelectGroupLabel = withDropdownContext(
  SelectPrimitive.GroupLabel,
  'itemGroupLabel',
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
