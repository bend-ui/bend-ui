import type { ComponentProps } from 'react';
import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { slider } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(slider);

const SliderRoot = withProvider(SliderPrimitive.Root, 'root');
const SliderControl = withContext(SliderPrimitive.Control, 'control');
const SliderTrack = withContext(SliderPrimitive.Track, 'track');
const SliderIndicator = withContext(SliderPrimitive.Indicator, 'indicator');
const SliderThumb = withContext(SliderPrimitive.Thumb, 'thumb');

export type SliderProps = Omit<ComponentProps<typeof SliderRoot>, 'children'>;

/** Control, track and one thumb per value; use the parts for custom layouts. */
const Component = (props: SliderProps) => {
  const current = props.value ?? props.defaultValue;
  const thumbCount = Array.isArray(current) ? current.length : 1;
  return (
    <SliderRoot {...props}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          {thumbCount === 1 ? (
            <SliderThumb />
          ) : (
            Array.from({ length: thumbCount }, (_, index) => (
              <SliderThumb key={index} index={index} />
            ))
          )}
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  );
};

Object.assign(Component, { displayName: 'Slider' });

export const Slider = Object.assign(Component, {
  Root: SliderRoot,
  Control: SliderControl,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
});
