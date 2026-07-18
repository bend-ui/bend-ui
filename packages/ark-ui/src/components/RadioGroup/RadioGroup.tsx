'use client';

import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/react';
import { radioGroup } from '@bend-ui/styled-system/recipes';
import type { JsxStyleProps } from '@bend-ui/styled-system/types';
import type { RadioGroupVariantProps } from '@bend-ui/styled-system/recipes';
import type { Assign } from '@ark-ui/react';
import { withParts, withRecipe } from '@bend-ui/core';

export interface RootProps
  extends
    Assign<JsxStyleProps, RadioGroupPrimitive.RootProps>,
    RadioGroupVariantProps {}

const Root = withRecipe<RootProps>(
  RadioGroupPrimitive.Root,
  radioGroup,
  'root',
);

const Indicator = withParts<RadioGroupPrimitive.IndicatorProps>(
  RadioGroupPrimitive.Indicator,
  'indicator',
);

const ItemControl = withParts<RadioGroupPrimitive.ItemControlProps>(
  RadioGroupPrimitive.ItemControl,
  'itemControl',
);

const Item = withParts<RadioGroupPrimitive.ItemProps>(
  RadioGroupPrimitive.Item,
  'item',
);

const ItemText = withParts<RadioGroupPrimitive.ItemTextProps>(
  RadioGroupPrimitive.ItemText,
  'itemText',
);

const ItemHiddenInput = withParts<RadioGroupPrimitive.ItemHiddenInputProps>(
  RadioGroupPrimitive.ItemHiddenInput,
  'itemHiddenInput',
);

const Label = withParts<RadioGroupPrimitive.LabelProps>(
  RadioGroupPrimitive.Label,
  'label',
);

export interface RadioGroupProps {
  options: {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
  }[];
}

const Component = (props: RadioGroupProps) => {
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
};

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
