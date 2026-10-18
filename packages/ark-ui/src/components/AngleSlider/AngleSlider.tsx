import type { SlotRecipeComponent } from '@bend-ui/core';
import { AngleSlider as ArkAngleSlider } from '@ark-ui/react';
import { angleSlider } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createSlotRecipeContext(angleSlider);

export interface AngleSliderRootProps extends ArkAngleSlider.RootProps {
  children?: React.ReactNode;
}

const Root: SlotRecipeComponent<
  typeof ArkAngleSlider.Root,
  (typeof angleSlider)['__type']
> = withProvider(ArkAngleSlider.Root, 'root');

export type AngleSliderLabelProps = ArkAngleSlider.LabelProps;

const Label: SlotRecipeComponent<typeof ArkAngleSlider.Label> = withContext(
  ArkAngleSlider.Label,
  'label',
);

export type AngleSliderThumbProps = ArkAngleSlider.ThumbProps;

const Thumb: SlotRecipeComponent<typeof ArkAngleSlider.Thumb> = withContext(
  ArkAngleSlider.Thumb,
  'thumb',
);

export type AngleSliderMarkerGroupProps = ArkAngleSlider.MarkerGroupProps;

const MarkerGroup: SlotRecipeComponent<typeof ArkAngleSlider.MarkerGroup> =
  withContext(ArkAngleSlider.MarkerGroup, 'markerGroup');

export type AngleSliderMarkerProps = ArkAngleSlider.MarkerProps;

const Marker: SlotRecipeComponent<typeof ArkAngleSlider.Marker> = withContext(
  ArkAngleSlider.Marker,
  'marker',
);

export type AngleSliderValueTextProps = ArkAngleSlider.ValueTextProps;

const ValueText = ArkAngleSlider.ValueText;

export type AngleSliderHiddenInputProps = ArkAngleSlider.HiddenInputProps;

const HiddenInput = ArkAngleSlider.HiddenInput;

export type AngleSliderControlProps = ArkAngleSlider.ControlProps;

const Control: SlotRecipeComponent<typeof ArkAngleSlider.Control> = withContext(
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
