import { Meter as MeterPrimitive } from '@base-ui/react/meter';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { meter } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(meter);

const MeterRoot = withProvider(MeterPrimitive.Root, 'root');
const MeterLabel = withContext(MeterPrimitive.Label, 'label');
const MeterValue = withContext(MeterPrimitive.Value, 'value');
const MeterTrack = withContext(MeterPrimitive.Track, 'track');
const MeterIndicator = withContext(MeterPrimitive.Indicator, 'indicator');

export interface MeterProps extends MeterPrimitive.Root.Props {
  label?: React.ReactNode;
}

const Component = (props: MeterProps) => {
  const { label, ...rest } = props;
  return (
    <MeterRoot {...rest}>
      <MeterLabel>{label}</MeterLabel>
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
