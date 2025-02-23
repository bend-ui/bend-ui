import { forwardRef } from 'react';
import { Radio as RadioPrimitive } from '@base-ui-components/react/radio';
import { radio } from '@particles/styled-system/recipes';

const Root = RadioPrimitive.Root;
const Indicator = RadioPrimitive.Indicator;

export type RadioProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Radio = Object.assign(Component, {
  Root,
  Indicator,
});
