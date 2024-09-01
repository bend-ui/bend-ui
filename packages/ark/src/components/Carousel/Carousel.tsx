import { Carousel as CarouselPrimitive } from '@ark-ui/react';
import { carousel } from '@particles/styled-system/recipes';
import type { CarouselVariantProps } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import { createStyleContext } from '../../utils';
import type { ComponentProps } from 'react';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(carousel);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, CarouselPrimitive.RootProviderBaseProps>,
    CarouselVariantProps
  >
>(CarouselPrimitive.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, CarouselPrimitive.RootBaseProps>,
    CarouselVariantProps
  >
>(CarouselPrimitive.Root, 'root');

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ControlBaseProps>
>(CarouselPrimitive.Control, 'control');

export const IndicatorGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.IndicatorGroupBaseProps>
>(CarouselPrimitive.IndicatorGroup, 'indicatorGroup');

export const Indicator = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.IndicatorBaseProps>
>(CarouselPrimitive.Indicator, 'indicator');

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ItemGroupBaseProps>
>(CarouselPrimitive.ItemGroup, 'itemGroup');

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ItemBaseProps>
>(CarouselPrimitive.Item, 'item');

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.NextTriggerBaseProps>
>(CarouselPrimitive.NextTrigger, 'nextTrigger');

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.PrevTriggerBaseProps>
>(CarouselPrimitive.PrevTrigger, 'prevTrigger');

export const Viewport = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ViewportBaseProps>
>(CarouselPrimitive.Viewport, 'viewport');

const Component = () => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
  ];
  return (
    <Root>
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
      <Viewport>
        <ItemGroup>
          {images.map((image, index) => (
            <Item key={index} index={index}>
              <img src={image} />
            </Item>
          ))}
        </ItemGroup>
      </Viewport>
    </Root>
  );
};

export const Carousel = Object.assign(Component, {
  Root,
  Control,
  PrevTrigger,
  NextTrigger,
  IndicatorGroup,
  Indicator,
  Viewport,
  ItemGroup,
  Item,
});
