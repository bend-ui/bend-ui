import React from 'react';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { progress } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(progress);

const ProgressRoot = withProvider(ProgressPrimitive.Root, 'root');
const ProgressLabel = withContext(ProgressPrimitive.Label, 'label');
const ProgressValue = withContext(ProgressPrimitive.Value, 'value');
const ProgressTrack = withContext(ProgressPrimitive.Track, 'track');
const ProgressIndicator = withContext(ProgressPrimitive.Indicator, 'indicator');

const Component = () => {
  const [value, setValue] = React.useState(20);

  // Simulate changes
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25)),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressRoot value={value}>
      <ProgressLabel>Export data</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
};

export const Progress = Object.assign(Component, {
  Root: ProgressRoot,
  Label: ProgressLabel,
  Value: ProgressValue,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
});
