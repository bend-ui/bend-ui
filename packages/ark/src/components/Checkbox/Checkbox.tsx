import { Checkbox as CheckboxPrimitive } from '@ark-ui/react';
import { checkbox } from '@particles/styled-system/recipes';
import { LuCheck } from 'react-icons/lu';
import { createStyleContext } from '../../utils';
import type { CheckboxProps } from './Checkbox.types';

const { withProvider, withContext } = createStyleContext(checkbox);

const Root = withProvider<HTMLLabelElement, CheckboxPrimitive.RootProps>(
  CheckboxPrimitive.Root,
  'root',
);

const Label = withContext<HTMLSpanElement, CheckboxPrimitive.LabelProps>(
  CheckboxPrimitive.Label,
  'label',
);

const Control = withContext<HTMLDivElement, CheckboxPrimitive.ControlProps>(
  CheckboxPrimitive.Control,
  'control',
);

const Indicator = withContext<HTMLDivElement, CheckboxPrimitive.IndicatorProps>(
  CheckboxPrimitive.Indicator,
  'indicator',
);

const HiddenInput = CheckboxPrimitive.HiddenInput;

const Component = (props: CheckboxProps) => (
  <Root {...props}>
    <Control>
      <Indicator>
        <LuCheck />
      </Indicator>
    </Control>
    <HiddenInput />
    <Label>Checkbox</Label>
  </Root>
);

Component.displayName = 'Checkbox';

export const Checkbox = Object.assign(Component, {
  Root,
  Label,
  Control,
  Indicator,
  HiddenInput,
});
