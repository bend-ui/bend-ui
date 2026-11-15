import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui/react/checkbox-group';

export type CheckboxGroupProps = CheckboxGroupPrimitive.Props;

const CheckboxGroupRoot = (props: CheckboxGroupProps) => (
  <CheckboxGroupPrimitive {...props} />
);

Object.assign(CheckboxGroupRoot, { displayName: 'CheckboxGroup' });

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
});
