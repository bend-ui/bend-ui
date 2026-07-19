import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { slider } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(slider);

const SliderRoot = withProvider(SliderPrimitive.Root, 'root');
const SliderControl = withContext(SliderPrimitive.Control, 'control');
const SliderTrack = withContext(SliderPrimitive.Track, 'track');
const SliderIndicator = withContext(SliderPrimitive.Indicator, 'indicator');
const SliderThumb = withContext(SliderPrimitive.Thumb, 'thumb');

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
