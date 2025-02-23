import { forwardRef } from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox';
import { checkbox } from '@particles/styled-system/recipes';

const Root = CheckboxPrimitive.Root;
const Indicator = CheckboxPrimitive.Indicator;

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

const Component = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Checkbox = Object.assign(Component, {
  Root,
  Indicator,
});
