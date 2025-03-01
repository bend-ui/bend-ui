import { Carousel as CarouselPrimitive } from '@ark-ui/react';
import { carousel } from '@particles/styled-system/recipes';
import type { CarouselVariantProps } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import { createStyleContext } from '../../utils';
import type { ComponentProps } from 'react';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(carousel);

export type CarouselRootProviderProps = ComponentProps<typeof RootProvider>;
const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, CarouselPrimitive.RootProviderBaseProps>,
    CarouselVariantProps
  >
>(CarouselPrimitive.RootProvider, 'root');

export type CarouselRootProps = ComponentProps<typeof Root>;
const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, CarouselPrimitive.RootBaseProps>,
    CarouselVariantProps
  >
>(CarouselPrimitive.Root, 'root');

const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ControlBaseProps>
>(CarouselPrimitive.Control, 'control');

const IndicatorGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.IndicatorGroupBaseProps>
>(CarouselPrimitive.IndicatorGroup, 'indicatorGroup');

const Indicator = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.IndicatorBaseProps>
>(CarouselPrimitive.Indicator, 'indicator');

const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ItemGroupBaseProps>
>(CarouselPrimitive.ItemGroup, 'itemGroup');

const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CarouselPrimitive.ItemBaseProps>
>(CarouselPrimitive.Item, 'item');

const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.NextTriggerBaseProps>
>(CarouselPrimitive.NextTrigger, 'nextTrigger');

const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, CarouselPrimitive.PrevTriggerBaseProps>
>(CarouselPrimitive.PrevTrigger, 'prevTrigger');

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
  Root,
  Control,
  PrevTrigger,
  NextTrigger,
  IndicatorGroup,
  Indicator,
  ItemGroup,
  Item,
});
