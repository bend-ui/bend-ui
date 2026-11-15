import type { ComponentProps, ReactNode } from 'react';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { progress } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(progress);

const ProgressRoot = withProvider(ProgressPrimitive.Root, 'root');
const ProgressLabel = withContext(ProgressPrimitive.Label, 'label');
const ProgressValue = withContext(ProgressPrimitive.Value, 'value');
const ProgressTrack = withContext(ProgressPrimitive.Track, 'track');
const ProgressIndicator = withContext(ProgressPrimitive.Indicator, 'indicator');

export interface ProgressProps
  extends Omit<ComponentProps<typeof ProgressRoot>, 'children'> {
  label?: ReactNode;
}

/** Label, value and track for a progress value; use the parts for custom layouts. */
const Component = (props: ProgressProps) => {
  const { label, ...rest } = props;
  return (
    <ProgressRoot {...rest}>
      {label != null && <ProgressLabel>{label}</ProgressLabel>}
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
};

Object.assign(Component, { displayName: 'Progress' });

export const Progress = Object.assign(Component, {
  Root: ProgressRoot,
  Label: ProgressLabel,
  Value: ProgressValue,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
});
