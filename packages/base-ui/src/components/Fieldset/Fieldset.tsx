import { forwardRef } from 'react';
import { Fieldset as FieldsetPrimitive } from '@base-ui-components/react/fieldset';
import { fieldset } from '@particles/styled-system/recipes';

const Root = FieldsetPrimitive.Root;
const Legend = FieldsetPrimitive.Legend;

export type FieldsetProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, FieldsetProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Fieldset = Object.assign(Component, {
  Root,
  Legend,
});
