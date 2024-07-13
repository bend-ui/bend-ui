import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/react';
import { radioGroup } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { RadioGroupVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(radioGroup);

export interface RootProps
  extends Assign<JsxStyleProps, RadioGroupPrimitive.RootProps>,
    RadioGroupVariantProps {}

const Root = withProvider<HTMLDivElement, RootProps>(
  RadioGroupPrimitive.Root,
  'root',
);

const Indicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, RadioGroupPrimitive.IndicatorProps>
>(RadioGroupPrimitive.Indicator, 'indicator');

const ItemControl = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, RadioGroupPrimitive.ItemControlProps>
>(RadioGroupPrimitive.ItemControl, 'itemControl');

const Item = withContext<
  HTMLLabelElement,
  Assign<JsxStyleProps, RadioGroupPrimitive.ItemProps>
>(RadioGroupPrimitive.Item, 'item');

const ItemText = withContext<
  HTMLSpanElement,
  Assign<JsxStyleProps, RadioGroupPrimitive.ItemTextProps>
>(RadioGroupPrimitive.ItemText, 'itemText');

const ItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;

const Label = withContext<
  HTMLLabelElement,
  Assign<JsxStyleProps, RadioGroupPrimitive.LabelProps>
>(RadioGroupPrimitive.Label, 'label');

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
