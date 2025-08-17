import { Carousel as CarouselPrimitive } from '@ark-ui/react';
import { carousel } from '@particles/styled-system/recipes';
import { createStyleContext } from '@particles/styled-system/jsx';
import type { ComponentProps } from 'react';

const { withProvider, withContext, withRootProvider } =
  createStyleContext(carousel);

export type CarouselRootProviderProps = ComponentProps<typeof RootProvider>;
const RootProvider = withRootProvider(CarouselPrimitive.RootProvider);

export type CarouselRootProps = ComponentProps<typeof Root>;
const Root = withProvider(CarouselPrimitive.Root, 'root');

const Control = withContext(CarouselPrimitive.Control, 'control');

const IndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  'indicatorGroup',
);

const Indicator = withContext(CarouselPrimitive.Indicator, 'indicator');

const ItemGroup = withContext(CarouselPrimitive.ItemGroup, 'itemGroup');

const Item = withContext(CarouselPrimitive.Item, 'item');

const NextTrigger = withContext(CarouselPrimitive.NextTrigger, 'nextTrigger');

const PrevTrigger = withContext(CarouselPrimitive.PrevTrigger, 'prevTrigger');

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
  Root,
  Control,
  PrevTrigger,
  NextTrigger,
  IndicatorGroup,
  Indicator,
  ItemGroup,
  Item,
});
