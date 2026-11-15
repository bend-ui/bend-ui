import { Carousel } from './Carousel';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Carousel',
  component: Carousel,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

const images = [
  'https://tinyurl.com/5b6ka8jd',
  'https://tinyurl.com/7rmccdn5',
  'https://tinyurl.com/59jxz9uu',
];

export const Base: Story = {
  render: (args) => (
    <Carousel {...args} defaultPage={0} slideCount={images.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index}>
            {index + 1}
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img alt={`Slide ${index + 1}`} src={image} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel>
  ),
};
