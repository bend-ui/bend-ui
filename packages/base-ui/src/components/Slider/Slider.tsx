import { Slider as SliderPrimitive } from '@base-ui-components/react/slider';

const SliderRoot = SliderPrimitive.Root;
const SliderControl = SliderPrimitive.Control;
const SliderTrack = SliderPrimitive.Track;
const SliderIndicator = SliderPrimitive.Indicator;
const SliderThumb = SliderPrimitive.Thumb;

const Component = () => {
  return (
    <SliderRoot defaultValue={25}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  );
};

export const Slider = Object.assign(Component, {
  Root: SliderRoot,
  Control: SliderControl,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
});
