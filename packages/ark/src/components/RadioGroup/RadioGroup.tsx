import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/react';
import { radioGroup } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { RadioGroupVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '@particles/styled-system/jsx';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(radioGroup);

export interface RootProps
  extends Assign<JsxStyleProps, RadioGroupPrimitive.RootProps>,
    RadioGroupVariantProps {}

const Root = withProvider(RadioGroupPrimitive.Root, 'root');

const Indicator = withContext(RadioGroupPrimitive.Indicator, 'indicator');

const ItemControl = withContext(RadioGroupPrimitive.ItemControl, 'itemControl');

const Item = withContext(RadioGroupPrimitive.Item, 'item');

const ItemText = withContext(RadioGroupPrimitive.ItemText, 'itemText');

const ItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;

const Label = withContext(RadioGroupPrimitive.Label, 'label');

export interface RadioGroupProps {
  options: {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
  }[];
}

const Component = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { options } = props;
  return (
    <Root>
      {options.map((option) => (
        <Item key={option.id} disabled={option.disabled} value={option.value}>
          <ItemControl />
          <ItemText>{option.label}</ItemText>
          <ItemHiddenInput />
        </Item>
      ))}
    </Root>
  );
});

Component.displayName = 'RadioGroup';

export const RadioGroup = Object.assign(Component, {
  Root,
  Indicator,
  ItemControl,
  Item,
  ItemText,
  ItemHiddenInput,
  Label,
});
