import { AngleSlider as ArkAngleSlider } from '@ark-ui/react';
import { withParts, withRecipe } from '../../utils';
import { angleSlider } from '@bend-ui/styled-system/recipes';

export interface AngleSliderRootProps extends ArkAngleSlider.RootProps {
  children?: React.ReactNode;
}

const Root = withRecipe<AngleSliderRootProps>(
  ArkAngleSlider.Root,
  angleSlider,
  'root',
);

export type AngleSliderLabelProps = ArkAngleSlider.LabelProps;

const Label = withParts<AngleSliderLabelProps>(ArkAngleSlider.Label, 'label');

export type AngleSliderThumbProps = ArkAngleSlider.ThumbProps;

const Thumb = withParts<AngleSliderThumbProps>(ArkAngleSlider.Thumb, 'thumb');

export type AngleSliderMarkerGroupProps = ArkAngleSlider.MarkerGroupProps;

const MarkerGroup = withParts<AngleSliderMarkerGroupProps>(
  ArkAngleSlider.MarkerGroup,
  'marker-group',
);

export type AngleSliderMarkerProps = ArkAngleSlider.MarkerProps;

const Marker = withParts<AngleSliderMarkerProps>(
  ArkAngleSlider.Marker,
  'marker',
);

export type AngleSliderValueTextProps = ArkAngleSlider.ValueTextProps;

const ValueText = withParts<AngleSliderValueTextProps>(
  ArkAngleSlider.ValueText,
  'value-text',
);

export type AngleSliderHiddenInputProps = ArkAngleSlider.HiddenInputProps;

const HiddenInput = withParts<AngleSliderHiddenInputProps>(
  ArkAngleSlider.HiddenInput,
  'hidden-input',
);

export type AngleSliderControlProps = ArkAngleSlider.ControlProps;

const Control = withParts<AngleSliderControlProps>(
  ArkAngleSlider.Control,
  'control',
);

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
