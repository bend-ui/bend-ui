import { ColorPicker as ColorPickerPrimitive, parseColor } from '@ark-ui/react';

const Component = () => {
  return (
    <ColorPickerPrimitive.Root defaultValue={parseColor('#eb5e41')}>
      <ColorPickerPrimitive.Label>Color</ColorPickerPrimitive.Label>
      <ColorPickerPrimitive.Control>
        <ColorPickerPrimitive.ChannelInput channel="hex" />
        <ColorPickerPrimitive.ChannelInput channel="alpha" />
        <ColorPickerPrimitive.ValueText />
        <ColorPickerPrimitive.Trigger>
          <ColorPickerPrimitive.TransparencyGrid />
          <ColorPickerPrimitive.ValueSwatch />
        </ColorPickerPrimitive.Trigger>
      </ColorPickerPrimitive.Control>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content>
          <ColorPickerPrimitive.FormatTrigger>
            Toggle ColorFormat
          </ColorPickerPrimitive.FormatTrigger>
          <ColorPickerPrimitive.FormatSelect />
          <ColorPickerPrimitive.Area>
            <ColorPickerPrimitive.AreaBackground />
            <ColorPickerPrimitive.AreaThumb />
          </ColorPickerPrimitive.Area>
          <ColorPickerPrimitive.ChannelSlider channel="hue">
            <ColorPickerPrimitive.ChannelSliderTrack />
            <ColorPickerPrimitive.ChannelSliderThumb />
          </ColorPickerPrimitive.ChannelSlider>
          <ColorPickerPrimitive.ChannelSlider channel="alpha">
            <ColorPickerPrimitive.TransparencyGrid />
            <ColorPickerPrimitive.ChannelSliderTrack />
            <ColorPickerPrimitive.ChannelSliderThumb />
          </ColorPickerPrimitive.ChannelSlider>
          <ColorPickerPrimitive.SwatchGroup>
            <ColorPickerPrimitive.SwatchTrigger value="red">
              <ColorPickerPrimitive.Swatch value="red">
                <ColorPickerPrimitive.SwatchIndicator>
                  ✓
                </ColorPickerPrimitive.SwatchIndicator>
              </ColorPickerPrimitive.Swatch>
            </ColorPickerPrimitive.SwatchTrigger>
            <ColorPickerPrimitive.SwatchTrigger value="blue">
              <ColorPickerPrimitive.Swatch value="blue">
                <ColorPickerPrimitive.SwatchIndicator>
                  ✓
                </ColorPickerPrimitive.SwatchIndicator>
              </ColorPickerPrimitive.Swatch>
            </ColorPickerPrimitive.SwatchTrigger>
            <ColorPickerPrimitive.SwatchTrigger value="green">
              <ColorPickerPrimitive.Swatch value="green">
                <ColorPickerPrimitive.SwatchIndicator>
                  ✓
                </ColorPickerPrimitive.SwatchIndicator>
              </ColorPickerPrimitive.Swatch>
            </ColorPickerPrimitive.SwatchTrigger>
          </ColorPickerPrimitive.SwatchGroup>
          <ColorPickerPrimitive.View format="rgba">
            <ColorPickerPrimitive.ChannelInput channel="hex" />
            <ColorPickerPrimitive.ChannelInput channel="alpha" />
          </ColorPickerPrimitive.View>
          <ColorPickerPrimitive.View format="hsla">
            <ColorPickerPrimitive.ChannelInput channel="hue" />
            <ColorPickerPrimitive.ChannelInput channel="saturation" />
            <ColorPickerPrimitive.ChannelInput channel="lightness" />
          </ColorPickerPrimitive.View>
          <ColorPickerPrimitive.EyeDropperTrigger>
            Pick color
          </ColorPickerPrimitive.EyeDropperTrigger>
        </ColorPickerPrimitive.Content>
      </ColorPickerPrimitive.Positioner>
      <ColorPickerPrimitive.HiddenInput />
    </ColorPickerPrimitive.Root>
  );
};

export const ColorPicker = Object.assign(Component, {
  Root: ColorPickerPrimitive.Root,
  Label: ColorPickerPrimitive.Label,
  Control: ColorPickerPrimitive.Control,
  ChannelInput: ColorPickerPrimitive.ChannelInput,
  ValueText: ColorPickerPrimitive.ValueText,
  Trigger: ColorPickerPrimitive.Trigger,
  TransparencyGrid: ColorPickerPrimitive.TransparencyGrid,
  ValueSwatch: ColorPickerPrimitive.ValueSwatch,
  FormatTrigger: ColorPickerPrimitive.FormatTrigger,
  FormatSelect: ColorPickerPrimitive.FormatSelect,
  Area: ColorPickerPrimitive.Area,
  AreaBackground: ColorPickerPrimitive.AreaBackground,
  AreaThumb: ColorPickerPrimitive.AreaThumb,
  ChannelSlider: ColorPickerPrimitive.ChannelSlider,
  ChannelSliderTrack: ColorPickerPrimitive.ChannelSliderTrack,
  ChannelSliderThumb: ColorPickerPrimitive.ChannelSliderThumb,
  SwatchGroup: ColorPickerPrimitive.SwatchGroup,
  SwatchTrigger: ColorPickerPrimitive.SwatchTrigger,
  Swatch: ColorPickerPrimitive.Swatch,
  SwatchIndicator: ColorPickerPrimitive.SwatchIndicator,
  View: ColorPickerPrimitive.View,
  EyeDropperTrigger: ColorPickerPrimitive.EyeDropperTrigger,
  HiddenInput: ColorPickerPrimitive.HiddenInput,
  Content: ColorPickerPrimitive.Content,
  Positioner: ColorPickerPrimitive.Positioner,
});
