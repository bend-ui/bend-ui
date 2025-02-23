import { forwardRef } from 'react';
import { Progress as ProgressPrimitive } from '@base-ui-components/react/progress';
import { progress } from '@particles/styled-system/recipes';

const Root = ProgressPrimitive.Root;
const Track = ProgressPrimitive.Track;
const Indicator = ProgressPrimitive.Indicator;
const Value = ProgressPrimitive.Value;

export type ProgressProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Progress = Object.assign(Component, {
  Root,
  Track,
  Indicator,
  Value,
});
