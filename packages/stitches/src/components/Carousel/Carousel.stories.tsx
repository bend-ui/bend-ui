import { Carousel } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Default: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);
