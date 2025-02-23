import { forwardRef } from 'react';
import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch';
import { switchRecipe } from '@particles/styled-system/recipes';

const Root = SwitchPrimitive.Root;
const Thumb = SwitchPrimitive.Thumb;

export type SwitchProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Switch = Object.assign(Component, {
  Root,
  Thumb,
});
