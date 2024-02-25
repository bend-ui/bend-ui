import { Checkbox as CheckboxPrimitive } from '@ark-ui/react';
import { checkbox } from '@particles/styled-system/recipes';
import { LuCheck } from 'react-icons/lu';
import { forwardRef } from 'react';
import { createStyleContext } from '../../utils';
import type { ElementRef } from 'react';
import type { CheckboxProps } from './Checkbox.types';

const { withProvider, withContext } = createStyleContext(checkbox);

const Root = withProvider(CheckboxPrimitive.Root, 'root');

const Label = withContext(CheckboxPrimitive.Label, 'label');

const Control = withContext(CheckboxPrimitive.Control, 'control');

const Indicator = withContext(CheckboxPrimitive.Indicator, 'indicator');

const Component = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  (props, ref) => (
    <Root ref={ref} {...props}>
      <Control>
        <Indicator>
          <LuCheck />
        </Indicator>
      </Control>
      <Label>Checkbox</Label>
    </Root>
  ),
);

Component.displayName = 'Checkbox';

export const Checkbox = Object.assign(Component, {
  Root,
  Label,
  Control,
  Indicator,
});
