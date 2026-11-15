import type { ComponentProps, ReactNode } from 'react';
import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { fieldset } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(fieldset);

const FieldsetRoot = withProvider(FieldsetPrimitive.Root, 'root');
const FieldsetLegend = withContext(FieldsetPrimitive.Legend, 'legend');

export interface FieldsetProps
  extends Omit<ComponentProps<typeof FieldsetRoot>, 'children'> {
  legend?: ReactNode;
  children?: ReactNode;
}

/** A fieldset with an optional legend followed by its fields. */
const Component = (props: FieldsetProps) => {
  const { legend, children, ...rest } = props;
  return (
    <FieldsetRoot {...rest}>
      {legend != null && <FieldsetLegend>{legend}</FieldsetLegend>}
      {children}
    </FieldsetRoot>
  );
};

Object.assign(Component, { displayName: 'Fieldset' });

export const Fieldset = Object.assign(Component, {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
});
