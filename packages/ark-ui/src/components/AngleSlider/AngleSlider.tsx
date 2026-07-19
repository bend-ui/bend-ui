import { AngleSlider as ArkAngleSlider } from '@ark-ui/react';
import { angleSlider } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(angleSlider);

export interface AngleSliderRootProps extends ArkAngleSlider.RootProps {
  children?: React.ReactNode;
}

const Root = withProvider(ArkAngleSlider.Root, 'root');

export type AngleSliderLabelProps = ArkAngleSlider.LabelProps;

const Label = withContext(ArkAngleSlider.Label, 'label');

export type AngleSliderThumbProps = ArkAngleSlider.ThumbProps;

const Thumb = withContext(ArkAngleSlider.Thumb, 'thumb');

export type AngleSliderMarkerGroupProps = ArkAngleSlider.MarkerGroupProps;

const MarkerGroup = withContext(ArkAngleSlider.MarkerGroup, 'markerGroup');

export type AngleSliderMarkerProps = ArkAngleSlider.MarkerProps;

const Marker = withContext(ArkAngleSlider.Marker, 'marker');

export type AngleSliderValueTextProps = ArkAngleSlider.ValueTextProps;

const ValueText = ArkAngleSlider.ValueText;

export type AngleSliderHiddenInputProps = ArkAngleSlider.HiddenInputProps;

const HiddenInput = ArkAngleSlider.HiddenInput;

export type AngleSliderControlProps = ArkAngleSlider.ControlProps;

const Control = withContext(ArkAngleSlider.Control, 'control');

const Component = () => {
  return (
    <Root>
      <Label>Wind direction</Label>
      <Control>
        <Thumb />
        <MarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((value, i) => (
            <Marker key={i} value={value} />
          ))}
        </MarkerGroup>
      </Control>
      <ValueText />
      <HiddenInput />
    </Root>
  );
};

export const AngleSlider = Object.assign(Component, {
  Root,
  Label,
  Control,
  Thumb,
});
