import { forwardRef } from 'react';
import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle';
import { toggle } from '@particles/styled-system/recipes';

const Root = TogglePrimitive;

export type ToggleProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, ToggleProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Toggle = Object.assign(Component, {
  Root,
});
