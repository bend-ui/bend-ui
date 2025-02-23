import { forwardRef } from 'react';
import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui-components/react/checkbox-group';

const Root = CheckboxGroupPrimitive;

export type CheckboxGroupProps = React.ComponentPropsWithoutRef<
  typeof CheckboxGroupPrimitive
>;

const Component = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    return <Root ref={ref} {...props} />;
  },
);

export const CheckboxGroup = Object.assign(Component, {
  Root,
});
