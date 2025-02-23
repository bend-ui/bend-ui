import { forwardRef } from 'react';
import { Slider as SliderPrimitive } from '@base-ui-components/react/slider';
import { slider } from '@particles/styled-system/recipes';

const Root = SliderPrimitive.Root;
const Value = SliderPrimitive.Value;
const Control = SliderPrimitive.Control;
const Track = SliderPrimitive.Track;
const Indicator = SliderPrimitive.Indicator;
const Thumb = SliderPrimitive.Thumb;

export type SliderProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Slider = Object.assign(Component, {
  Root,
  Value,
  Control,
  Track,
  Indicator,
  Thumb,
});
