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

export const Carousel = Object.assign(Root, {
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
