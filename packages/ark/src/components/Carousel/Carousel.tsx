import { Carousel as CarouselPrimitive } from '@ark-ui/react';
import { carousel } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(carousel);

const Root = withProvider(CarouselPrimitive.Root, 'root');

const Control = withContext(CarouselPrimitive.Control, 'control');

const PrevTrigger = withContext(CarouselPrimitive.PrevTrigger, 'prevTrigger');

const NextTrigger = withContext(CarouselPrimitive.NextTrigger, 'nextTrigger');

const IndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  'indicatorGroup',
);

const Indicator = withContext(CarouselPrimitive.Indicator, 'indicator');

const Viewport = withContext(CarouselPrimitive.Viewport, 'viewport');

const ItemGroup = withContext(CarouselPrimitive.ItemGroup, 'itemGroup');

const Item = withContext(CarouselPrimitive.Item, 'item');

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
