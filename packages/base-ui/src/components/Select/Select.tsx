import type { SlotRecipeComponent } from '@bend-ui/core';
import type { ReactNode, JSX } from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts } from '@bend-ui/core';
import {
  selectDropdown,
  select,
  type SelectVariantProps,
} from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';

const {
  withRootProvider: withSelectRootProvider,
  withContext: withSelectContext,
} = createSlotRecipeContext(select);
const { withProvider: withDropdownProvider, withContext: withDropdownContext } =
  createSlotRecipeContext(selectDropdown);

export type SelectRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> = SelectPrimitive.Root.Props<Value, Multiple> & SelectVariantProps;

const SelectRoot = withSelectRootProvider(SelectPrimitive.Root) as unknown as <
  Value,
  Multiple extends boolean | undefined = false,
>(
  props: SelectRootProps<Value, Multiple>,
) => JSX.Element;

const SelectControl: SlotRecipeComponent<'div'> = withSelectContext(
  styled('div'),
  'control',
);

const SelectTrigger: SlotRecipeComponent<typeof SelectPrimitive.Trigger> =
  withSelectContext(SelectPrimitive.Trigger, 'trigger');

const SelectValue: SlotRecipeComponent<typeof SelectPrimitive.Value> =
  withSelectContext(SelectPrimitive.Value, 'valueText');

const SelectIcon: SlotRecipeComponent<typeof SelectPrimitive.Icon> =
  withSelectContext(SelectPrimitive.Icon, 'indicator');

const SelectBackdrop = withParts<SelectPrimitive.Backdrop.Props>(
  SelectPrimitive.Backdrop,
  'backdrop',
);

const SelectPortal = SelectPrimitive.Portal;

const SelectPositioner: SlotRecipeComponent<
  typeof SelectPrimitive.Positioner,
  (typeof selectDropdown)['__type']
> = withDropdownProvider(SelectPrimitive.Positioner, 'positioner');

const SelectPopup: SlotRecipeComponent<typeof SelectPrimitive.Popup> =
  withDropdownContext(SelectPrimitive.Popup, 'content', {
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

const SelectItem: SlotRecipeComponent<typeof SelectPrimitive.Item> =
  withDropdownContext(SelectPrimitive.Item, 'item');

const SelectItemText: SlotRecipeComponent<typeof SelectPrimitive.ItemText> =
  withDropdownContext(SelectPrimitive.ItemText, 'itemText');

const SelectItemIndicator: SlotRecipeComponent<
  typeof SelectPrimitive.ItemIndicator
> = withDropdownContext(SelectPrimitive.ItemIndicator, 'itemIndicator');

const SelectGroup: SlotRecipeComponent<typeof SelectPrimitive.Group> =
  withDropdownContext(SelectPrimitive.Group, 'itemGroup');

const SelectGroupLabel: SlotRecipeComponent<typeof SelectPrimitive.GroupLabel> =
  withDropdownContext(SelectPrimitive.GroupLabel, 'itemGroupLabel');

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

export interface SelectOption<Value> {
  value: Value;
  label: ReactNode;
  disabled?: boolean;
}

/** Flat data-driven convenience API; use compound parts for groups/custom content. */
export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = Omit<SelectRootProps<Value, Multiple>, 'items' | 'children'> & {
  items: ReadonlyArray<SelectOption<Value>>;
  'aria-label'?: string;
  'aria-labelledby'?: string;
};

const Component = <Value, Multiple extends boolean | undefined = false>({
  items,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: SelectProps<Value, Multiple>) => (
  <SelectRoot {...props} items={items}>
    <SelectControl>
      <SelectTrigger aria-label={ariaLabel} aria-labelledby={ariaLabelledby}>
        <SelectValue />
        <SelectIcon>
          <ChevronsUpDownIcon />
        </SelectIcon>
      </SelectTrigger>
    </SelectControl>
    <SelectPortal>
      <SelectPositioner sideOffset={8} alignItemWithTrigger={false}>
        <SelectPopup>
          <SelectList>
            {items.map((item, index) => (
              <SelectItem
                key={index}
                value={item.value}
                disabled={item.disabled}
              >
                <SelectItemText>{item.label}</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </SelectPositioner>
    </SelectPortal>
  </SelectRoot>
);

Object.assign(Component, { displayName: 'Select' });

export const Select = Object.assign(Component, {
  Root: SelectRoot,
  Control: SelectControl,
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
