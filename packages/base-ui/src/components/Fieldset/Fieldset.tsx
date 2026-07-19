import * as React from 'react';
import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { fieldset } from '@bend-ui/styled-system/recipes';
import { Field } from '../Field';

const { withProvider, withContext } = createStyleContext(fieldset);

const FieldsetRoot = withProvider(FieldsetPrimitive.Root, 'root');
const FieldsetLegend = withContext(FieldsetPrimitive.Legend, 'legend');

const Component = () => {
  return (
    <FieldsetRoot>
      <FieldsetLegend>Billing details</FieldsetLegend>

      <Field.Root>
        <Field.Label>Company</Field.Label>
        <Field.Control placeholder="Enter company name" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Tax ID</Field.Label>
        <Field.Control placeholder="Enter fiscal number" />
      </Field.Root>
    </FieldsetRoot>
  );
};

export const Fieldset = Object.assign(Component, {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
});
