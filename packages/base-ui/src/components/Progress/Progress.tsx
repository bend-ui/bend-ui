import React from 'react';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';

const ProgressRoot = ProgressPrimitive.Root;
const ProgressLabel = ProgressPrimitive.Label;
const ProgressValue = ProgressPrimitive.Value;
const ProgressTrack = ProgressPrimitive.Track;
const ProgressIndicator = ProgressPrimitive.Indicator;

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
