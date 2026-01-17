import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import { ChevronsUpDownIcon } from 'lucide-react';
import { withParts, withRecipe } from '@particles/react';
import { selectDropdown, select } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import { HTMLParticlesProps } from '@particles/react';
import { Input as StyledInput } from '@particles/react';

const AutocompleteRoot = withRecipe<AutocompletePrimitive.Root.Props<string>>(
  AutocompletePrimitive.Root,
  select,
  'root',
) as unknown as typeof AutocompletePrimitive.Root;

const AutocompleteControl = withParts<HTMLParticlesProps<'div'>>(
  styled('div'),
  'control',
);

const AutocompleteInput = withParts<AutocompletePrimitive.Input.Props>(
  AutocompletePrimitive.Input,
  'input',
);

const AutocompleteTrigger = withParts<AutocompletePrimitive.Trigger.Props>(
  AutocompletePrimitive.Trigger,
  'trigger',
);

const AutocompleteIcon = withParts<AutocompletePrimitive.Icon.Props>(
  AutocompletePrimitive.Icon,
  'icon',
);

const AutocompleteBackdrop = withParts<AutocompletePrimitive.Backdrop.Props>(
  AutocompletePrimitive.Backdrop,
  'backdrop',
);

const AutocompletePortal = AutocompletePrimitive.Portal;

const AutocompletePositioner =
  withRecipe<AutocompletePrimitive.Positioner.Props>(
    AutocompletePrimitive.Positioner,
    selectDropdown,
    'root',
  );

const AutocompletePopup = withParts<AutocompletePrimitive.Popup.Props>(
  AutocompletePrimitive.Popup,
  'content',
  {
    style: {
      width: 'var(--anchor-width)',
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

const AutocompleteItem = withParts<AutocompletePrimitive.Item.Props>(
  AutocompletePrimitive.Item,
  'item',
);

const AutocompleteGroup = withParts<AutocompletePrimitive.Group.Props>(
  AutocompletePrimitive.Group,
  'group',
);

const AutocompleteGroupLabel =
  withParts<AutocompletePrimitive.GroupLabel.Props>(
    AutocompletePrimitive.GroupLabel,
    'groupLabel',
  );

const AutocompleteSeparator = withParts<AutocompletePrimitive.Separator.Props>(
  AutocompletePrimitive.Separator,
  'separator',
);

export type AutocompleteProps<T = string> =
  AutocompletePrimitive.Root.Props<T>;

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
