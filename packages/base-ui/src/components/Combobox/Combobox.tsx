import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts } from '@bend-ui/core';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { createStyleContext, styled } from '@bend-ui/styled-system/jsx';
import { Input as StyledInput } from '../Input';

const {
  withRootProvider: withSelectRootProvider,
  withContext: withSelectContext,
} = createStyleContext(select);
const { withProvider: withDropdownProvider, withContext: withDropdownContext } =
  createStyleContext(selectDropdown);

const ComboboxRoot = withSelectRootProvider(
  ComboboxPrimitive.Root,
) as unknown as typeof ComboboxPrimitive.Root;

const ComboboxControl = withSelectContext(styled('div'), 'control');

const ComboboxInput = withParts<ComboboxPrimitive.Input.Props>(
  ComboboxPrimitive.Input,
  'input',
);

const ComboboxTrigger = withSelectContext(ComboboxPrimitive.Trigger, 'trigger');

const ComboboxIcon = withSelectContext(ComboboxPrimitive.Icon, 'indicator');

const ComboboxBackdrop = withParts<ComboboxPrimitive.Backdrop.Props>(
  ComboboxPrimitive.Backdrop,
  'backdrop',
);

const ComboboxPortal = ComboboxPrimitive.Portal;

const ComboboxPositioner = withDropdownProvider(
  ComboboxPrimitive.Positioner,
  'positioner',
);

const ComboboxPopup = withDropdownContext(ComboboxPrimitive.Popup, 'content', {
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

const ComboboxItem = withDropdownContext(ComboboxPrimitive.Item, 'item');

const ComboboxItemText = withDropdownContext(styled('span'), 'itemText');

const ComboboxItemIndicator = withDropdownContext(
  ComboboxPrimitive.ItemIndicator,
  'itemIndicator',
);

const ComboboxGroup = withDropdownContext(ComboboxPrimitive.Group, 'itemGroup');

const ComboboxGroupLabel = withDropdownContext(
  ComboboxPrimitive.GroupLabel,
  'itemGroupLabel',
);

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

Component.displayName = 'Combobox';

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
