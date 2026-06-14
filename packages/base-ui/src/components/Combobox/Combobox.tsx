import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { withParts, withRecipe } from '@bend-ui/react';
import { selectDropdown, select } from '@bend-ui/styled-system/recipes';
import { styled } from '@bend-ui/styled-system/jsx';
import { HTMLBendUIProps } from '@bend-ui/react';
import { Input as StyledInput } from '@bend-ui/react';

const ComboboxRoot = withRecipe<ComboboxPrimitive.Root.Props<string>>(
  ComboboxPrimitive.Root,
  select,
  'root',
) as unknown as typeof ComboboxPrimitive.Root;

const ComboboxControl = withParts<HTMLBendUIProps<'div'>>(
  styled('div'),
  'control',
);

const ComboboxInput = withParts<ComboboxPrimitive.Input.Props>(
  ComboboxPrimitive.Input,
  'input',
);

const ComboboxTrigger = withParts<ComboboxPrimitive.Trigger.Props>(
  ComboboxPrimitive.Trigger,
  'trigger',
);

const ComboboxIcon = withParts<ComboboxPrimitive.Icon.Props>(
  ComboboxPrimitive.Icon,
  'icon',
);

const ComboboxBackdrop = withParts<ComboboxPrimitive.Backdrop.Props>(
  ComboboxPrimitive.Backdrop,
  'backdrop',
);

const ComboboxPortal = ComboboxPrimitive.Portal;

const ComboboxPositioner = withRecipe<ComboboxPrimitive.Positioner.Props>(
  ComboboxPrimitive.Positioner,
  selectDropdown,
  'root',
);

const ComboboxPopup = withParts<ComboboxPrimitive.Popup.Props>(
  ComboboxPrimitive.Popup,
  'content',
  {
    style: {
      width: 'var(--anchor-width)',
    },
  },
);

const ComboboxArrow = withParts<ComboboxPrimitive.Arrow.Props>(
  ComboboxPrimitive.Arrow,
  'arrow',
);

const ComboboxList = withParts<ComboboxPrimitive.List.Props>(
  ComboboxPrimitive.List,
  'list',
);

const ComboboxItem = withParts<ComboboxPrimitive.Item.Props>(
  ComboboxPrimitive.Item,
  'item',
);

const ComboboxItemText = withParts<HTMLBendUIProps<'span'>>(
  styled('span'),
  'itemText',
);

const ComboboxItemIndicator = withParts<ComboboxPrimitive.ItemIndicator.Props>(
  ComboboxPrimitive.ItemIndicator,
  'itemIndicator',
);

const ComboboxGroup = withParts<ComboboxPrimitive.Group.Props>(
  ComboboxPrimitive.Group,
  'group',
);

const ComboboxGroupLabel = withParts<ComboboxPrimitive.GroupLabel.Props>(
  ComboboxPrimitive.GroupLabel,
  'groupLabel',
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
