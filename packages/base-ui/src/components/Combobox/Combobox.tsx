import type { SlotRecipeComponent } from '@bend-ui/core';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts } from '@bend-ui/core';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';
import { Input as StyledInput } from '../Input';

const {
  withRootProvider: withSelectRootProvider,
  withContext: withSelectContext,
} = createSlotRecipeContext(select);
const { withProvider: withDropdownProvider, withContext: withDropdownContext } =
  createSlotRecipeContext(selectDropdown);

const ComboboxRoot = withSelectRootProvider(
  ComboboxPrimitive.Root,
) as unknown as typeof ComboboxPrimitive.Root;

const ComboboxControl: SlotRecipeComponent<'div'> = withSelectContext(
  styled('div'),
  'control',
);

const ComboboxInput = withParts<ComboboxPrimitive.Input.Props>(
  ComboboxPrimitive.Input,
  'input',
);

const ComboboxTrigger: SlotRecipeComponent<typeof ComboboxPrimitive.Trigger> =
  withSelectContext(ComboboxPrimitive.Trigger, 'trigger');

const ComboboxIcon: SlotRecipeComponent<typeof ComboboxPrimitive.Icon> =
  withSelectContext(ComboboxPrimitive.Icon, 'indicator');

const ComboboxBackdrop = withParts<ComboboxPrimitive.Backdrop.Props>(
  ComboboxPrimitive.Backdrop,
  'backdrop',
);

const ComboboxPortal = ComboboxPrimitive.Portal;

const ComboboxPositioner: SlotRecipeComponent<
  typeof ComboboxPrimitive.Positioner,
  (typeof selectDropdown)['__type']
> = withDropdownProvider(ComboboxPrimitive.Positioner, 'positioner');

const ComboboxPopup: SlotRecipeComponent<typeof ComboboxPrimitive.Popup> =
  withDropdownContext(ComboboxPrimitive.Popup, 'content', {
    defaultProps: {
      style: {
        width: 'var(--anchor-width)',
      },
    },
  });

const ComboboxArrow = withParts<ComboboxPrimitive.Arrow.Props>(
  ComboboxPrimitive.Arrow,
  'arrow',
);

const ComboboxList = withParts<ComboboxPrimitive.List.Props>(
  ComboboxPrimitive.List,
  'list',
);

const ComboboxItem: SlotRecipeComponent<typeof ComboboxPrimitive.Item> =
  withDropdownContext(ComboboxPrimitive.Item, 'item');

const ComboboxItemText: SlotRecipeComponent<'span'> = withDropdownContext(
  styled('span'),
  'itemText',
);

const ComboboxItemIndicator: SlotRecipeComponent<
  typeof ComboboxPrimitive.ItemIndicator
> = withDropdownContext(ComboboxPrimitive.ItemIndicator, 'itemIndicator');

const ComboboxGroup: SlotRecipeComponent<typeof ComboboxPrimitive.Group> =
  withDropdownContext(ComboboxPrimitive.Group, 'itemGroup');

const ComboboxGroupLabel: SlotRecipeComponent<
  typeof ComboboxPrimitive.GroupLabel
> = withDropdownContext(ComboboxPrimitive.GroupLabel, 'itemGroupLabel');

const ComboboxSeparator = withParts<ComboboxPrimitive.Separator.Props>(
  ComboboxPrimitive.Separator,
  'separator',
);

export type ComboboxProps<
  T,
  Multiple extends boolean | undefined = false,
> = ComboboxPrimitive.Root.Props<T, Multiple>;

const Component = <Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>,
) => {
  return (
    <ComboboxRoot {...props}>
      <ComboboxControl>
        <ComboboxTrigger>
          <ComboboxInput render={(props) => <StyledInput {...props} />} />
          <ComboboxIcon>
            <ChevronsUpDownIcon />
          </ComboboxIcon>
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxPositioner sideOffset={8}>
          <ComboboxPopup>
            <ComboboxList>
              <ComboboxItem value="apple">
                <ComboboxItemText>Apple</ComboboxItemText>
                <ComboboxItemIndicator>
                  <CheckIcon />
                </ComboboxItemIndicator>
              </ComboboxItem>
              <ComboboxItem value="banana">
                <ComboboxItemText>Banana</ComboboxItemText>
                <ComboboxItemIndicator>
                  <CheckIcon />
                </ComboboxItemIndicator>
              </ComboboxItem>
              <ComboboxItem value="cherry">
                <ComboboxItemText>Cherry</ComboboxItemText>
                <ComboboxItemIndicator>
                  <CheckIcon />
                </ComboboxItemIndicator>
              </ComboboxItem>
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </ComboboxRoot>
  );
};

Object.assign(Component, { displayName: 'Combobox' });

export const Combobox = Object.assign(Component, {
  Root: ComboboxRoot,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  Icon: ComboboxIcon,
  Backdrop: ComboboxBackdrop,
  Portal: ComboboxPortal,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  Arrow: ComboboxArrow,
  List: ComboboxList,
  Item: ComboboxItem,
  ItemText: ComboboxItemText,
  ItemIndicator: ComboboxItemIndicator,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Separator: ComboboxSeparator,
});
