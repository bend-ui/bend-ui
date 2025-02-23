import { forwardRef } from 'react';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui-components/react/toggle-group';
import { toggleGroup } from '@particles/styled-system/recipes';

const Root = ToggleGroupPrimitive;

export type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, ToggleGroupProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const ToggleGroup = Object.assign(Component, {
  Root,
});
