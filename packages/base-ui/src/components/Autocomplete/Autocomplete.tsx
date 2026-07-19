import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import { ChevronsUpDownIcon } from 'lucide-react';
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

const AutocompleteRoot = withSelectRootProvider(
  AutocompletePrimitive.Root,
) as unknown as typeof AutocompletePrimitive.Root;

const AutocompleteControl = withSelectContext(styled('div'), 'control');

const AutocompleteInput = withParts<AutocompletePrimitive.Input.Props>(
  AutocompletePrimitive.Input,
  'input',
);

const AutocompleteTrigger = withSelectContext(
  AutocompletePrimitive.Trigger,
  'trigger',
);

const AutocompleteIcon = withSelectContext(
  AutocompletePrimitive.Icon,
  'indicator',
);

const AutocompleteBackdrop = withParts<AutocompletePrimitive.Backdrop.Props>(
  AutocompletePrimitive.Backdrop,
  'backdrop',
);

const AutocompletePortal = AutocompletePrimitive.Portal;

const AutocompletePositioner = withDropdownProvider(
  AutocompletePrimitive.Positioner,
  'positioner',
);

const AutocompletePopup = withDropdownContext(
  AutocompletePrimitive.Popup,
  'content',
  {
    defaultProps: {
      style: {
        width: 'var(--anchor-width)',
      },
    },
  },
);

const AutocompleteArrow = withParts<AutocompletePrimitive.Arrow.Props>(
  AutocompletePrimitive.Arrow,
  'arrow',
);

const AutocompleteList = withParts<AutocompletePrimitive.List.Props>(
  AutocompletePrimitive.List,
  'list',
);

const AutocompleteItem = withDropdownContext(
  AutocompletePrimitive.Item,
  'item',
);

const AutocompleteGroup = withDropdownContext(
  AutocompletePrimitive.Group,
  'itemGroup',
);

const AutocompleteGroupLabel = withDropdownContext(
  AutocompletePrimitive.GroupLabel,
  'itemGroupLabel',
);

const AutocompleteSeparator = withParts<AutocompletePrimitive.Separator.Props>(
  AutocompletePrimitive.Separator,
  'separator',
);

export type AutocompleteProps<T = string> = AutocompletePrimitive.Root.Props<T>;

const Component = <Value extends string = string>(
  props: AutocompleteProps<Value>,
) => {
  const { items = [], ...rootProps } = props;
  return (
    <AutocompleteRoot items={items} {...rootProps}>
      <AutocompleteControl>
        <AutocompleteTrigger>
          <AutocompleteInput render={(props) => <StyledInput {...props} />} />
          <AutocompleteIcon>
            <ChevronsUpDownIcon />
          </AutocompleteIcon>
        </AutocompleteTrigger>
      </AutocompleteControl>
      <AutocompletePortal>
        <AutocompletePositioner sideOffset={8}>
          <AutocompletePopup>
            <AutocompleteList>
              <AutocompleteItem value="apple">Apple</AutocompleteItem>
              <AutocompleteItem value="banana">Banana</AutocompleteItem>
              <AutocompleteItem value="cherry">Cherry</AutocompleteItem>
            </AutocompleteList>
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
    </AutocompleteRoot>
  );
};

Component.displayName = 'Autocomplete';

export const Autocomplete = Object.assign(Component, {
  Root: AutocompleteRoot,
  Input: AutocompleteInput,
  Trigger: AutocompleteTrigger,
  Icon: AutocompleteIcon,
  Backdrop: AutocompleteBackdrop,
  Portal: AutocompletePortal,
  Positioner: AutocompletePositioner,
  Popup: AutocompletePopup,
  Arrow: AutocompleteArrow,
  List: AutocompleteList,
  Item: AutocompleteItem,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Separator: AutocompleteSeparator,
});
