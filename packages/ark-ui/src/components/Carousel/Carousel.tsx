'use client';
import type { SlotRecipeComponent } from '@bend-ui/core';

import { Carousel as CarouselPrimitive } from '@ark-ui/react';
import { carousel } from '@bend-ui/styled-system/recipes';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import type { ComponentProps } from 'react';

const { withProvider, withContext, withRootProvider } =
  createSlotRecipeContext(carousel);

export type CarouselRootProviderProps = ComponentProps<typeof RootProvider>;
const RootProvider = withRootProvider(CarouselPrimitive.RootProvider);

export type CarouselRootProps = ComponentProps<typeof Root>;
const Root: SlotRecipeComponent<
  typeof CarouselPrimitive.Root,
  (typeof carousel)['__type']
> = withProvider(CarouselPrimitive.Root, 'root');

const Control: SlotRecipeComponent<typeof CarouselPrimitive.Control> =
  withContext(CarouselPrimitive.Control, 'control');

const IndicatorGroup: SlotRecipeComponent<
  typeof CarouselPrimitive.IndicatorGroup
> = withContext(CarouselPrimitive.IndicatorGroup, 'indicatorGroup');

const Indicator: SlotRecipeComponent<typeof CarouselPrimitive.Indicator> =
  withContext(CarouselPrimitive.Indicator, 'indicator');

const ItemGroup: SlotRecipeComponent<typeof CarouselPrimitive.ItemGroup> =
  withContext(CarouselPrimitive.ItemGroup, 'itemGroup');

const Item: SlotRecipeComponent<typeof CarouselPrimitive.Item> = withContext(
  CarouselPrimitive.Item,
  'item',
);

const NextTrigger: SlotRecipeComponent<typeof CarouselPrimitive.NextTrigger> =
  withContext(CarouselPrimitive.NextTrigger, 'nextTrigger');

const PrevTrigger: SlotRecipeComponent<typeof CarouselPrimitive.PrevTrigger> =
  withContext(CarouselPrimitive.PrevTrigger, 'prevTrigger');

const Component = () => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
  ];
  return (
    <Root defaultPage={0} slideCount={images.length}>
      <Control>
        <PrevTrigger>Previous</PrevTrigger>
        <NextTrigger>Next</NextTrigger>
      </Control>
      <IndicatorGroup>
        {images.map((_, index) => (
          <Indicator key={index} index={index}>
            {index + 1}
          </Indicator>
        ))}
      </IndicatorGroup>
      <ItemGroup>
        {images.map((image, index) => (
          <Item key={index} index={index}>
            <img alt={`Slide ${index}`} src={image} />
          </Item>
        ))}
      </ItemGroup>
    </Root>
  );
};

export const Carousel = Object.assign(Component, {
  RootProvider,
  Root,
  Control,
  PrevTrigger,
  NextTrigger,
  IndicatorGroup,
  Indicator,
  ItemGroup,
  Item,
});
