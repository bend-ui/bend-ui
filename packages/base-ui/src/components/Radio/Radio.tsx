import * as React from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { radioGroup } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(radioGroup);

const RadioGroupRoot = withProvider(RadioGroupPrimitive, 'root');
const RadioRoot = withContext(RadioPrimitive.Root, 'itemControl');
const RadioIndicator = withContext(RadioPrimitive.Indicator, 'indicator');

const Component = () => {
  return (
    <RadioGroupRoot aria-labelledby="apples-caption" defaultValue="fuji-apple">
      <div id="apples-caption">Best apple</div>

      <label>
        <RadioRoot value="fuji-apple">
          <RadioIndicator />
        </RadioRoot>
        Fuji
      </label>

      <label>
        <RadioRoot value="gala-apple">
          <RadioIndicator />
        </RadioRoot>
        Gala
      </label>

      <label>
        <RadioRoot value="granny-smith-apple">
          <RadioIndicator />
        </RadioRoot>
        Granny Smith
      </label>
    </RadioGroupRoot>
  );
};

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
});

export const Radio = Object.assign(Component, {
  Root: RadioRoot,
  Indicator: RadioIndicator,
});
