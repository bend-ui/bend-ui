import { Meter as MeterPrimitive } from '@base-ui-components/react/meter';

const MeterRoot = MeterPrimitive.Root;
const MeterLabel = MeterPrimitive.Label;
const MeterValue = MeterPrimitive.Value;
const MeterTrack = MeterPrimitive.Track;
const MeterIndicator = MeterPrimitive.Indicator;

const Component = () => {
  return (
    <MeterRoot value={24}>
      <MeterLabel>Storage Used</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  );
};

export const Meter = Object.assign(Component, {
  Root: MeterRoot,
  Label: MeterLabel,
  Value: MeterValue,
  Track: MeterTrack,
  Indicator: MeterIndicator,
});
