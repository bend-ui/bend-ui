import * as React from 'react';
import { Fieldset as FieldsetPrimitive } from '@base-ui-components/react/fieldset';
import { Field } from '../Field';

const FieldsetRoot = FieldsetPrimitive.Root;
const FieldsetLegend = FieldsetPrimitive.Legend;

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
